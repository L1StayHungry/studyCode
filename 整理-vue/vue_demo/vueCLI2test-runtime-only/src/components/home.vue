<!-- Home组件 -->
<template>
  <div>
    <h2>我是Home组件</h2>
    <h3>我是内容</h3>

    <router-link to="/home/news" tag="button" replace>新闻</router-link>
    <router-link to="/home/messages" tag="button" replace>报道</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "Home",
  data() {
    return {
      path:'/home/news'
    }
  },
  // created() {
  //   console.log("create");
  //   document.title = "首页";
  // }
  // 挂载到虚拟DOM
  // mounted() {
  //   console.log('mounted');
  // },
  // updated() {
  //   console.log('update');
  // },

  // 只有在keey-alive时才是有效的
  activated() {
    this.$router.push(this.path);
  },
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    
    this.path = this.$route.path;
    next()
  },
  destroyed() {
    console.log('home destroy');
  },
};
</script>
