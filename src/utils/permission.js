/**
 * 根据权限判断当前路由是否可跳转
 * @param name 路由name
 * @param access 当前登录人的角色
 * @param routes 路由集合 读取每个路由的meta { access: * }
 * @return {*}
 */

export const allowJumpTo = (name, access, routes) => {
	const routePermissionJudge = (list) => {
		return list.some(item => {
			if (item.children && item.children.length) {
				return routePermissionJudge(item.children)
			} else if (item.name === name) {
				return hasAccess(access, item)
			}
		})
	}

	return routePermissionJudge(routes)
}

const hasAccess = (access, route) => {
	if (route.meta && route.meta.access) return route.meta.access.includes(access)
	else return true
}
