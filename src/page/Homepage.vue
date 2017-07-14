<template>
  <div>
    <!-- 搜索组件 -->
    <search></search>
    <!-- 筛选组件 -->
    <selector></selector>
    <!-- 列表组件 -->
    <listview></listview>
    <!-- 分页插件 -->
		<pagination for="some-entity" :records="500"></pagination>
  </div>
</template>
<script>
  import Search from 'component/Search'
  import Selector from 'component/Selector'
  import Listview from 'component/Listview'
  import { Pagination, PaginationEvent } from 'vue-pagination-2'
  export default {
    name: 'Homepage',
    components: {
      Pagination,
      Search,
      Selector,
      Listview
    }
  }
  PaginationEvent.$on('vue-pagination::some-entity', function (page) {
      // display the relevant records using the page param
})
</script>
<style>
	.VuePagination__pagination-item{
		padding: 4px;
		background: #1388ff;
		display: inline-block;
	}
</style>
