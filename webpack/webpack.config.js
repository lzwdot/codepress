const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

// 默认配置
module.exports = {
  // 入口 单页面应用（默认） 多页面应用
  // entry: './src/index.js',

  // 多入口 对应 多出口
  // entry 支持 字符串，对象，数组
  // 字符串 和 数组 是对象的单页面应用
  // 对象 可以是单页面应用，也可以多页面应用
  entry: {
    index: './src/index.js',
    a: './src/a.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'), // 输出的文件目录，必须是绝对路径
    filename: '[name].js' // 输出的文件名称, 多出口 name 对应 entry 里的: index/a
  },
  mode: 'development', // none development production

  // loader
  module: {
    rules: [
      //...
      {
        test: /\.css$/,
        // 多个 loader 情况下，执行顺序是自后往前的
        use: ['style-loader', 'css-loader']
      },
      // {
      //       //   test: /\.jpg$/,
      //       //   use: ''
      //       // }
      //...
    ]
  },

  // plugin
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
  ]
}