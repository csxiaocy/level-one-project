import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adminType: ''
  },
  mutations: {
    judgeAdminType (state, type) {
      // 'super' / 'admin'
      state.adminType = type
    }
  },
  actions: {

  }
})
