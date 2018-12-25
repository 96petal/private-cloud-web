import Cookies from 'js-cookie'
import config from '../config'
const { cookieExpires } = config

export const S_KEY = 'S'
export const X_KEY = 'X-LENOVO-SESS-ID'
export const L_KEY = 'LOGIN-USER'

export const getToken = () => {
	const S = Cookies.get(S_KEY)
	const XLENOVOSESSID = Cookies.get(X_KEY)
	if (S && XLENOVOSESSID) return { S: S, XLENOVOSESSID: XLENOVOSESSID }
	else return false
}

export const setToken = ({ S, XLENOVOSESSID }) => {
	Cookies.set(S_KEY, S, { expires: cookieExpires || 1 })
	Cookies.set(X_KEY, XLENOVOSESSID, { expires: cookieExpires || 1 })
}

export const getLoginUser = () => {
	const loginUser = localStorage.getItem(L_KEY)
	if (loginUser) return JSON.parse(loginUser)
	else return false
}

export const setLoginUser = (loginUser) => {
	localStorage.setItem(L_KEY, JSON.stringify(loginUser))
}

export const logoutRemove = () => {
	Cookies.remove(S_KEY)
	Cookies.remove(X_KEY)
	localStorage.removeItem(L_KEY)
}
