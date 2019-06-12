<template>
  <div class="Ainput">
    <input
      @input="handle"
      :value='name'
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
    handle (event) {
      const val = event.target.value
      this.$emit('input', val)
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
