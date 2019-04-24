const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const Htmlwebpackplugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    //publicPath: __dirname + '/dist/', //这样打包出来的index.html中引用的js文件地址是绝对路径，不建议这么使用
    publicPath: './', //这样打包出来的index.html中引用的js文件地址是相对路径 
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Htmlwebpackplugin({
      title: "生成html模板",
      //压缩html文件
      minity: {
        removeComments: true, //移除html注释
        minifyCSS: true, //压缩html内联css
        minityJs: true, //压缩html内联js
        collapseWhitespace: true, //无用空格
        // removeRedundantAttributes: true,//移除多余的属性
        // removeEmptyElements: true, //移除内容位空的元素
        // removeScriptTypeAttributes: true, //移除script标签的type属性
        // removeStyleLinkTypeAttributes: true //移除style和link标签的type属性
      },
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  optimization: {
    //代码分割的所有配置
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        lodash: {
          name: 'lodash',
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          priority: 6 //优先级要大于vendors,不然会被打包成vendors
        },
        commons: {
          name: 'commons',
          minSize: 1, 
          minChunks: 2, 
          priority: 5, 
          reuseExistingChunk: true 
        },
        //将所有的node模块打包成一个文件，如果想单独将其中一个打包出来，需要单独进行配置
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
      }
    }
  },
  module: {
    
  }
}