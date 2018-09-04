<template>
  <div class="hello">
    <subnav :selected="navName" />
    <router-view></router-view>
  </div>
</template>

<script>
import Subnav from './subnav'
export default {
  name: 'Find',
  components: {
    Subnav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    navName: function () {
      var path = this.$route.path
      return path.split('/')[2]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  p{
    font-size: 40px;
    color: red;
  }
}
</style>
