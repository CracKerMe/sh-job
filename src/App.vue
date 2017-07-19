<template>
  <div id="app">
		<theader></theader>
		<transition name="silide">
			<router-view></router-view>
		</transition>
  </div>
</template>

<script>
import Theader from 'component/Theader'
export default {
  name: 'app',
  components: {
    Theader
  }
}
</script>
<style>
	 @import 'common/css/reset.css'; 
</style>

