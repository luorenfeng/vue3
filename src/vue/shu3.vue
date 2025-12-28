<template>
    <!-- 调用状态管理中的数据 -->
    <p>{{ counter.count }}</p>
    <p>{{ counter.title }}</p>
    <button @click="counter.increment">点我+1</button>
    <p>{{ counter.doubleCount }}</p>

    <p>具名插槽之间传递数据</p>
    <slot name="main" :parent="child" :paren="chil"></slot>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from './状态管理/counter'
const counter = useCounterStore()

const child = ref('来自插槽子组件的一句话')
const chil = ref('123')
</script>