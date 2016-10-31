'use strict';
const webpack = require('webpack');
module.exports = {
  entry: './handler.ts',
  output: {
    libraryTarget: 'commonjs',
    path: '.webpack',
    filename: 'handler.js'
  },
  externals: {
    'aws-sdk': true
  },
  
  target: 'node',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    loaders: [
      { test: /\.(jsx?|tsx?)$/, loaders: ['ts-loader'], exclude: [/node_modules/] }
    ]
  },
  devtool: "#source-map"
};