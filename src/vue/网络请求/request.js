import axios from "axios";
//拦截器加封装网络请求函数
const request = axios.create({
  // 基础地址：以后你写 '/user'，实际请求的是 'http://api.example.com/user'
  baseURL: "http://api.example.com",
  // 如果五秒没响应就超时
  timeout: 5000,
});
// interceptors: 拦截器集合。
// request 发请求前
// use接收两个函数作为参数 成功函数和失败函数
request.interceptors.request.use(
  // 成功函数
  (config) => {
    // 在请求发出前给所有请求都贴上 Token (身份标签)
    const token = localStorage.getItem("my_token");
    if (token) {
      config.headers.Authorization = token;
    }

    console.log("📦 请求已打包，准备出发...");

    //必须返回 config 不然token带不出去
    return config;
  },
  //   失败函数
  (error) => {
    // 把失败的原因扔出去给调用的catach接收
    return Promise.reject(error);
  }
);
// 收到数据后 也是接收两个函数 成功函数和失败函数
request.interceptors.response.use(
  // 成功函数
  (response) => {
    console.log("✅ 收到回复，拆箱完毕！");

    // 后端返回的数据都放在data字段
    // 我们在这里直接把 .data 取出来，以后在页面里就不用写 res.data.data 了
    return response.data;
  },
  //   失败函数
  (error) => {
    // 作用：处理错误 (比如 404, 500)

    // 1. 根据状态码，给用户提示
    if (error.response && error.response.status === 401) {
      alert("未登录，请去登录！");
    } else {
      alert("网络开小差了：" + error.message);
    }

    // 2. 必须把错误继续抛出，否则组件里 catch 不到错误
    return Promise.reject(error);
  }
);
//   导出 让其他组件能用
export default request;
