const path = require('path')

module.exports = {
  entry: {
    'add-number': './src/lib.js',
    'add-number.min': './src/lib.js',
  },
  output: {
    filename: '[name].js',
    library: 'addNumber',
    libraryTarget: 'umd'
  },
  mode: 'node'
}