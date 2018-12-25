<template>
	<el-pagination
		class="v-page"
		background
		layout="prev, pager, next"
		:page-size="pageSize"
		:total="total"
		:pager-count="pagerCount"
		:current-page="currentPage"
		@current-change="_currentChange"
	/>
</template>

<script>
	export default {
		name: 'VPage',
		props: {
			pageSize: {
				type: Number,
				default: 20
			},
			total: {
				type: Number,
				default: undefined
			},
			pagerCount: {
				type: Number,
				default: 5
			},
			currentPage: {
				type: Number,
				default: 1
			}
		},
		methods: {
			_currentChange (current) {
				this.$emit('current-change', current)
			}
		}
	}
</script>

<style lang="scss">
	.v-page {
		margin-top: 10px;
		text-align: right;
	}
</style>
