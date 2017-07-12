<template>
  <div id="app">
		<m-header></m-header>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import mHeader from 'component/header/header'
export default {
  name: 'app',
  components: {
    mHeader
  }
}
</script>

<style>
	@import 'common/css/reset.css'
</style>

