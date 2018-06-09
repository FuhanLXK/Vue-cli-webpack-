import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../views/index/index'
import Rygl from '../views/index/rygl/rygl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/rygl',
      name: 'Rygl',
      component: Rygl
    }
  ]
})
