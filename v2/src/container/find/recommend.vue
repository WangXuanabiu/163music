<template>
  <div id="recommend" class="dl-f">
    <slide></slide>
  </div>
</template>

<script>
import Slide from '../../component/slide'
export default {
  name: 'recommend',
  components: {
    Slide
  },
  data: function () {
    return {}
  }
}
</script>

<style lang='less' >
  #recommend{
    background-image: url("http://p1.music.126.net/Ii8ylQQKcy2Rk7U7Sou-tA==/109951163518009742.jpg");
    background-repeat: repeat-x;
    width: 100%;
    min-width: 982px;
  }
</style>
