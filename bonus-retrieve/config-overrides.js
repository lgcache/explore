module.exports = {
	webpack(config, env) {
		const  rewireLess  = require('react-app-rewire-less')
		const { injectBabelPlugin } = require('react-app-rewired')
		// injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config)
		config = rewireLess.withLoaderOptions({javascriptEnabled: true,modifyVars: {'@primary-color': '#1DA57A'}})(config, env)
		config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config);
		// config = rewireLess(config, env)
		return config
	}
}