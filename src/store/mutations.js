import vue from 'vue'
const mutations = {
  SET_APPNAME (state, val) {
    state.appName = val.appName
  },
  SET_APP_VERSION (state) {
    vue.set(state, 'appversion', 'v2.0')
  }
}
export default mutations
