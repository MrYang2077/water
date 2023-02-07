// src/main.js
// 解构出 createApp
import { createApp } from 'vue'
// 导入根组件
import App from './App.vue'
// 导入路由配置
import router from './router'

// 导入格式化样式文件
import 'normalize.css/normalize.css' // ++++++++++++++++++

// 导入 element-plus 样式
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import store from "@/store/index"
import './mock/index'
// 导入全局样式
// import './assets/main.css'
// 创建一个梗 app 实例
const app = createApp(App)
    // 将路由挂载到 app 实例中
app.use(router)

app.use(store)

// 将 app 实例挂载到 id 为 app 的 元素上
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}