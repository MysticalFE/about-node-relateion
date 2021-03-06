const webpack = require("webpack")
const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const Htmlwebpackplugin = require("html-webpack-plugin") //生成html模版
const MiniCssExtractPlugin = require("mini-css-extract-plugin") //单独把css文件分离出来
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin") //压缩css文件
// console.log(process.env)

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/app.js'
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
      template: 'index.html',
      chunks: ['app'] //entry中的app 入口文件会被打包，  用处大大地
    }),
    //css文件单独分离
    new MiniCssExtractPlugin({
      // filename: devMode ? '[name].css' : '[name].[hash].css',
      // chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    //压缩css文件
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new webpack.HashedModuleIdsPlugin(), //模块热更新
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
          //自动添加css浏览器前缀
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }  
          }
        ] //  loader加载顺序按从右向左加载的执行的
        //module.rules.use 数组中，loader 的位置。根据 webpack 规则：放在最后的 loader 首先被执行，从上往下写的话是下面先执行，从左往右写的话是右边先执行。
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // name: '[hash].[ext]', //name默认值为32位hash值
              name: '[name].[ext]',
              outputPath: 'images/', //打包输出的文件夹
              limit: 20000 //把小于20kb的文件转成Base64 的格式
            }
          },
          //图片压缩  image-webpack-loader
          {
            loader: 'image-webpack-loader',
            options: {
              //压缩jpg/jpeg
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              //压缩png
              pngquant: {
                quality: '65-90',
                apeed: 4
              },
              //压缩gif
              gifsicle: {
                interlaced: false,
              },
              //压缩webp
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    port: 9000,
    hot: true,
    overlay: true,
    // historyApiFallback: { //history 模式
    //   rewrites: [
    //     { from: /.*/, to: '/index.html' }
    //   ]
    // }
  }
}