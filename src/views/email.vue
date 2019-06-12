<template>
  <div class="email">
    <button @click="handle">点击</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handle () {
      this.$bus.$emit('on-click', 'hello')
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
