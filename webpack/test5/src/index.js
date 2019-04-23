/** 
 * 同步引入
*/
// import _ from "lodash"

// console.log(_.join(['a', 'b', 'c'], '~'))


/** 
 * 异步引入模块 import(模块or文件) 返回promise
*/

// function getComponent() {
//   return import('lodash').then(({default: _}) => {
//     const el = document.createElement('div')
//     el.innerHTML = _.join(['a', 'b', 'c'], '~')
//     return el
//   })
// }

// getComponent().then(el => {
//   document.body.appendChild(el)
// })

// import './a'
// import './b'

// function getComponent() {
//   return import('lodash').then(({default: _}) => {
//     const el = document.createElement('div')
//     el.innerHTML = _.join(['wo', 'shi', 'shui'], '~')
//     return el
//   })
// }

// getComponent().then(el => {
//   document.body.appendChild(el)
// })


/** 
 * import() 动态加载模块  被请求的模块和它引用的所有子模块，会分离到一个单独的chunk中。
 * 内联注释使功能有效。通过向导入添加注释，我们可以执行诸如命名块或选择不同模式之类的操作。
 * 添加注释可以重命名chunk文件名
 * https://webpack.docschina.org/api/module-methods/#import-
*/
import(/* webpackChunkName: 'a'*/  /* webpackMode: "lazy" */'./a').then(function(a) {
  console.log(a)
})

import(/* webpackChunkName: 'b'*/  /* webpackMode: "lazy" */'./b').then(function(b) {
  console.log(b)
})

import(/* webpackChunkName: 'use-lodash'*/  /* webpackMode: "lazy" */'lodash').then(function(_) {
  console.log(_)
  console.log(_.join(['1', '2']))
})