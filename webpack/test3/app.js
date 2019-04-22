/*
* app.js 以三种形式导入文件
**/

//commonJs
const minus = require('./vendor/minus')
console.log('minus(1,2)=', minus(1,2))

/** 
 * 不注释AMD引入方式的话，此方式引入文件会被单独打包，异步加载 1.bundle.js
*/
//AMD
// require(['./vendor/multi'], function(multi) {
//   console.log('multi(1,2)=', multi(1,2))
// })

//es6
import sum from './vendor/sum'
console.log('sum(1,2)=', sum(1,2))
