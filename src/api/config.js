import { getToken, getLoginUser } from '../utils/token'

/**
 * 每个请求都需要的请求参数
 * @param _ 时间戳
 * @param accout_id 账户
 * @param uid 用户
 * @param S 凭证
 */

export const commonParams = () => {
	return {
		_: (new Date()).valueOf(),
		account_id: 1,
		uid: getLoginUser().uid,
		S: getToken().S
	}
}
