//    createRouter: 用来创建路由器
//    createWebHistory: 没有#号，要后端配合重定向才行
//    createWebHashHistory: 有#号，不用后端配合操作
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 引入上面刚刚写的两个“页面组件”
import home from './home.vue'

// 1.这是一个数组，里面每一项都是一条规则
const routes = [
    {
        path: '/home',  //地址栏是/home
        name: 'home',  //路由的名字(可选)
        component: home,  //显示home组件
        children: [  //路由嵌套子级children
            {
                path: 'about/:id',
                name: 'about',
                component: () => import('./about.vue')
            }
        ]
    },
]
//创建路由实例
const router = createRouter({
    history: createWebHistory(),  //使用HashHistory 模式 带#号
    routes    // 上面定义的路由数组
})

// 3. 导出，让 main.js 可以 use(router)
export default router