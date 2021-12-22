const path = require('path')

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    },
    publicPath: '/',
    port: 8080
  },
  // webpack
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       comps: path.join(__dirname, 'src/components')
  //     }
  //   }
  // }
  configureWebpack(config) {
    config.resolve.alias.comps = path.join(__dirname, 'src/components')
    if (process.env.NODE_ENV === 'development') {
      config.name = '开发'
    } else {
      config.name = '生产'
    }
  },
  // 还是 webpack
  chainWebpack(config) {
    // icon-svg

  }
}