var webpack = require('webpack');
var path = require('path');
var config = require('./webpack/config');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    config.extractSass
  ],
  module: {
    rules: config.rules
  },
  devtool: 'inline-source-map'
}