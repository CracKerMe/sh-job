// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/less/config.less'
import service from './plugin/service'
import filter from './plugin/filter'
Vue.config.productionTip = false
Vue.use(service)
Vue.use(filter)

import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
