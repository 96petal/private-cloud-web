import axios from 'axios'
import store from '../store'
import { Loading } from 'element-ui'
import ErrorInfo from '../utils/error-info'

const addErrorLog = errorInfo => {
	const { statusText, status, request: { responseURL } } = errorInfo
	let info = new ErrorInfo({
		type: 'ajax',
		code: status,
		message: statusText,
		url: responseURL
	})
	store.dispatch('errorLogAction', info)
}

class HttpRequest {
	constructor (baseUrl) {
		this.baseUrl = baseUrl
		this.queue = {}
		this.loadingInstance = {}
	}

	getInsideConfig () {
		const config = {
			baseURL: this.baseUrl,
			headers: {
				//
			}
		}
		return config
	}

	destroy (url) {
		delete this.queue[url]
		if (!Object.keys(this.queue).length) {
			// Spin.hide()
		}
	}

	interceptors (instance, url) {
		// 请求拦截
		instance.interceptors.request.use(config => {
			// 添加全局的loading...
			if (!Object.keys(this.queue).length) {
				//
				this.loadingInstance = Loading.service({
					background: 'rgba(0, 0, 0, 0.8)',
					text: 'loading'
				})
			}
			this.queue[url] = true
			return config
		}, error => {
			return Promise.reject(error)
		})

		// 响应拦截
		instance.interceptors.response.use(res => {
			this.destroy(url)
			const { data, status } = res
			this.loadingInstance.close()
			return { data, status }
		}, error => {
			this.destroy(url)
			let errorInfo = error.response
			if (!errorInfo) {
				const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
				errorInfo = {
					statusText,
					status,
					request: { responseURL: config.url }
				}
			}
			addErrorLog(errorInfo)
			this.loadingInstance.close()
			return Promise.reject(error)
		})
	}

	request (options) {
		const instance = axios.create()
		options = Object.assign(this.getInsideConfig(), options)
		this.interceptors(instance, options.url)
		return instance(options)
	}
}

export default HttpRequest
