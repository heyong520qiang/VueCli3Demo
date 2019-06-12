<template>
  <div class="arge">
    {{name}}
  </div>
</template>

<script>
export default {
  name: 'argu',
  props: {
    name: {
      type: String,
      default: 'bit'
    }
  },
  data () {
    return {}
  },
  components: {}
}
</script>

<style scoped>
</style>
