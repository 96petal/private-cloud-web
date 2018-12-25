<template>
	<div class="self">
		<el-row type="flex" justify="space-between">
			<el-col :span="18" :sm="12">
				breadcrumb here
			</el-col>
			<el-col :span="6" :sm="12">
				buttons here
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="leftSpan">
				table here
			</el-col>
			<el-col :span="24 - leftSpan">
				tabs here
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Self',
		data () {
			return {
				data: {},
				leftSpan: 24,
				breadcrumbs: [{
					name: '个人空间',
					path: '/self'
				}],
				currentSelect: []
			}
		}
	}
</script>

<style scoped>
	.self {

	}
</style>
