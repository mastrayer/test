const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './src/ui.tsx', // The entry point for your UI code
    code: './src/code.ts', // The entry point for your plugin code
  },

  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
    ],
  },

  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui.html',
      filename: 'ui.html',
      inlineSource: '.(js)$',
      chunks: ['ui'],
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
})