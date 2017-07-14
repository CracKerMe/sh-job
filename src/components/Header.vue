<template>
	<div class="head">
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
	@import '~common/less/config.less';
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
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
			>span{
				color: @color-grey999;
			}
			ul{
				display: inline-block;
				margin-left: 40px;
				overflow: hidden;
				li{
					padding: 0 16px;
				}
			}
		}
	}
</style>

