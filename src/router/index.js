import Vue from 'vue'
import Router from 'vue-router'
import Inventory from '../components/sample/views/Inventory'
import ItemDetails from '../components/sample/views/ItemDetails'
import Login from '../components/login/Login'
import Home from '../components/admin/Home'
import Category from '../components/admin/category/Category.vue'
import EditCategory from '../components/admin/category/EditCategory.vue'


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
    {
      path: '/home/category',
      name: 'category',
      component: Category
    },{
      path: '/home/supplier',
      name: 'supplier',
      component: Category
    }, {
      path: '/home/product',
      name: 'product',
      component: Category
    },{
      path: '/home/shop',
      name: 'shop',
      component: Category
    },{
      path: '/home/category-edit/:id',
      name: 'EditCategory',
      component: EditCategory
    },

    {
      path: '/api',
      name: 'Inventory',
      component: Inventory
    },
    {
      path: 'api/item-details/:id',
      name: 'ItemDetails',
      component: ItemDetails
    },

  ],
  mode: 'history'
})
