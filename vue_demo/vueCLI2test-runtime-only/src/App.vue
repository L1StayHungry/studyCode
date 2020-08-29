<template>
  <div id="app">
      <!-- <img src="./assets/logo.png"> -->
      <!-- v-router的全局组件 -->
      
      <router-link to="/home" tag="button" replace>首页</router-link>
      <router-link to="/bbb" tag="button" replace>bbb</router-link>
      <router-link v-bind:to="'/user/'+userid" tag="button" replace>用户</router-link>
      <router-link :to="{
        path:'/profile',
        query:{
          name:'lihuajun',
          age:'22'
        }
      }" tag="button" replace>用户档案</router-link>

      <!-- <button @click="homeClick">首页</button>
      <button @click="bbbClick">bbb</button> -->
      <keep-alive>
        <router-view/>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid:'lihuajun'
    }
  },
  methods: {
    // homeClick(){
    //   this.$router.push('home')
    //   console.log('homeCLick')
    // },
    // bbbClick(){
    //   this.$router.replace('bbb')
    //   console.log('bbbCLick')
    // }
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
  .active{
    color:red ;
  }
</style>
