const path = require('path')

// 默认配置
module.exports = {
  entry: './src/index.js',
  // 入口 单页面应用（默认） 多页面应用
  output: {
    path: path.resolve(__dirname, './dist'), // 输出的文件目录，必须是绝对路径
    filename: 'main.js' // 输出的文件名称
  },
}