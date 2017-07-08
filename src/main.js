// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index' // 引入路由配置
import flexsible from './static/js/flexsible' // 引入淘宝弹性布局
import axios from 'axios' // 引入axios，发送请求
Vue.config.productionTip = false 
Vue.prototype.$http = axios // 全局使用，只能在methods内使用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  // 事件仓库，组件间事件交流
  data: {
    eventHub: new Vue()
  }
})



