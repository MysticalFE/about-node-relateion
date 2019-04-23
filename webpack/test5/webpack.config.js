const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    publicPath: __dirname + '/dist/',
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  //代码拆分  splitChunksPlugins 为webpack主模块的一个细分模块，无需require引入，
  optimization: {
    // splitChunks: {
      /** 
       * 如果注释的话，会打包成一个文件，splitChunks默认只打包异步的代码，同步代码不会分割打包
      */
      // chunks: 'all',
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/, //只有node_modules引入的第三方库会被分割
      //     name: 'vendors' //将分割出来的代码文件重命名   原名称是vendor.main.js
      //   }
      // }

      // chunks: 'all',
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/, //只有node_modules引入的第三方库会被分割
      //     name: 'vendors', //将分割出来的代码文件重命名   原名称是vendor.main.js
      //     priority: -10  //打包优先级
      //   }
      // }

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