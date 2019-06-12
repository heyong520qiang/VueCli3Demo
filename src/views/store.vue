<template>
  <div class="store">
<ainput @input = 'handleInput' ></ainput>
<!-- <p>{{iptValue}}</p> -->
<a-show :content="iptValue"></a-show>
  </div>
</template>

<script>
import ainput from '_c/Ainput.vue'
import AShow from '_c/Ashow.vue'
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
  components: {
    ainput,
    AShow

  }
}
</script>

<style scoped>
</style>
