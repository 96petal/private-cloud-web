import axios from './index'
import Qs from 'qs'
import { commonParams } from './config'

/**
 * 用户登录
 * @uid
 * @user_slug
 * @password
 * @captcha
 * @auto_login
 * @sms_captcha
 * @rem_pwd
 * @bind_type
 * @auto_token
 * @timesid
 */

export const login = (loginUser) => {
	return axios.request({
		url: 'user/login',
		method: 'post',
		params: {
			account_id: -1,
			uid: -1,
			S: 'undefined'
		},
		data: Qs.stringify({
			bind_type: false,
			user_slug: loginUser.username,
			password: loginUser.password
		})
	})
}

/**
 * 用户退出
 * @param user_slug
 */

export const logout = (userSlug) => {
	return axios.request({
		url: 'user/logout',
		method: 'post',
		params: Object.assign({}, commonParams()),
		data: Qs.stringify({
			user_slug: userSlug
		})
	})
}
