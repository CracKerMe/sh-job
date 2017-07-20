/**
 * Created by 王冬 on 2017/7/19.
 * QQ: 20004604
 * weChat: qq20004604
 */
import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    developersList: new Set()
  },
  mutations: {
    // 参数一是state状态
    addDeveloper (state, somebody) {
      state.developersList.add(somebody)
    },
    removeDeveloper (state, somebody) {
      state.developersList.delete(somebody)
    }
  },
  actions: {
    FetchTest () {
      api.test().then(data => {
        console.log(data)
      })
    }
  },
  modules: {

  }
})

export default store
