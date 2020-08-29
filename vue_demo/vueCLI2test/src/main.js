import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store仓库'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

  // 1.普通标签
  // render(createElement) {
  //   return createElement('h2',{class:'box'},['Hi!'])
  // },
  // 2.直接传组件
})
