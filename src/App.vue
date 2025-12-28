<template>
  <!-- <shu1 /> -->
  <!-- <Parent /> -->
  <!-- <shu2 /> -->
  <shu3>  <!-- v-slot:可以简写为# -->
    <template v-slot:main="{ parent,paren }">
      <div>
      <p>插槽</p>
      <p>{{ parent }}</p>
      <p>{{ paren }}</p>
    </div>
    </template>
  </shu3>
  <!-- <Element /> -->
</template>



<script setup>
// import shu1 from "./vue/shu1.vue"    //基础语法
// import Parent from "./vue/Parent.vue"     //父传子  子传父
// import shu2 from "./vue/shu2.vue"    //生命周期   网络请求和放封装
import shu3 from "./vue/shu3.vue"
// import Parent from "./vue/父子组件通信/Parent.vue";
// import Element from "./vue/Element Plus/Element.vue"
</script>