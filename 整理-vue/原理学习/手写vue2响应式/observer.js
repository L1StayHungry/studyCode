/**
 * Observer类
 * 功能：
 * 实现数据劫持，利用dep进行依赖收集和派发更新
 * 1、调用时机：vue实例化时调用，监听data数据变化, new Observer(this.$data)
 * 2、实现机制：Object.defineProperty(this.$data, key, {})
 * 3、使用dep完成依赖收集dep.addDub和派发更新dep.notify机制编译模板
 *  3.a、为每个组件建立watch对象
 *  3.b、建立watch时，获取oldValue,设置Dep.target,在获取时触发getter
 *  3.c、设置Dep.target = null, 清除脏数据
 * 4、数据更新：触发setter,派发更新
 */
import Dep from './dep.js'

export default class Observer {
  constructor(data){
    this.traverse(data)
  }

  // 递归遍历data里的所有属性
  traverse(data){
    if(!data || typeof data !== 'object'){
      return
    }
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }

  // 给传入的数据设置setter/getter
  // 利用dep实现依赖收集和派发更新
  defineReactive(obj, key, val) {
    // 如果子对象也是对象，递归处理
    this.traverse(val)

    const that = this
    const dep = new Dep() // dep存储观察者

    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get(){
        // 收集依赖，只有当watcher初始化时才会添加依赖
        // Dep.target是一个watcher实例初始化时添加的，初始化后会重新置为null
        Dep.target && dep.addSub(Dep.target)
        return val
      },
      set(newValue){
        if(newValue === val){
          return
        }
        val = newValue
        // 如果newValue设置了对象，也要遍历添加setter和getter
        that.traverse(newValue)
        dep.notify()
      }
    })
  }
}