/** 
 * 所以 webpack 在打包过程中，是希望我们多写这种异步的代码，
 * 才能提升网站的性能，
 * 这也是为什么 webpack 的 splitChunks 中的 chunks 默认是 async，异步的
*/
/** 
 * 代码懒加载
 * vue-router 路由懒加载 import(路由)
*/
// document.addEventListener('click', () => {
//   import(/* webpackChunkName: 'use-lodash' */ 'lodash').then(_ => {
//     console.log(_.join(['3','4']))
//   })
// })

document.addEventListener('click', () => {
  import('./click').then(({default: fn}) => {
    fn()
  })
})