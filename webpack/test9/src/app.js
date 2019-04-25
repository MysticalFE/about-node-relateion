/** 
 * JS tree shaking 移除js上下文中未引用的代码，项目中没有使用的代码在打包时过滤掉
 * 依赖于模块系统， import or export
 * 对于第三方库来说，要引用支持es6模块系统的库文件，比如 lodash-es
 * 
 * development 开发模式下依然会将全部模块打包
 * production 生产模式下会将未使用code打包过滤掉
*/s

// import { a } from './util/util'

// console.log(a())

import { join } from 'lodash-es'
console.log(join([1, 2, 3], '~'))