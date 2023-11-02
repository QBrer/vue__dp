// main.js

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from '../router/router.js'

Vue.use(ElementUI)
Vue.use(router)

new Vue({
  el: '#app',
  router, // 使用路由
  render: (h) => h(App),
})
