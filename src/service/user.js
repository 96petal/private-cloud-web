import { login, logout } from '../api/api-user'
import { logoutRemove } from '../utils/token'

export const loginService = (loginUser) => {
	return new Promise((resolve, reject) => {
		login(loginUser).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err.response)
		})
	})
}

export const logoutService = (userSlug) => {
	return new Promise((resolve, reject) => {
		logout(userSlug).then(res => {
			logoutRemove()
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
