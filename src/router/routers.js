import index from '../views/index'

export default [
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			title: '首页',
			notCache: true
		}
	},
	{
		path: '/login',
		name: 'login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
		meta: {
			title: '登录',
			notCache: true
		}
	},
	{
		path: '/ent',
		component: index,
		redirect: '/ent/index',
		meta: {
			title: '企业空间',
			notCache: true
		},
		children: [
			{
				path: 'index',
				component: () => import(/* webpackChunkName: "ent" */ '../views/ent/ent.vue'),
				name: 'ent',
				meta: {
					access: [7]
				}
			}
		]
	},
	{
		path: '/self',
		component: index,
		redirect: '/self/index',
		meta: {
			title: '个人空间',
			notCache: true
		},
		children: [
			{
				path: 'index',
				component: () => import(/* webpackChunkName: "self" */ '../views/self/self.vue'),
				name: 'self'
			}
		]
	},
	{
		path: '/shared',
		component: index,
		redirect: '/shared/index',
		meta: {
			title: '我收到的共享',
			notCache: true
		},
		children: [
			{
				path: 'index',
				component: () => import(/* webpackChunkName: "shared" */ '../views/shared/shared.vue'),
				name: 'shared'
			}
		]
	},
	{
		path: '/myshare',
		component: index,
		redirect: '/myshare/index',
		meta: {
			title: '我的共享',
			notCache: true
		},
		children: [
			{
				path: 'index',
				component: () => import(/* webpackChunkName: "self" */ '../views/myshare/myshare.vue'),
				name: 'myshare'
			}
		]
	},
	{
		path: '/favorite',
		component: index,
		redirect: '/favorite/index',
		meta: {
			title: '我的收藏',
			notCache: true
		},
		children: [
			{
				path: 'index',
				component: () => import(/* webpackChunkName: "favorite" */ '../views/favorite/favorite.vue'),
				name: 'favorite'
			}
		]
	},
	{
		path: '/link',
		component: index,
		redirect: '/link/index',
		meta: {
			title: '链接管理',
			notCache: true
		},
		children: [
			{
				path: 'index',
				component: () => import(/* webpackChunkName: "link" */ '../views/link/link.vue'),
				name: 'link'
			}
		]
	},
	{
		path: '/auth',
		component: index,
		redirect: '/auth/index',
		meta: {
			title: '授权管理',
			notCache: true
		},
		children: [
			{
				path: 'index',
				component: () => import(/* webpackChunkName: "auth" */ '../views/auth/auth.vue'),
				name: 'auth'
			}
		]
	},
	{
		path: '/message',
		component: index,
		redirect: '/message/index',
		meta: {
			title: '消息动态',
			notCache: true
		},
		children: [
			{
				path: 'index',
				component: () => import(/* webpackChunkName: "message" */ '../views/message/message.vue'),
				name: 'message'
			}
		]
	},
	{
		path: '/approve',
		component: index,
		redirect: '/approve/index',
		meta: {
			title: '我的审批',
			notCache: true
		},
		children: [
			{
				path: 'index',
				component: () => import(/* webpackChunkName: "approve" */ '../views/approve/approve.vue'),
				name: 'approve'
			}
		]
	},
	{
		path: '/trash',
		component: index,
		redirect: '/trash/index',
		meta: {
			title: '回收站',
			notCache: true
		},
		children: [
			{
				path: 'index',
				component: () => import(/* webpackChunkName: "trash" */ '../views/trash/trash.vue'),
				name: 'trash'
			}
		]
	},
	{
		path: '/401',
		name: 'error_401',
		component: () => import('../components/error/401.vue')
	},
	{
		path: '/500',
		name: 'error_500',
		component: () => import('../components/error/500.vue')
	},
	{
		path: '*',
		name: 'error_404',
		component: () => import('../components/error/404.vue')
	}
]
