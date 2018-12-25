<template>
	<el-container class="login" style="justify-content: space-around">
		<img src="../assets/img/cf.png">
		<el-card class="box-card login-card">
			<div slot="header" class="clearfix">
				<span>{{ $t('title') }}</span>
			</div>
			<el-form ref="loginForm" :model="loginForm" :rules="rules">
				<el-form-item prop="username">
					<el-input
						v-model="loginForm.username"
						suffix-icon="el-anticon anticon icon-user"
					/>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="loginForm.password"
						suffix-icon="el-anticon anticon icon-lock"
						type="password"
					/>
				</el-form-item>
				<el-form-item>
					<el-button
						class="login-btn"
						type="primary"
						size="medium"
						@click="submitForm"
					>
						登录
					</el-button>
				</el-form-item>
			</el-form>
			<div style="display: flex;justify-content: flex-end">
				<el-dropdown @command="handleCommand">
					<span class="el-dropdown-link">
						<i class="icon anticon icon-earth" />
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="zh">
							中文
						</el-dropdown-item>
						<el-dropdown-item command="en">
							English
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</el-card>
	</el-container>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'Login',
		data () {
			return {
				loginForm: {
					username: '',
					password: ''
				},
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			...mapActions([
				'loginAction'
			]),
			submitForm () {
				this.$refs.loginForm.validate((valid) => {
					if (valid) {
						this.loginAction(this.loginForm).then(res => {
							this.$router.push('/')
						}).catch(err => {
							console.log(err)
							if (err.data) this.$message.error(err.data.message)
						})
					} else {
						console.log('error submit!!')
						return false
					}
				})
			},
			handleCommand (lang) {
				console.log(lang)
				// Cookies.set('language', lang)
				this.$i18n.locale = lang
				this.$store.dispatch('setLanguageAction', lang)
			}
		}
	}
</script>

<style lang="scss">
	.login {
		height: 100%;
		justify-content: center;
		align-items: center;
		& .login-card {
			width: 410px;
			& .el-card__body {
				padding: 40px;
			}
			& .login-btn {
				width: 100%;
			}
		}
	}
</style>
