import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/container/find/index'
import Recommend from '@/container/find/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/find'
    },
    {
      path: '/find',
      name: 'HelloWorld',
      redirect: '/find/recommend',
      component: Find,
      children: [{
        path: 'recommend',
        component: Recommend
      }, {
        path: 'list'
      }, {
        path: 'playlist'
      }, {
        path: 'video'
      }, {
        path: 'singer'
      }, {
        path: 'new'
      }]
    }
  ]
})
