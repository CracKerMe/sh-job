import Vue from 'vue'
import Router from 'vue-router'
// import Listview from '@/components/Listview'
// PC端首页
import Index from 'component/Index'
// 移动端首页
const mIndex = resolve => require(['../components/mobile/Index.vue'], resolve)
// 404
const notFound = resolve => require(['../components/404'], resolve)
// PC端组件
import HomePage from 'page/Homepage'
import Landpage from 'page/Landpage'
import Jddetail from 'page/Jddetail'
import Publishpage from 'page/Publishpage'

// 移动端组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index,
      children: [
        {
          name: 'HomePage',
          path: '',
          component: HomePage
        },
        {
          name: 'landpage',
          path: 'login',
          component: Landpage
        },
        {
          name: 'jddetail',
          path: 'detail',
          component: Jddetail
        },
        {
          name: 'publishpage',
          path: 'publish',
          component: Publishpage
        }
      ]
    },
    {
      name: 'MobileIndex',
      path: '/m',
      component: mIndex,
      children: [
        {
          name: 'HomePage',
          path: '',
          component: HomePage
        }
      ]
    },
    {
      path: '*',
      component: notFound
    }
  ]
})
