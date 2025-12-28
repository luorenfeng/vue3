<template>
  <div>
    <h2>用户详情页面</h2>
    <p>当前路由的id参数是:{{ id }}</p>
    <!-- 提供一个回到列表的链接 -->
    <router-link to="/home">返回用户列表</router-link>
  </div>
</template>
<script setup>
  import { useRoute } from 'vue-router'
// 从路由参数里取出 route 里面有当前路径、参数、query 等信息
// route.path
// route.params.id
// route.query.xxx
  const route = useRoute() //useRoute()能拿到当前正在访问的那个路由对象
  // console.log(useRoute());
  
  // 从路由参数里取出 id
  // 注意：params 里的值默认是字符串
  const id = route.params.id
</script>