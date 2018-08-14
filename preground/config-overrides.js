
const path = require('path')
const { injectBabelPlugin } = require('react-app-rewired');


module.exports = {
    webpack(config, env) {
        const  rewireLess  = require('react-app-rewire-less')
        config = rewireLess.withLoaderOptions({modifyVars: {'@primary-color': 'darkgreen'}})(config, env)
        // config = rewireLess(config, env)
        return config
    },
    devServer: function(configFunction){
        return function(proxy, allowedHost) {
            // return
            const config = configFunction(proxy, allowedHost)
            console.log('before customize... config is ')
            console.log(config)
            // config.public = '127.0.0.1'
            // config.port = '6666'
            console.log('✔after customize... config is ')
            console.log(config)
            return config
        }
    }
}
//
// module.exports = function override(config, env) {
//     // do stuff with the native webpack config 原有webpack配置
//
//     // injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
//     config = rewireLess.withLoaderOptions({
//         javascriptEnabled: true,
//         modifyVars: { "@primary-color": "#1DA57A" },
//     })(config, env);
//
//     // alias
//     config.resolve.alias = {
//         '@SRC': path.join(__dirname, 'src')
//     }
//
//     config.devServer = function(configFunction){
//         console.log('configFunction')
//         console.log(configFunction)
//         return function(proxy, allowedHost) {}
//     }
//     // console.log(config)
//
//     return config;
// };
