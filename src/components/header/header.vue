<template>
	<div class="head">
		<div class="top">
			<img src="../../assets/logo.png" alt="">
			<span>上海站</span>
			<ul>
				<router-link tag='li' to='/'>首页</router-link>
				<router-link tag='li' to='/company'>公司</router-link>
				<router-link v-show="amILogin" tag='li' to='/manage'>管理</router-link>
			</ul>
			<p>
				<span>登录</span>
				<span>注册</span>
			</p>
		</div>
	</div>
</template>
<script>
export default {
  name: 'header',
  data () {
    return {
      amILogin: false
    }
  }
}
</script>
<style scoped lang="less">
@import "src/common/less/config.less";
.head {
	width: 100%;
	height: 56px;
	line-height: 56px;
	.top {
		max-width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		>img {
			height: 34px;
			margin-top: 11px;
		}
		>span {
			vertical-align: top;
			color: #333;
		}
		ul{
			width: 40vw;
		}
	}
}
</style>

