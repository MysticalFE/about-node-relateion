import sum from './vendor/sum'
console.log('sum(1, 2) = ', sum(1, 2))

var minus = require('./vendor/minus')
console.log('minus(1, 2) = ', minus(1, 2))

require(['./vendor/mutil'], function(multi) {

  console.log('multi(1, 2) = ', multi(1, 2))
})