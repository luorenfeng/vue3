<template>
    <!-- 组件传递 这里是父组件 父传子  -->
    <Child :msg="word" :title="iop" @ad="abn" v-model="a_model"/>
    <!-- 子传父事件 -->
    <p>{{ coco }}</p>
    
    <!-- 手动获取dom元素
    先要在标签里面写ref=盒子，然后创建一个空盒子装元素 然后 盒子名.value输出元素的标签内容 -->
    <div ref="a_dom">我是一个 div</div>
    <button @click="ert">修改元素</button><br>

    <!-- 父传子 v-model -->
    <input v-model="a_model" type="text" placeholder="在这里输入内容">

</template>

<script setup>
import Child from "./child.vue";
import { ref, onMounted } from 'vue'

    // 组件传递 父传子 创建传递的变量和值
    const word = ref('来自父组件的参数');
    const iop = ref(10);
    // v-model 双向组件传递
    const a_model = ref('v-model传递');

    // 子传父 
    const coco = ref(0);
    const abn = (num) => {
        coco.value += num;
    }


    //手动获取元素 声明一个 ref，用来装这个 DOM
    const a_dom = ref('')
    const ert = () => {
        a_dom.value.innerHTML = '修改了dom元素';
    }


</script>