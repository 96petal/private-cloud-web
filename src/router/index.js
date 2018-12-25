import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import config from '../config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken, getLoginUser } from '../utils/token'
import { allowJumpTo } from '../utils/permission'

Vue.use(Router)

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = new Router({
	routes
})

const LOGIN_PAGE_NAME = 'login'

router.beforeEach((to, from, next) => {
	NProgress.start()
	if (!getToken() && to.name !== LOGIN_PAGE_NAME) {
		// 没有token且跳转非登录页
		next({
			name: LOGIN_PAGE_NAME
		})
		NProgress.done()
	} else if (!getToken() && to.name === LOGIN_PAGE_NAME) {
		// 没有token且跳转登录页
		next()
	} else if (getToken() && to.name === LOGIN_PAGE_NAME) {
		// 有token且跳转登录页
		next({
			name: config.home
		})
	} else {
		// 有token且跳转非登录页 需要判断角色权限是否可跳转
		let loginUser = getLoginUser()
		if (allowJumpTo(to.name, loginUser && loginUser.role, routes)) next()
		else next({ replace: true, name: 'error_401' })
	}
})

router.afterEach(to => {
	NProgress.done()
	window.scrollTo(0, 0)
})

export default router
