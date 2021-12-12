// 收集依赖关系，存储观察者
/**
 * 发布订阅模式
 * 存储所有观察者：watcher
 * 每个Watcher都有一个update方法
 */

export default class Dep {
  constructor() {
    this.subs = []
  }

  // 添加观察者
  addSub(watcher){
    if(watcher && watcher.update){
      this.subs.push(watcher)
    }
  }

  // 群发通知到观察者列表
  notify(){
    this.subs.forEach(watcher => {
      watcher.update()
    })
  }
}