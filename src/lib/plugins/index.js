import errorStore from './error-store'

/**
 * 安装全局插件统一入口方法
 * @param Vue
 */

const installPlugins = Vue => {
	Vue.use(errorStore, {
		developmentOff: false
	})

	// more plugins ...
}

export default installPlugins
