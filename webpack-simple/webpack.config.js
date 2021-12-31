const path = require('path')

// 默认配置
module.exports = {
  entry: {
    main: './src/index.js',
  },
  // 入口 单页面应用（默认） 多页面应用
  output: {
    path: path.resolve(__dirname, './dist'), // 输出的文件目录，必须是绝对路径
    filename: '[name].js' // 输出的文件名称
  },
  mode: 'development'
}