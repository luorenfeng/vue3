<template>
  <!-- v-html插入标签 -->
   <p v-html="a_html"></p>

   <!-- v-if 如果为false直接不渲染  v-show 如果为false隐藏-->
   <p v-if="a_if">v-if</p>

   <!-- v-bind绑定在一个属性上,可以动态更新 简写为: -->
   <p :title="a_bind">v-bind:-悬停显示文字</p>

   <!-- 给for添加key,key要有唯一性-可用下标代替 -->
   <span v-for="(a,b) in a_for" :key="b">{{ a }}{{b }}--</span>
   <br>

   <!-- v-model 双向绑定   .lazy-在输入框失去焦点或点击回车键的时候才会传参
    v-model.trim：自动去掉前后空格   v-model.number：自动把字符串转成数字 -->
    <input type="text" v-model.lazy="a_model">
    <p>输入框输入的内容是:{{ a_model }}</p>

   <!-- 在行内可以直接用a_click++,  在js必须是a_click.value++  js要有value才能读到数据 -->
   <button @click="a_click++">点击事件{{ a_click }}</button>
  <br>

   <!-- 事件修饰符 可以写在行内标签点击的后面 在行内标签可以简写 js必须写全称加括号
    阻止默认跳转 preventDefault() -->
    <a @click.prevent href="http://luoren.cc">阻止跳转</a>
    <!-- 阻止冒泡 stopPropagation() -->
    <br>

    <!-- 数组变化侦听
     push() 在数组的最后面添加新元素  想要拿到或添加数据必须用value-->
    <button @click="b_click">点击添加新数组</button>
    <!-- concat()合并数组 需要把合并的数组赋值给原数组才能显示在页面 -->

    <!-- 计算属性 在js里面写
    const a = computed(() => {计算语句}) -->

    <!-- class绑定  如果a为真 xians的类名才会加上 可以添加多个
    也可以传入一个对象 对象里面写--'类名':是否为真
      <p :class="{'xians':a，'yinc',b}"></p>
      
      也可以用三元运算符判断
      <p :class="[a?'xians':'yinc']"></p>  -->

    <!-- watch()侦听器  newVal是未变化前的值 oldVal是变化后的值
      watch(要侦听的属性名,(newVal, oldVal) => {函数内容}) -->

    
</template>



<script setup>
// ① ref：放值，数组   ② reactive：一整个对象   ③ computed：算出来的值
import { ref, reactive, computed  } from 'vue'
    const a_html = "<a>v-html</a>";
    const a_if = true;
    const a_bind = '绑定属性';
    const a_for = ref(['书砚','陌路','v-for'])
    const a_model = ref('v-model 双向绑定');
    const a_click = ref(0);

    const b_click = () => {
      a_for.value.push(a_model.value)
    }

</script>



<style>

</style>