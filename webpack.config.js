const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /.jsx?$/,
        exclude: /node_modules/
      }
    ],
  },
  plugins: [new ESLintPlugin()],
};
