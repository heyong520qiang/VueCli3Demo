<template>
  <div class="store">
    <ainput v-model="stateValue"></ainput>
    <p>{{stateValue}}</p>
    <a-show :content="stateValue"></a-show>
    {{appNameAdd}}
    {{userName}}
    <button @click="changeAppName">changeAppName</button>

    <button @click="changeAppName_action">actions-changeAppName</button>
    {{appversion}}
  </div>
</template>

<script>
import ainput from '_c/Ainput.vue'
import AShow from '_c/Ashow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import {creatNamespacedHelpers} from 'vuex'
// const {mapGetters} = creatNamespacedHelpers('user')
export default {
  data () {
    return {
      iptValue: ''
    }
  },
  methods: {
    ...mapMutations(['SET_APP_VERSION', 'SET_APPNAME', 'SET_USER_NAME', 'SET_STATEVALUE']),
    ...mapActions(['updated']),
    handleInput (val) {
      this.iptValue = val
    },
    changeAppName () {
      // this.$store.commit('SET_APPNAME','mmm')
      // this.$store.commit('SET_APPNAME',{
      //   appName:'mmm'
      //   })
      // this.$store.commit({
      //   type: "SET_APPNAME",
      //   appName: "mmm"
      // });
      // this.$store.commit('SET_APP_VERSION');
      this.SET_APP_VERSION()
      this.SET_APPNAME({ appName: 'wqwqwq' })
      // this.SET_USER_NAME('NEWUsername01')
      this.$store.state.user.userName = '0002'
    },
    changeAppName_action () {
      this.updated()
    }
  },
  computed: {
    // ...mapState(['appName']),
    ...mapState({
      // appName:'appName'  //1
      // appName:state =>state.appName //2
      appName: function (state) {
        return state.appName
      },
      userName: state => state.user.userName,
      appversion: state => state.appversion
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (val) {
        this.SET_STATEVALUE(val)
      }
    },
    ...mapGetters(['appNameAdd'])
    // appNameAdd() {
    //   return this.$store.getters.appNameAdd;
    // }
    // appName(){
    //   return this.$store.state.appName
    // },
    // userName(){
    //   return this.$store.state.user.userName
    // }
  },
  components: {
    ainput,
    AShow
  }
}
</script>

<style scoped>
</style>
