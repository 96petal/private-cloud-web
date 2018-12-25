<template>
	<el-row class="header" type="flex" justify="space-between">
		<el-col class="header-banner" :span="20">
			<p>Lenovo Private Cloud</p>
		</el-col>
		<el-col class="header-user" :span="4">
			<span class="header-user-name">
				{{ loginUser.user_slug }}
			</span>
			<el-dropdown @command="handleCommand">
				<span class="el-dropdown-link">
					<i class="el-icon-arrow-down el-icon--right" />
				</span>
				<el-dropdown-menu slot="dropdown" style="width: 200px">
					<el-dropdown-item command="logout">
						退出
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-col>
	</el-row>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		name: 'IHeader',
		computed: {
			...mapState({
				loginUser: (state) => state.user.loginUser
			})
		},
		methods: {
			...mapActions([
				'logoutAction'
			]),
			handleCommand (command) {
				this[command]()
			},
			logout () {
				this.logoutAction().then((res) => {
					console.log(res)
					this.$router.push({
						name: 'login'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.header {
		height: 100%;
		& .header-user {
			text-align: right;
			& .header-user-name {
				display: inline-block;
				line-height: 60px;
			}
		}
	}
</style>
