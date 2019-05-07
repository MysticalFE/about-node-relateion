const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const path = require('path')

const devConfig = {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  modules: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 //该参数决定在一个css文件@import另外一个css文件时，允许加载的loader资源数量，1 => sass-loader   2 => postcss-loader  默认参数值为  0即不加载css-loader之前的loader
            }
          },
          'postcss-loader', //为 css 加上浏览器前缀
          'sass-loader', //将 sass 转为  css
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServe: {
    contentBase: path.join(__dirname, '../dist/'),
    port: 9001,
    hot: true,
    overlay: true,
    pproxy: {
      '/comments': {
        target: 'https://m.weibo.cn',
        changeOrigin: true,
        logLevel: 'debug',
        headers: {
          Cookie: ''
        }
      }
    },
    historyApiFallback: true
  },
  plugins: [
    //HotModuleReplacementPlugin 与 NamedModulesPlugin 一般都是成对出现的
    new webpack.HotModuleReplacementPlugin(), //热更新模块
    new webpack.NamedModulesPlugin()  //在热更新的时候直接返回更新文件名，而不是文件id
  ]
}

module.exports = merge(baseConfig, devConfig)