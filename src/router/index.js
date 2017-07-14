import Vue from 'vue'
import Router from 'vue-router'
// import Listview from '@/components/Listview'
import Homepage from 'page/Homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Homepage',
      path: '/',
      component: Homepage
    }
  ]
})
