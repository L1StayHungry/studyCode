// Vue主文件

import Observer from './observer.js'
import Compiler from './compiler.js'

export default class Vue {
  constructor(options = {}){
    /**
     * 1、vue构造函数，接收配置参数等
     * 2、options里的data挂载至根实例
     * 3、实例化observer对象，监听数据变化，利用dep进行依赖收集和派发更新
     * 4、实例化compoler对象，解析指令和模板表达式
     */

    // 接收配置参数
    this.$options = options
    this.$methods = options.methods || {}
    this.$data = options.data || {}

    // 获取vue实例要挂载到的dom节点
    this.initRootElement(options)
    // options里的data挂载至根实例 
    this._proxyData(this.$data)
    // 实例化Observer对象，监听数据变化
    new Observer(this.$data)
    // 实例化compiler对象，解析指令和模板表达式
    new Compiler(this)
  }

  /**
     * 获取根元素(实际挂载的dom节点)，存储到vue实例
     * 校验传入的el是否合规
     */
  initRootElement(options){
    if(typeof options.el === 'string'){
      // 获取dom节点，用于vue实例挂载
      this.$el = document.querySelector(options.el)
    }else if(options.el instanceof HTMLElement){
      this.$el = options.el
    }

    if(!this.$el){
      throw new Error('你在搞什么啊，传参要有el,不然我哪知道挂载到哪里')
    }
  }

  /**
   * 利用Object.defineProperty将options传入的data注入到vue实例
   * 给vm设置getter和setter
   */
  _proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key]
        },
        set(newValue){
          if(data[key] === newValue){
            return
          }
          data[key] = newValue
        }
      })
    })
  }
}