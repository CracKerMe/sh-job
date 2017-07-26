/**
* Created by 于士博 on 2017/7/25.
* QQ: 491387425
* weChat: 491387425
* 筛选功能：目前功能为登录
*/

<template>
  <div class="filterBar">
    <div class="container">
      <div class="item" :class="{active : a == 1}" @click="a = 1">全上海</div>
      <div class="item">职位筛选</div>
      <div class="item">公司筛选</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        a: 0
      }
    },
    components: {
    },
    created () {

    },
    methods: {

    }
  }
</script>

<style scoped lang="less" type="text/less">
  .container{
    display: flex;
    justify-content: space-between;
    border: 1px solid #eee;
    .item{
      position: relative;
      flex: 1;
      text-align: center;
      padding: 1rem;
      border-right: 1px solid #eee;
      &:nth-last-child(1){
        border-right: none;
      }
      &:after{
        position: absolute;
        right: 1rem;
        top: 1.3rem;
        width: 0;
        height: 0;
        content: "";
        border-width: 5px 5px 0 5px;
        border-style: solid;
        border-color: #000 transparent;
        transition: transform .25s;
      }
      &.active:after{
        transform: rotate(180deg);
        border-color: red transparent;
      }
    }
  }


</style>
