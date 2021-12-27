const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].min.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [new ESLintPlugin({
    extensions: ['ts']
  })],
};
