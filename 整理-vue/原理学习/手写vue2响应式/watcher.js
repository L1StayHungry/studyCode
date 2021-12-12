// 观察者对象
import Dep from './dep.js'
/**
 * 功能： 观察者对象类
 * 1、watcher初始化获取oldValue时，
 * 2、通过vm[key]获取oldValue时，挂载到dep后target要设置未null
 * 3、update方法由dep.notify调用
 */
export default class Watcher {
  
  /**
   * 
   * @param {*} vm vm实例
   * @param {*} key key属性
   * @param {*} cb callback回调函数
   */
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb

    // 每次watcher初始化时，添加target属性
    Dep.target = this
    // 触发数据get方法时，通过Dep.target把当前watcher添加到该数据的dep种
    this.oldValue = this.vm[key]
    Dep.target = null //可能会出现脏数据，清空操作
  }

  // 当数据变化时更新视图
  update() {
    let newValue = this.vm[this.key]
    if(this.oldValue === this.newValue){
      return
    }
    this.cb(newValue)
  }
}