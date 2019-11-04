import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../userAuthentication'
import CreateUser from '@/components/CreateUser'
import LogIn from '@/components/LogIn'
import product from '@/components/AddProduct'
import products from '@/components/products'
import account from '@/components/myAccount'
import career from '@/components/Career'
import contactus from '@/components/ContactUs'
import aboutus from '@/components/AboutUs'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'login',
    component: LogIn
  },
  {
    path: '/register',
    name: 'register',
    component: CreateUser
  },
  {
    path: '/addproduct',
    name: 'addproduct',
    component: product,
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/products',
    name: 'products',
    component: products,
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/account',
    name: 'account',
    component: account,
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/career',
    name: 'career',
    component: career

  }, {
    path: '/aboutus',
    name: 'aboutus',
    component: aboutus

  }, {
    path: '/contactus',
    name: 'contactus',
    component: contactus

  }, { path: '*', redirect: '/' }
  ]
})
router.beforeEach((to, from, next) => {
  if ((to.name === 'login' || to.name === 'register') && store.getters.isLoggedIn) {
    // Redirect user to homepage
    return next({ path: '/products' })
  }
  // Let the user pass
  return next()
})
export default router
