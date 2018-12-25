import store from '../../store'
import ErrorInfo from '../../utils/error-info'

/**
 * 全局错误处理插件
 * @param developmentOff --- 开发环境下是否关闭该功能，默认false
 * @description
 * 用于捕获组件的渲染、观察期间及生命周期钩子里的错误
 * 捕获后可通过store发送errorLogAction提交，向后台保存错误日志
 */

export default {
	install (Vue, options) {
		if (options.developmentOff && process.env.NODE_ENV === 'development') return
		Vue.config.errorHandler = (error, vm, mes) => {
			let info = new ErrorInfo({
				type: 'vue',
				code: 0,
				message: error.message,
				url: window.location.href
			})
			Vue.nextTick(() => {
				store.dispatch('errorLogAction', info)
			})
		}
	}
}
