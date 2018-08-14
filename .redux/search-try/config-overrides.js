const rewireLess =require('react-app-rewire-less')
// const rewireLess =require('react-app-rewire-less')

module.exports = function override(config, env) {
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
  '@primary-color': '#1DA57A'
}
})(config, env)
return config
}
