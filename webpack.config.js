require('dotenv').config();
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { node } = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
};