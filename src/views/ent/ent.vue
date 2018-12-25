<template>
	<div class="ent">
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
		name: 'Ent',
		data () {
			return {
				data: {},
				leftSpan: 24,
				breadcrumbs: [{
					name: '企业空间',
					path: '/ent'
				}],
				currentSelect: []
			}
		}
	}
</script>

<style scoped>
	.ent {

	}
</style>
