import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Vue应用的入口文件
createApp(App).use(store).use(router).mount('#app')
// 将APP组件挂载到id为app的元素上，这个元素在 public/index.html 文件中定义
