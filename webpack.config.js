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
        exclude: /(node_modules|bower_components)/,
        //include: path.resolve(__dirname, './frontend'),
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
