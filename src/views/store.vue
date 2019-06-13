<template>
  <div class="store">
    <ainput @input='handleInput'></ainput>
    <!-- <p>{{iptValue}}</p> -->
    <a-show :content="iptValue"></a-show>
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
    ...mapMutations(['SET_APP_VERSION', 'SET_APPNAME', 'SET_USER_NAME']),
    ...mapActions(['updated']),
    handleInput (val) {
      this.iptValue = val
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
