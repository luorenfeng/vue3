<template>
    <div>
      <h2>用户列表</h2>
      <ul>
        <!-- 这里假装有三个用户，id 1、2、3 -->
        <li>
           <!-- 用 name + params 传参 -->
          <router-link :to="{name:'about', params:{ id: 1 }}">
          查看用户1的详情页面
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'about', params:{ id: 2 }}">
            查看用户2的详情页面
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'about', params:{ id: 3 }}">
            查看用户3的详情页面
          </router-link>
        </li>
      </ul>
    </div>
    <router-view />
</template>