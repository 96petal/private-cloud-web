<template>
	<el-menu
		class="i-menu"
		:collapse="isCollapse"
		:collapse-transition="false"
		:router="true"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b"
	>
		<el-menu-item
			v-for="(item, index) in data"
			:key="index"
			:index="item.index"
			:class="{ 'is-collapse': isCollapse}"
			:route="{
				path: item.path
			}"
		>
			<i class="icon anticon" :class="item.icon" />
			<span slot="title">
				{{ item.name }}
			</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		name: 'IMenu',
		props: {
			isCollapse: {
				type: Boolean,
				default: false
			},
			data: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		updated () {
			this.$emit('update')
		}
	}
</script>

<style lang="scss">
	.i-menu {
		border-right: none;
		& i.icon {
			line-height: 19px;
			margin-right: 10px;
		}

		& .is-collapse {
			text-align: center;
			i.icon {
				margin-right: 0px;
			}
		}
	}
</style>
