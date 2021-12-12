// 编译模板，解析指令（v-model等）
import Watcher from "./watcher.js"

/**
 * 功能：模板编译
 * 1、模板编译时为每个组件添加一个watcher实例，设置回调函数为更新数据
 * 2、watcher初始化时，传入实例、key、回调
 */
export default class Compiler {
  constructor(vm){
    this.el = vm.$el
    this.vm = vm
    this.methods = vm.$methods
    // 编译模板
    this.compiler(vm.$el)
  }

  // 编译模板时为每个响应式对象建立watcher对象，并将watcher推进dep用于依赖收集
  compiler(el){
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      if(this.isTextNode(node)){
        // 文本节点
        this.compilerTxt(node)
      }else if(this.isElementNode(node)){
        // 元素节点
        this.compilerElement(node)
      }

      // 有子节点，递归调用
      if(node.childNodes && node.childNodes.length > 0){
        this.compiler(node)
      }
    })
  }

  // 判断文本节点
  isTextNode(node){
    return node.nodeType === 3
  }
  // 判断元素节点
  isElementNode(node){
    return node.nodeType === 1
  }

  /**判断attr属性是否时指令 */
  isDirective(attrName){
    return attrName.startsWith('v-')
  }

  /**编译文本节点， {{ text }} */
  compilerTxt(node){
    // {{ ... }}
    const reg = /\{\{(.+?)\}\}/;
    const value = node.textContent;
    if(reg.test(value)){
      // $1取匹配到的内容: text
      const key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])
      new Watcher(this.vm, key, (newValue) => {
        // 更新视图
        node.textContent = newValue 
      })
    }
  }

  /**编译元素节点 */
  compilerElement(node){
    if(node.attributes.length){
      Array.from(node.attributes).forEach(attr => {
        // 遍历节点属性
        const attrName = attr.name
        if(this.isDirective(attrName)){
          // 检测v-model及v-on, 不支持语法糖
          // v-model="msg"、v-on:click="handle"
          let directiveName = attrName.indexOf(':') > -1
            ? attrName.substr(5) : attrName.substr(2)
          let key = attr.value
          // 更新元素节点
          this.update(node, key, directiveName)
        }
      })
    }
  }

  /**
   * 更新元素节点
   */
  update(node, key, directiveName){
    //v-model 、 v-on:click
    const updateFn = this[directiveName + 'Updater']
    updateFn && updateFn.call(this, node, this.vm[key], key, directiveName)
  }

  // 解析v-model
  modelUpdater(node, value, key){
    node.value = value
    new Watcher(this.vm, key, newValue => {
      node.value = newValue
    })
    node.addEventListener('input', () => {
      this.vm[key] = node.value
    })
  }

  // 解析v-on:click
  clickUpdater(node, value, key, directiveName){
    node.addEventListener(directiveName, this.methods[key])
  }
}