import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const Home = () => import('../views/home/home')
const Cart = () => import('../views/cart/cart')
const Category = () => import('../views/category/category')
const Profile = () => import('../views/profile/profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },{
      path:'/category',
      component:Category
    },{
      path:'/profile',
      component:Profile
    },
  ],
  mode:'history'
})
