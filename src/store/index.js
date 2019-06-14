import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
// import saveInLocal from './plugin/saveInLocal'
import createPersistedState from 'vuex-persistedstate'// VUEX持久化插件
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'devlopment',
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
