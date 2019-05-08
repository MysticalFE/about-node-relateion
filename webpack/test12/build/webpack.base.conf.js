const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const path = require("path")
module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname + '..' + 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          //图片文件处理  核心loader 
          {
            loader: 'url-loader',
            options: {
              name: '[hash:16]',
              limit: 1000, //size小于1kb
              outputPath: 'images/'   //图片输出文件夹
            }
          },
          //图片压缩 loader
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack test',
      filename: 'index.html',
      template: path.resolve('index.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new CleanWebpackPlugin()
  ],
  performance: false
}