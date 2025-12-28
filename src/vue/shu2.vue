<template>
    <!-- 生命周期演示 -->
  <div class="box">
    <h3>生命周期 Demo 组件</h3>
    <p ref="pEl">当前 count: {{ count }}</p>
    <button @click="add">+1(触发更新)</button>
  </div>



<!-- 网络请求 -->
<div>
    <h2>axios 简单请求示例</h2>
    <p>打开控制台(F12 → Console)查看请求结果</p>
</div>


<!-- 封装网络请求 -->
 <div>
    <h2>单组件内封装网络请求示例</h2>
    <button @click="fetchIpAndWeather">点击发起请求</button>
    <p>打开控制台(F12 → Console)查看请求的详细数据</p>
  </div>


  <!-- 路由切换页面 -->
  <div>
    <nav>
      <!-- to="/home" 对应 routes 里的 path: '/home' -->
      <router-link to="/home">首页</router-link>
    </nav>

    <hr />

    <!-- 这个位置用来显示“当前路径对应的组件” -->
    <router-view />
  </div>
</template>

<script setup>
    import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
    } from 'vue'
    import axios from 'axios'
        // 生命周期演示
        // 用来触发组件更新
        const count = ref(0)
        // 拿一个 DOM 节点，用来演示 onMounted 可以访问真实 DOM
        const pEl = ref(null)
        // 点击按钮让 count++
        const add = () => {
        count.value++
    }




/* ----------------- 生命周期演示开始 ----------------- */

// 1. 组件“即将挂载”（还没渲染到页面上）
onBeforeMount(() => {
  console.log('onBeforeMount:：组件即将挂载，还没有真实 DOM')
})

// 2. 组件“已经挂载完成”（已经渲染到页面）  常用
onMounted(() => {
  console.log('onMounted:组件挂载完成，可以访问 DOM 了')
  console.log('pEl DOM 节点：', pEl.value) // <p> 当前 count：0 </p>
})

// 3. 组件即将因为响应式数据变化而更新
onBeforeUpdate(() => {
  console.log('onBeforeUpdate:即将因为响应式数据变化而重新渲染，旧的 DOM 还在')
})

// 4. 组件更新完成（模板已经根据最新数据重新渲染）
onUpdated(() => {
  console.log('onUpdated:组件更新完成，最新 count:', count.value)
})

// 5. 组件即将被卸载（从页面上移除前）
onBeforeUnmount(() => {
  console.log('onBeforeUnmount:组件马上要被销毁了，可以做一些准备工作')
})

// 6. 组件已经被卸载（从页面完全移除）  常用
onUnmounted(() => {
  console.log('onUnmounted:组件已经被销毁，定时器、监听之类的东西要在这里清理')
})



// 网络请求
onMounted(async () => {
  try {
    // 直接用 axios.get 发请求（这里用公开测试接口演示)
    const res = await axios.get('http://ip-api.com/json/?lang=zh-CN')
    
    // 把请求到的数据打印到控制台
    console.log('请求成功，城市为：', res.data.regionName)
  } catch (error) {
    // 如果请求出错，打印错误信息
    console.error('请求失败：', error)
  }
})

// 封装网络请求
// 封装：获取 IP 信息的请求函数
// 调用这个函数，就会去请求 http://ip-api.com/json/?lang=zh-CN
const getIpInfo = () => {
  // axios.get 返回一个 Promise，外面可以用 await 等它
  return axios.get('http://ip-api.com/json/?lang=zh-CN')
}

// 封装：根据城市名获取天气的请求函数
// @param {string} city - 城市名称，比如 "Shanghai"
const getWeatherByCity = (city) => {
  // encodeURIComponent 防止城市名里有中文、空格导致 URL 出错
  return axios.get(`https://wttr.in/${encodeURIComponent(city)}?format=j1`)
}
const fetchIpAndWeather = async () => {
  try {
    // 第一步：获取 IP 信息
    const ipRes = await getIpInfo()
    console.log('① IP 接口返回的数据：', ipRes.data)

    const city = ipRes.data.city
    console.log('当前城市：', city)

    if (!city) {
      console.warn('没有拿到 city,后续天气查询终止')
      return
    }

    // 第二步：根据 city 获取天气
    const weatherRes = await getWeatherByCity(city)
    console.log('② 天气接口返回的数据：', weatherRes.data)
  } catch (error) {
    console.error('请求过程中出错：', error)
  }
}


 
</script>