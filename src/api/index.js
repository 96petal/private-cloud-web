import HttpRequest from './axios'
import config from '../config/index'

// Axios根据环境使用baseUrl
const baseUrl = process.env.NODE_ENV === 'development'
	? config.baseUrl.dev
	: config.baseUrl.prod

const axios = new HttpRequest(baseUrl)

export default axios
