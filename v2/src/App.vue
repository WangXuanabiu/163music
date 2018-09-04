<template>
  <div id="app">
    <headers :selected="topName" />
    <router-view/>
  </div>
</template>

<script>
import Headers from './container/headers'
export default {
  name: 'App',
  components: {
    Headers
  },
  computed: {
    topName: function () {
      var path = this.$route.path
      return path.split('/')[1]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
