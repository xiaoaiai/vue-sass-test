import Vue from 'vue'
import Router from 'vue-router'
import { basicPage } from '@/views/layout/index'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basicPage',
      component: basicPage,
      redirect: '/HelloWorld',
      title: '首页',
      icon: 'home',
      children: [
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld,
          title: '欢迎页面',
        }
      ]
    }
  ]
})
