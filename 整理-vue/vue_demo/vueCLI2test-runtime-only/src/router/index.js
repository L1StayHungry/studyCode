// 配置路由信息

// 导入路由
import VueRouter from 'vue-router'
import Vue from 'vue'

// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/home'
// import bbb from '@/components/bbb'
// import User from '@/components/user'

const Home = () => import('../components/home')
const HomeNews = () => import('@/components/homeNews')
const HomeMessages = () => import('@/components/homeMessages')
const Profile = () => import('@/components/profile')

const bbb = () => import('../components/bbb')
const User = () => import('../components/user')


// 通过vue.use(插件)，安装插件
Vue.use(VueRouter)


// 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home',
    meta:{
      title:'首页新闻'
    },
  },
  {
    path: '/home',
    meta:{
      title:'首页'
    },
    component: Home,
    children:[
      {
        path:'',
        component: HomeNews,
        meta:{
          title:'首页新闻'
        },
      },
      {
        path:'news',
        component: HomeNews,
        meta:{
          title:'首页新闻'
        },
      },
      {
        path:'messages',
        component: HomeMessages,
        meta:{
          title:'首页报道'
        },
      },
    ]
  },
  {
    path: '/bbb',
    component: bbb,
    meta:{
      title:'bbb'
    },
  },
  {
    path: '/user/:id',
    component: User,
    meta:{
      title:'用户'
    },
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'
    },
  }
]

const router = new VueRouter({
  // 配置映射关系
  routes,
  // 设置history模式
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置守卫
router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title
  next()
  // console.log('beforeEach');
})

// 后置钩子
// router.afterEach((to,from)=>{
//   console.log('afterEach');
  
// })

// 将router对象传到vue实例；导出
export default router
