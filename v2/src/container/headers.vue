<template>
  <div class="headers dl-f">
    <div class="topbar dl-f">
        <img src="../assets/topbar.png">
        <ul class="dl-f">
            <li v-for="(item,index) in navList" :key="index" :class='{fst: item.name == selected}'>
                <router-link :to="item.path" >
                  {{item.label}}
                  <div class="cor"></div>
                </router-link>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import {navList} from './state.js'
export default {
  name: 'headers',
  props: ['selected'],
  data: function () {
    return {
      navList: navList
    }
  }
}
</script>

<style lang="less">
  .headers{
    width: 100%;
    min-width: 1100px;
    background-color: #242424;
    img{
      width: 177px;
      padding-right: 20px;
    }
    flex-direction: column;
    .topbar{
      justify-content: left;
      width: 1100px;
      color: #CCC;
      height: 70px;
      li{
        padding: 0  19px;
        height: 100%;
        line-height: 70px;
        font-weight: bold;
        position: relative;
      }
      a{
        color: #CCC;
      }
      .fst{
        background-color: #000;
        a{
          color: #FFF;
        }
        .cor{
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 7px solid rgba(0, 0, 0, 0);
          border-right: 7px solid rgba(0, 0, 0, 0);
          border-bottom: 7px solid #C20C0C;
        }
      }
    }
  }
</style>
