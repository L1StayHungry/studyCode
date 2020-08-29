import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
  state: {
    // 用于保存状态
    counter: 100,
    students:[
      {id:1,name:'liyi',age:18},
      {id:2,name:'huanger',age:21},
      {id:3,name:'zhangsan',age:23},
      {id:4,name:'zhusi',age:17},
    ],
    info:{
      name:'James'
    }
  },
  mutations: {
    // 可以跟踪修改转态
    // 方法
    increment(){
      this.state.counter++
    },
    decrement(){
      this.state.counter--
    },
    updateInfo(){
      this.state.info.name = 'lihuajun'
    }

  },
  actions: {
    //context上下文，相当于$store 
    aUpdateInfo(context){
      setTimeout(() => {
        context.commit('updateInfo')
      }, 1000);
    }
  },
  getters: {
    powerCounter(state){
      return state.counter*state.counter
    },
    more20student(state){
      return state.students.filter(s =>{
        return s.age >=20
      })
    },
    // 自定义年龄
    moreAgestudent(state){
      return function(age){
        return state.students.filter(s =>{
          return s.age >=age
        })
      }
    }
  },
  modules: {

  }
})

// 导出对象
export default store