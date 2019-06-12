<template>
  <div class="about">
    <h3>{{parm}}</h3>
    <button @click="handle">click</button>
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
  methods: {
    handle () {
      console.log(this.parm)
    }
  }
}
</script>
