<template>
    <!-- 组件传递 这是子组件 -->
    <p>{{ msg }}</p>
    <p>{{ title }}</p>

    <!-- 子传父事件 -->
    <button @click="ert('ad',2)">子传父</button>

    <!-- 父传子 v-model -->
    <p>{{ qqq }}</p>

</template>

<script setup>
    // defineProps接收父组件传递过来的值
    // const ert = defineProps(['msg','title'])  不校验 接收允许任何类型的数据
    const { msg, title } = defineProps({
        msg: {
            type:[String,Number],  //校验传过来的数据类型  校验多个数据类型需要添加中括号
            default:'不传数据的默认信息'  //如果父组件没传数据就显示这个
        },
        title: {
            type:Number,
            default:'不传数据的默认信息',
            // required: true   //父组件不传递数据控制台就报警告
        }
    })

    // v-model 组件传递 defineModel()
    const qqq = defineModel();

    // 子传父事件 defineEmits
    const ert = defineEmits(['ad']);
    
</script>