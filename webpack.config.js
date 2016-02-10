var Webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['./src/app.js'],
  output: {
    path: __dirname + '/dist/',
    publicPath: 'dist/',
    filename: 'app.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
