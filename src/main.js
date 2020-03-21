import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)


import Home from './view/Home.vue'
import About from './view/About.vue'
// import Signup from './components/partials/Signup.vue'
// import Signin from './components/partials/Signin.vue'
import Buyer from './buyer/Buyer.vue'
import Search from './buyer/Search.vue'
import Chef from './Chef/Chef.vue'
import placeOrder from './buyer/placeOrder.vue'
import ChefProfile from './Chef/ChefProfile.vue'
import BuyerProfile from './buyer/BuyerProfile.vue'
import BuyerDishes from './buyer/BuyerDishes.vue'
import Dishes from './Chef/Dishes.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {loadStripe} from '@stripe/stripe-js';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  // {path: '/signup', component: Signup},
  // {path: '/signin', component: Signin},
  {
    path: '/buyer', component: Buyer,
    children: [{
      name: 'buyer-profile',
      path: 'profile',
      component: BuyerProfile
    },
    {
      name: 'buyer-dishes',
      path: 'dishes',
      component: BuyerDishes
    }
    ]
  },
  {
    path: '/chef', component: Chef,
    children: [{
      name: 'chef-profile',
      path: 'profile',
      component: ChefProfile
    },
    {
      name: 'chef-dishes',
      path: 'dishes',
      component: Dishes
    }]
  },
  { path: '/placeOrder', component: placeOrder },
  { path: '/search/:cuisine', component: Search }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next({
      path: '/login',
      query: { returnUrl: to.path }
    });
  }

  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
