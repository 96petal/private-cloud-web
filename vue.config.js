const path = require('path')

function resolve (dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	chainWebpack: config => {
		config.resolve.alias
			.set('@s', resolve('src'))
			.set('assets', resolve('src/assets'))
	},
	devServer: {
		proxy: {
			'/v2': {
				target: 'http://172.16.52.183/',
				changeOrigin: true,
				cookieDomainRewrite: ''
			}
		}
	}
}
