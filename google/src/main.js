// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps";


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCJUZlNkvC6ZzkF2MGCYCWZtghCY0GeLsM",
    libraries: "places" // necessary for places input
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
