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

// document.addEventListener('click', () => {
//   import('./click').then(({default: fn}) => {
//     fn()
//   })
// })


/** 
 * 代码预加载 
 * https://webpack.docschina.org/guides/code-splitting/#%E9%A2%84%E5%8F%96-%E9%A2%84%E5%8A%A0%E8%BD%BD%E6%A8%A1%E5%9D%97-prefetch-preload-module-
 * // webpackPrefetch: true prefetch 会在主要的js文件加载完毕后，网络资源空闲的时候会预先加载好
 * // webpackPreload: true 会和核心代码并行加载，
*/
// document.addEventListener('click', () => {
//   import(/*webpackPrefetch: true*/ './click').then(({default: fn}) => {
//     fn()
//   })
// })

// document.addEventListener('click', () => {
//   const stratTimer = new Date().getTime()
//   Promise.all([import('lodash'), import('./click')]).then(([{default: _}, {default: fn}]) => {
//     console.log(_.join(['1', '2'], '~'))
//     console.log(fn())
//     const diff = new Date().getTime() - stratTimer;
//     console.log(diff);
//   })
// })

document.addEventListener('click', () => {
  const stratTimer = new Date().getTime()
  Promise.all([import(/*webpackPrefetch: true*/'lodash'), import(/*webpackPrefetch: true*/'./click')]).then(([{default: _}, {default: fn}]) => {
    console.log(_.join(['1', '2'], '~'))
    console.log(fn())
    const diff = new Date().getTime() - stratTimer;
    console.log(diff);
  })
})
