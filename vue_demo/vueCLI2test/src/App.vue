<template>
  <div id="app">
    <h2>{{$store.state.info}}</h2>
    <button @click="aUpdateInfo">修改信息</button>

    <h1>------APP内容--------</h1>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>

    <h3>{{$store.getters.more20student}}</h3>
    <h3>{{$store.getters.moreAgestudent(18)}}</h3>

    <button @click="addition">+</button>
    <button @click="subtation">-</button>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->

    <h1>-------Vuex内容------</h1>
    <hello-vuex/>
  </div>
</template>

<script>
const HelloVuex = () => import('./components/HelloVuex')

export default {
  name: 'App',
  data(){
    return {
      message:'我是APP组件',
      // counter:0
    }
  },
  methods: {
    addition(){
      this.$store.commit('increment')
    },
    subtation(){
      this.$store.commit('decrement')
    },
    aUpdateInfo(){
      this.$store.dispatch('aUpdateInfo')
    }

  },
  components:{
    HelloVuex
  },
  computed: {
    
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
