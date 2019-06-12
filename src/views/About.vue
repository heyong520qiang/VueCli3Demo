<template>
  <div class="about">
    <h3>{{parm}}</h3>
    <button @click="handle">click122</button>
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  name: 'about',
  props: {
    parm: {
      type: String,
      default: 'apple'
    }
  },
  mounted () {
    this.$bus.$on('on-click', m => {
      this.msg = m
    })
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handle () {
      console.log(this.parm)
    }
  }
}
</script>
<style scoped>
.about{background: #eee;}
</style>
