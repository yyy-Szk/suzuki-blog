const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
      path: path.join(__dirname, 'public/js'),
      filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.tsx$/, loader: 'ts-loader' }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080,
  },
}

