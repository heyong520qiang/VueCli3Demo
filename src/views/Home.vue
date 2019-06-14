<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{food}}
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">name_view页面</button>
    <button @click="handleClick('replace')">about页面</button>
    <button @click="getInfo">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '_c/HelloWorld.vue'

export default {
  name: 'home',
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick (Ctype) {
      if (Ctype === 'back') {
        this.$router.go(-1) // or back()
      } else if (Ctype === 'push') {
        this.$router.push('/name_view') // 指定路径
      } else if (Ctype === 'replace') {
        const name = 'jim'
        this.$router.replace({
          path: `/argu/${name}` // path取不到param 需用name.
          // params:{
          //   name:'hello'
          // }
          // ,
          // query: {
          //   id: "hello"
          // }
        }) // 指定路径
      }
    },
    getInfo () {
      //
    }
  },
  components: {
    HelloWorld
  }
}
</script>
