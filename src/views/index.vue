<template>
	<el-container style="height: 100%">
		<el-header style="border-bottom: 1px solid rgb(230, 230, 230)">
			<i-header />
		</el-header>
		<el-container>
			<el-aside :width="menuWidth" style="overflow: hidden;border-right: solid 1px #e6e6e6;background-color: #545c64">
				<i-scroll ref="scroll" :auto="!isCollapse">
					<i-menu :data="menu.data" :is-collapse="isCollapse" @update="handleUpdate" />
				</i-scroll>
			</el-aside>
			<el-main>
				<router-view />
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import menu from '../components/menu/menu'

	export default {
		name: 'Index',
		data () {
			return {
				menuWidth: '200px',
				isCollapse: false,
				menu: menu
			}
		},
		mounted () {
			if (window.screen.width === 1280) {
				this.isCollapse = true
				this.menuWidth = '65px'
			}
		},
		methods: {
			handleUpdate () {
				this.$refs.scroll.reborn()
			}
		}
	}
</script>

<style>

</style>
