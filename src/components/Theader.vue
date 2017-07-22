<template>
  <div class="head">
    <div class="topbar-box">
      <div class="topbar-content">
        <ul class="fr">
          <li><a v-on:click.prevent="doLogin">登录</a></li>
          <li><a v-on:click.prevent="doRegister">注册</a></li>
        </ul>
      </div>
    </div>
    <div class="top">
      <img class="fl" src="../assets/logo.png" alt="">
      <span class="fl">上海站</span>
      <ul class="fl">
        <li class="fl">
          <router-link to='/'>首页</router-link>
        </li>
        <li class="fl">
          <router-link to='/company'>公司</router-link>
        </li>
        <li class="fl">
          <router-link v-show="amILogin" to='/manage'>管理</router-link>
        </li>
      </ul>
      <p class="fr">
        <router-link to='/login'>登录</router-link>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'theader',
    data () {
      return {
        amILogin: false,
        developer: 'header作者'
      }
    },
    methods: {
      doLogin: function (event) {
        console.log('登录')
      },
      doRegister: function (event) {
        console.log('注册')
      }
    }
  }
</script>
<style scoped lang="less" type="text/less">
  @import '~common/less/config.less';

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .head {
    width: 100%;
    line-height: 56px;
    box-sizing: border-box;
    .topbar-box {
      height: 30px;
      background-color: #333;
      .topbar-content {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        > ul {
          line-height: 30px;
          font-size: 14px;
          li {
            float: left;
            padding: 0 7.5px;
            a {
              width: 100%;
              line-height: 15px;
              color: #c4c3c3;
              cursor: pointer;
              &:hover {
                color: #fff;
              }
            }
          }
          li + li {
            padding: 0;
            a {
              padding-left: 7.5px;
              border-left: 1px solid #5d5d5d;
            }
          }
        }
      }
    }
    .top {
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      > img {
        height: 34px;
        margin-top: 11px;
      }
      > span {
        color: @color-grey999;
      }
      ul {
        display: inline-block;
        margin-left: 40px;
        overflow: hidden;
        li {
          padding: 0 16px;
        }
      }
    }
  }
</style>

