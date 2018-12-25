import { loginService, logoutService } from '../../service/user'
import { getToken, setToken, getLoginUser, setLoginUser } from '../../utils/token'

export default {
	state: {
		loginUser: getLoginUser(),
		token: getToken()
	},
	mutations: {
		setLoginUser (state, loginUser) {
			state.loginUser = loginUser
			setLoginUser(loginUser)
		},
		setToken (state, token) {
			state.token = token
			setToken(token)
		}
	},
	getters: {

	},
	actions: {
		loginAction ({ commit }, loginUser) {
			return new Promise((resolve, reject) => {
				loginService(loginUser).then(res => {
					console.log(res)
					commit('setLoginUser', res.data)
					resolve()
				}).catch(err => {
					reject(err)
				})
			})
		},
		logoutAction ({ state, commit }) {
			return new Promise((resolve, reject) => {
				logoutService(state.loginUser.user_slug).then((res) => {
					// commit('setToken', '')
					// commit('setLoginUser', '')
					resolve(res)
				}).catch(err => {
					reject(err)
				})
			})
		}
	}
}
