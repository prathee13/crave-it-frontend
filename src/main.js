import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

import Home from './view/Home.vue'
import About from './view/About.vue'
import Signup from './components/partials/Signup.vue'
import Signin from './components/partials/Signin.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const routes = [
  { path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/signup', component: Signup},
  {path: '/signin', component: Signin}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
