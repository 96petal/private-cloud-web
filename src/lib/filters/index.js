import formatDate from './format-date'

/**
 * 安装全局过滤器统一入口方法
 * @param Vue
 */

const installFilters = Vue => {
	Vue.filter('formatDate', formatDate)

	// more filters ...
}

export default installFilters
