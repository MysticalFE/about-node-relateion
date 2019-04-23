//页面刚加载的时候，异步的代码根本就不会执行，但是我们却把它下载下来，实际上就会浪费页面执行性能，webpack 就希望像这样交互的功能，应该把它放到一个异步加载的模块去写
export default function handleClick() {
  const el = document.createElement('div')
  el.innerHTML = '我被点击了'
  document.body.appendChild(el)
}