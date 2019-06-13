import { getappname } from '@/api/app'
const actions = {
  // updated({ commit }) {
  //     getappname().then(res => {
  //         //console.log(res);
  //         //commit('SET_APPNAME',res.info)
  //         const { info } = res

  //         commit('SET_APPNAME', info)
  //     }).catch(err => {
  //         console.log(err);

  //     })
  // },
  async updated ({ commit }) {
    try {
      const { info } = await getappname()
      commit('SET_APPNAME', info)
    } catch (error) {

    }
  }
}
export default actions
