<template>
  <div id="app">
		<m-header></m-header>
		<transition name="silide">
			<router-view></router-view>
		</transition>
  </div>
</template>

<script>
import mHeader from 'component/Header'
export default {
  name: 'app',
  components: {
    mHeader
  }
}
</script>
<style>
	 @import 'common/css/reset.css'; 
</style>

