import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login'
import Home from '../components/home/Index'
import Register from '../components/register/Create'
import BrandIndex from '../components/brand/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: {path: 'login'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/brand',
      name: 'brand.index',
      component: BrandIndex
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // redirect: {path: '/home/category'},
      // children: [
      //   {
      //     path: 'category',
      //     name: 'home.category',
      //     component: AddCategory
      //   }
      // ]
    },


  ],
  mode: 'history'
})
