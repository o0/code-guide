const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'app'),

  entry: {
    app: './js/app.js'
  },

  output: {
    path: path.join(__dirname, 'build', 'js'),
    filename: '[name].js',
    pathinfo: true
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules|build/,
      loader: 'babel-loader',
      query: {
        optional: 'runtime',
        stage: 1,
        cacheDirectory: true
      }
    }]
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ]
};
