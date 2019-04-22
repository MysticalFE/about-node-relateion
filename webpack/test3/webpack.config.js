const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //该插件帮助我们移除build打包文件，再打包文件，可以保证没有多余的打包文件

console.log('__dirname',  __dirname)
console.log('path.resolve', path.resolve(__dirname + '/dist'))

/** 
 * publicPath 为项目中的所有资源指定一个基础路径，也就是公共路径
 * 资源文件访问路径 = output.publicPath + 资源loader或插件等配置路径filename
*/
module.exports = {
  entry: {
    app: './app.js' //打包入口文件
  },
  output: {
    publicPath: __dirname + '/dist/', 
    path: path.resolve(__dirname + '/dist'), //打包文件输出目录
    filename: 'bundle.js' //打包后的js文件
  },
  plugins: [
    new CleanWebpackPlugin() //引入插件
  ]
}