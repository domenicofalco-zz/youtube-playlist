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
    filename: 'bundle.js'
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
            ],
            plugins: ['transform-decorators-legacy']
          }
        }]
      }
    ]
  },

};

module.exports = config
