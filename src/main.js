import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: "YOUR_KEY",
    libraries: "places" // necessary for places input
  }
});

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
import BuyerOrders from './buyer/BuyerOrders'
import ChefOrders from './Chef/ChefOrders.vue'
import MapService from './Chef/MapService.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {loadStripe} from '@stripe/stripe-js';
import Pusher from 'pusher-js';

Pusher.logToConsole = true;

window.pusher_instance = new Pusher("YOUR_KEY", {
  cluster: "mt1",
  forceTLS: false
});


const routes = [
  { path: '/', component: Home, name: 'home' },
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
    },
    {
      name: 'buyer-orders',
      path: 'orders',
      component: BuyerOrders
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
    },
    {
      name: 'chef-orders',
      path: 'orders',
      component: ChefOrders
    },
    {
      name: 'chef-map',
      path: 'locations',
      component: MapService
    }
  ]
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
