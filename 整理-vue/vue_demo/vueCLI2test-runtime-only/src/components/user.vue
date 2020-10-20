<!--  -->
<template>
<div>
  <h2>我是用户组件</h2>
  <h3>我是用户界面</h3>
  <p>UserID:{{userId}}</p>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name:'User',
    components: {},
    data() {
    //这里存放数据
      return {

      };
    },
    //监听属性 类似于data概念
  computed: {
    userId() {
      return this.$route.params.id
    }
  },
  //监控data中的数据变化
    watch: {},
//方法集合
    methods: {

    },
  }
</script>
