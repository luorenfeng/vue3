import { createApp } from 'vue'
import App from './App.vue'
import router from './vue/路由'
import { createPinia } from 'pinia'
// createApp(App).mount('#app')
const app = createApp(App)

// 创建 Pinia 实例
const pinia = createPinia()

// 字体图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 把所有图标注册为全局组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 使用路由
app.use(router)

app.use(pinia)

// 挂载到页面
app.mount('#app')