<template>
  <div id="app">
		<theader></theader>
		<transition name="silide">
			<router-view></router-view>
		</transition>
    <tfooter></tfooter>
  </div>
</template>

<script>
import Theader from 'component/Theader'
import Tfooter from 'component/Foot'
export default {
  name: 'app',
  components: {
    Theader,
    Tfooter
  }
}
</script>
<style>
	 @import 'common/css/reset.css';
</style>

