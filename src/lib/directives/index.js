import clipboard from './clipboard'

/**
 * 安装全局指令统一入口方法
 * @param Vue
 */

const installDirectives = Vue => {
	Vue.directive('clipboard', clipboard)

	// more directives ...
}

export default installDirectives
