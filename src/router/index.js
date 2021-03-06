import Vue from 'vue'
import Router from 'vue-router'
import { basicPage, RouteView } from '@/views/layout/index'
import TreeList from '@/views/basicTree/treeList'
import TreeListMultiple from '@/views/basicTree/treeListMultiple'
import IntroGuide from '@/views/guide/introGuide'
import PagewalkthroughGuide from '@/views/guide/pagewalkthroughGuide'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basicPage',
      component: basicPage,
      redirect: '/HelloWorld',
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: {
            title: '欢迎页面',
            icon: 'home'
          }
        },
        {
          path: '/treeManage',
          name: 'treeManage',
          component: RouteView,
          meta: {
            title: '树管理',
            icon: 'apartment',
          },
          children: [
            {
              path: '/treeManage/TreeList',
              name: 'TreeList',
              component: TreeList,
              meta:{ title: '基础树'}
            },
            {
              path: '/treeManage/TreeListMultiple',
              name: 'TreeListMultiple',
              component: TreeListMultiple,
              meta: { title: '多级树'}
            },
          ]
        },
        {
          path: '/guideManage',
          name: 'guideManage',
          component: RouteView,
          meta: {
            title: '新手引导',
            icon: 'question-circle',
          },
          children: [
            {
              path: '/guideManage/IntroGuide',
              name: 'IntroGuide',
              component: IntroGuide,
              meta:{ title: 'introjs实现'}
            },
            {
              path: '/guideManage/PagewalkthroughGuide',
              name: 'PagewalkthroughGuide',
              component: PagewalkthroughGuide,
              meta: { title: 'pagewalkthrough实现'}
            },
          ]
        }
      ]
    }
  ]
})
