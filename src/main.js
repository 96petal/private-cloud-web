import Vue from 'vue'
import App from './App.vue'
import i18n from './lang'
import router from './router'
import store from './store/index'
import './pwa/registerServiceWorker'
import installDirectives from './lib/directives'
import installFilters from './lib/filters'
import installPlugins from './lib/plugins'
import config from './config'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './style/common.scss'
import 'antd-iconfont/iconfont.css'

import _ from 'lodash'

// install element ui
Vue.use(ElementUI, {
	i18n: (key, value) => i18n.t(key, value)
})

// close production tip
Vue.config.productionTip = false

const requireComponent = require.context('./components', true, /\.vue$/)

// register global components
requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName)
	Vue.component(componentConfig.default.name, componentConfig.default || componentConfig)
})

// register global plugins
installPlugins(Vue)

// register global filters
installFilters(Vue)

// register global directives
installDirectives(Vue)

// register global lodash
Vue.prototype._ = _

// register global config
Vue.prototype.$config = config

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app')
