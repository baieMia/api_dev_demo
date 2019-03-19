// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

var origin='test';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      // 这里就是你的全局变量(属性)了，我这里三个属性值都是 ```function```,
      // 当然你想写什么都行
      origin:origin
    }
  }
})

if (location.hostname === 'localhost') {
  axios.defaults.baseURL = 'bendi huanjing'
  } else if (location.hostname === 'baiemia.github.io') {
  axios.defaults.baseURL = 'github huanjing'
  } 