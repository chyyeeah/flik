const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',

  output: {
    path: path.resolve('client/dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
        exclude: /node_modules/,
      },
    ],
  },
  cache: false,
};
