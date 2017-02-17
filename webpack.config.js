// dependencies
const webpack = require('webpack')
const path = require('path')

/// webpack configuration
const config = {
  context: path.resolve(__dirname, './'),
  entry: {
    main: './frontend/js/'
  },
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'bundle.js',
    publicPath: 'public/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './frontend'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }],
              ['react']
            ]
          }
        }]
      }
    ]
  }
};

module.exports = config
