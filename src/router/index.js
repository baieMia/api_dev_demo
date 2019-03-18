import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/pages/test'

Vue.use(Router)
// var ORINGIN='api';
// Vue.prototype.BASEURL = ORINGIN=='test' ? 'test...' : 'api...';
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
