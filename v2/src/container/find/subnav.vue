<template>
  <div class="subnav dl-f">
    <div class="nav dl-f">
      <ul class="dl-f">
        <li v-for="(item,index) in subNavList" :key="index" :class='{fst: item.name == selected}'>
          <router-link :to="item.path">
              <span>{{item.label}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {subNavList} from '../state.js'
export default {
  name: 'subnav',
  props: ['selected'],
  data: function () {
    return {
      subNavList: subNavList
    }
  }
}
</script>

<style lang="less">
.subnav{
  height: 35px;
  width: 100%;
  min-width: 1100px;
  background-color: #C20C0C;
  a{
    color: #FFF;
  }
  align-items: center;
  .nav{
    width: 1100px;
    justify-content: left;
    ul{
      padding-left: 180px;
      span{
        margin: 0 17px;
        padding: 0 13px;
        font-size: 12px;
      }
      .fst{
        span{
          background-color: #9B0909;
          border-radius: 50px;
        }
      }
    }
  }
}
</style>
