(function () {
  let uid = 0

  // watcher构造函数
  // 由以上代码可见，在watcher构造函数中做了如下几件事：
  // 将组件的渲染函数的观察者存入_watcher，将所有的观察者存入_watchers中
  // 保存before函数，在数据变化之后、触发更新之前调用
  // 定义一系列实例属性
  // 除计算属性的观察者以外的所有观察者调用this.get()方法
  window.Watcher = class Watcher {

    constructor(
      vm,
      expOrFn,
      cb,
    ) {
      this.vm = vm

      this.cb = cb
      this.id = ++uid // uid for batching
      this.deps = [] //旧的监听列表
      this.newDeps = [] //新的监听列表
      this.depIds = new Set()
      this.newDepIds = new Set()
      // parse expression for getter
      if (typeof expOrFn === 'function') {
        this.getter = expOrFn
      }
      this.value = this.get()
    }

    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    get() {
      pushTarget(this)
      let value
      const vm = this.vm
      try {
        value = this.getter.call(vm, vm)
      } finally {
        popTarget()
        this.cleanupDeps()
      }
      return value
    }

    /**
     * Add a dependency to this directive.
     */
    addDep(dep) {
      const id = dep.id
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id)
        this.newDeps.push(dep)
        if (!this.depIds.has(id)) {
          dep.addSub(this)
        }
      }
    }

    /**
     * Clean up for dependency collection.
     */
    cleanupDeps() {
      let i = this.deps.length
      while (i--) {
        const dep = this.deps[i]
        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this)
        }
      }
      let tmp = this.depIds
      this.depIds = this.newDepIds
      this.newDepIds = tmp
      this.newDepIds.clear()
      tmp = this.deps
      this.deps = this.newDeps
      this.newDeps = tmp
      this.newDeps.length = 0
    }

    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    update() {
      this.get()
    }
  }
})()