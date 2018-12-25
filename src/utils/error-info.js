/**
 * 错误信息类
 * @param type --- 错误类型vue/axios
 * @param code --- 0/http response code
 * @param message --- error message
 * @param url --- current location
 */

export default class ErrorInfo {
	constructor ({ type, code, message, url }) {
		this.type = type
		this.code = code
		this.message = message
		this.url = url
	}
}
