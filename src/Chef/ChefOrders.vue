<template>
  <div>
    <b-tabs class="mt-5" align="center" content-class="mt-3">
    <b-tab @click="changeStatus('placed')" title="Placed" active></b-tab>
    <b-tab @click="changeStatus('ready')" title="Ready"></b-tab>
    <b-tab @click="changeStatus('served')" title="Served"></b-tab>
    <b-tab @click="changeStatus('refunded')" title="Canceled"></b-tab>
    </b-tabs>
    <div v-if="items.length == 0" style="Width: 100%" class="text-center">
        <h3>No orders with this status!</h3>
    </div>
    <b-table v-else
    :sort-by.sync="sortBy"
    :sort-desc.sync="dortDesc" 
    :items="items" 
    :fields="fields" 
    striped responsive="sm">
      <template v-slot:cell(details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

      </template>

      <template v-slot:row-details="row">
        <b-card>
          <b-row>
            <b-col style="display:flex; align-items: center">
                <b-container fluid>
                     <b-row class="mb-2">
            <b-col  class="text-sm-right"><b>Name:</b></b-col>
            <b-col >{{ row.item.dish_name }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col  class="text-sm-right"><b>Quantity:</b></b-col>
            <b-col>{{ row.item.quantity }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col  class="text-sm-right"><b>Amount Paid:</b></b-col>
            <b-col>{{ row.item.amount_paid }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col  class="text-sm-right"><b>Category</b></b-col>
            <b-col>{{ row.item.category }}</b-col>
          </b-row>

         <b-row class="mb-2">
            <b-col  class="text-sm-right"><b>Type:</b></b-col>
            <b-col>{{ row.item.type }}</b-col>
          </b-row>

         <b-row class="mb-2">
            <b-col  class="text-sm-right"><b>Buyer Name:</b></b-col>
            <b-col>{{ row.item.buyer_name }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col  class="text-sm-right"><b>Special Instructions:</b></b-col>
            <b-col>{{ row.item.special_instructions }}</b-col>
          </b-row>
        
                </b-container>
            </b-col>
          
          </b-row>
        <b-row>
            <br>
            <br>
            <b-col style="text-align: center">
              <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>&nbsp;
              <b-button size="sm" v-if="row.item.status == 'placed'" @click="cancelOrder(row.item.id)">Cancel Order</b-button>&nbsp;
              <b-button size="sm" v-if="row.item.status == 'placed'" @click="markReady(row.item.id)">Food is ready!</b-button>
          </b-col>
        </b-row>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
 import Axios from 'axios';
 import config from '../config';
 import DishAddNotifyService from '../_service/dish.service';

  export default {
    name: 'chef-orders',  
    data() {
      return {
        selectedStatus: 'placed',
        sortBy: 'pickup_date',  
        dortDesc: true,
        fields: ['dish_name', { key: 'status', sortable: true }, { key: 'pickup_date', sortable: true }, 'details'],
        items: [],
        served: [],
        refunded: [],
        placed: [],
        ready: [],
        types: JSON.parse(localStorage.getItem('types')),
        diah_added_observer: null,
        user: JSON.parse(localStorage.getItem('user'))['user']
      }
    },
    methods: {
        changeStatus(status) {
            let target_arrey = null
            this.selectedStatus = status
            if (status == 'served') {
               target_arrey = this.served
            } else if(status == 'placed') {
                target_arrey = this.placed
            } else if(status == 'refunded') {
                target_arrey = this.refunded
            } else {
                target_arrey = this.ready
            }
            this.items = []
            for (let order of target_arrey) {
                    this.$set(this.items, this.items.length, order);
            }
        },
        cancelOrder(id) {
            console.log(id)
            Axios.get(`order/cancel/${id}`).then(success => {
                this.getOrders(this.selectedStatus)
            }, error => {
                alert("error occured while canceling your order.\nPlease try again!")
            })
        },
        markReady(id) {
            Axios.get(`order/ready/${id}`).then(success => {
                this.getOrders(this.selectedStatus)
            }, error => {
                alert("error occured while canceling your order.\nPlease try again!")
            })
        },
        getOrders(status) {
            Axios.get('order/list/chef/').then(success => {
                this.items = []
                this.served = []
                this.refunded = []
                this.placed = []
                this.ready = []
                const orders = success.data['orders'];
                for (let order of orders) {
                    const dish_type = this.types.filter(x => x.id == order.type_id)[0]
                    order.type = dish_type.name
                    order.category = dish_type.category.name
                    order.pickup_date = order.pickup_date.replace(':00+00:00', '')
                    order.pickup_date = order.pickup_date.replace(' ', ' at ')
                    if (order.status == 'served') {
                        this.$set(this.served, this.served.length, order);    
                    } else if (order.status == 'placed') {
                        this.$set(this.placed, this.placed.length, order);
                    } else if (order.status == 'refunded') {
                        this.$set(this.refunded, this.refunded.length, order);
                    } else if (order.status == 'ready') {
                      this.$set(this.ready, this.ready.length, order);
                    }
                }
                this.changeStatus(status)
            }, error => {})
        },
        getChefDishes() {
            Axios.get('dish/list/chef/').then(success => {
            this.items = [];
            const dishes = success.data['dishes'];
            for (let dish of dishes) {
                dish.image = `${config.baseUrl}${dish.image}`
                const dish_type = this.types.filter(x => x.id == dish.type_id)[0]
                dish.type = dish_type.name
                dish.category = dish_type.category.name
                this.$set(this.items, this.items.length, dish);
            }
            // this.items  = dishes.map(x => )
            
            console.log(this.items)
        }, error => console.log(error))
        }
    },
    mounted() {
        this.getOrders(this.selectedStatus)

        // this.getChefDishes();
        // this.diah_added_observer = DishAddNotifyService.getMessage().subscribe(message => {
        //     if (message["added"]) {
        //        this.getChefDishes();
        //     }});
    },
    // beforeDestroy() {
    //     // unsubscribe to ensure no memory leaks
    //     if (this.diah_added_observer) {
    //     this.diah_added_observer.unsubscribe();
    //     }
    // }
  }
</script>