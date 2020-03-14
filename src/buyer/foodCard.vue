<template>
  <div id="app">
     <b-card>
         <img class="img-fluid center" :src="item.logo" width="100" alt="Card image cap" >
         <b-card-body>
              <b-card-title>{{ item.name}} </b-card-title>
              <b-card-text>{{item.cuisine}}</b-card-text>
              <router-link to="/placeOrder" class="btn btn-primary"> </router-link>
         </b-card-body>
     </b-card>
  </div>
</template>

<script>
import placeOrder from './placeOrder.vue'
export default {
    data() {
        return {
            component: {
                placeOrder
            }
        }
  },
  props: {
    // this component expects a prop of type object
    item: {
      type: '',
      required: true
    }
  }
}
</script>