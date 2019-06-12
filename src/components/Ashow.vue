<template>
  <div class="ashow">
    <p>Ashow:{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
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
