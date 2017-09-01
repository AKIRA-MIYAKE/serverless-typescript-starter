'use strict';

const path = require('path');

module.exports = dirname => ({
  entry: path.resolve(dirname, 'handler.ts'),
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(dirname, '.webpack'),
    filename: 'handler.js'
  },
  externals: ['aws-sdk'],

  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
  },
  module: {
    loaders: [
      {
        test: /\.(jsx?|tsx?)$/,
        loaders: ['awesome-typescript-loader'],
        include: ['/serverless-app/src']
      }
    ]
  },
  devtool: "#source-map"
});
