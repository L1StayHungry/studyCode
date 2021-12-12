import Vue from './vue.js'

const vm = new Vue({
  el: '#vueApp',
  data: {
      msg: '字符串Msg',
      count: 100,
  },
  methods: {
    handlerClick() {
      alert('按钮被点击了')
    }
  }
})

console.log(vm);