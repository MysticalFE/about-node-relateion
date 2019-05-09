const path = require('path')

/** 
 * webpack eslint-loader配置
 * https://webpack.docschina.org/loaders/eslint-loader
*/
module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    publicPath: __dirname + '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bunkle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /nodes_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          },
        ]
      }
    ]
  }
}