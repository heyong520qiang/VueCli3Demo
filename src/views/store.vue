<template>
  <div class="store">
    <ainput @input='handleInput'></ainput>
    <!-- <p>{{iptValue}}</p> -->
    <a-show :content="iptValue"></a-show>
    {{appNameAdd}}
    {{userName}}
  </div>
</template>

<script>
import ainput from '_c/Ainput.vue'
import AShow from '_c/Ashow.vue'
import { mapState, mapGetters } from 'vuex'
// import {creatNamespacedHelpers} from 'vuex'
// const {mapGetters} = creatNamespacedHelpers('user')
export default {
  data () {
    return {
      iptValue: ''
    }
  },
  methods: {
    handleInput (val) {
      this.iptValue = val
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
      userName: state => state.user.userName
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
