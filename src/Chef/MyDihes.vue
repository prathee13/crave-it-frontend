<template>
  <div>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template v-slot:cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

      </template>

      <template v-slot:row-details="row">
        <b-card>
          <b-row>
            <!-- <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col> -->
            <b-col><b-img sm="12" md="4" class="img-responsive"  style="max-width: 600px; width:100%; height:auto" thumbnail fluid v-bind:src="row.item.image"/></b-col>
            <b-col sm="12" md="6" style="display:flex; align-items: center">
                <b-container fluid>
                     <b-row class="mb-2">
            <b-col  class="text-sm-right"><b>Name:</b></b-col>
            <b-col >{{ row.item.name }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col  class="text-sm-right"><b>Price:</b></b-col>
            <b-col>{{ row.item.price }}</b-col>
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
            <b-col  class="text-sm-right"><b>Order before (in hours):</b></b-col>
            <b-col>{{ row.item.order_before }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col  class="text-sm-right"><b>Description:</b></b-col>
            <b-col>{{ row.item.description }}</b-col>
          </b-row>
        
                </b-container>
            </b-col>
          
          </b-row>
        <b-row>
            <b-col style="text-align: center">
              <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>&nbsp;
              <b-button size="sm" @click="deleteItem(row.item.id)">Delete</b-button>
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
    name: 'my-dishes',  
    data() {
      return {
        fields: ['name', 'description', 'show_details'],
        items: [],
        types: JSON.parse(localStorage.getItem('types')),
        diah_added_observer: null,
      }
    },
    methods: {
        deleteItem(item_id) {
            Axios.delete(`dish/delete/${item_id}/`).then(success => {
                this.getChefDishes();
            }, error => console.log(error))
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
        this.getChefDishes();
        this.diah_added_observer = DishAddNotifyService.getMessage().subscribe(message => {
            if (message["added"]) {
               this.getChefDishes();
            }});
    },
    beforeDestroy() {
        // unsubscribe to ensure no memory leaks
        if (this.diah_added_observer) {
        this.diah_added_observer.unsubscribe();
        }
    }
  }
</script>