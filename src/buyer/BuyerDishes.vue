<template>
  <b-container>
    <br />
    <b-row>
      <b-col>
        <cat-type v-on:type-changed="setType($event)"></cat-type>
      </b-col>
    </b-row>
    <b-row v-if="items.length > 0">
      <b-col>
        <b-table :items="items" :fields="fields" striped responsive="sm">
          <template v-slot:cell(show_details)="row">
            <b-button
              size="sm"
              @click="row.toggleDetails"
              class="mr-2"
            >{{ row.detailsShowing ? 'Hide' : 'Show'}} Details</b-button>
            <b-button
              size="sm"
              @click="info(row.item, row.index, $event.target)"
              class="mr-2"
            >Info modal</b-button>
          </template>

          <template v-slot:row-details="row">
            <b-card>
              <b-row>
                <!-- <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col> -->
                <b-col>
                  <b-img
                    sm="12"
                    md="4"
                    class="img-responsive"
                    style="max-width: 600px; width:100%; height:auto"
                    thumbnail
                    fluid
                    v-bind:src="row.item.image"
                  />
                </b-col>
                <b-col sm="12" md="6" style="display:flex; align-items: center">
                  <b-container fluid>
                    <b-row class="mb-2">
                      <b-col class="text-sm-right">
                        <b>Name:</b>
                      </b-col>
                      <b-col>{{ row.item.name }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                      <b-col class="text-sm-right">
                        <b>Price:</b>
                      </b-col>
                      <b-col>{{ row.item.price }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                      <b-col class="text-sm-right">
                        <b>Category</b>
                      </b-col>
                      <b-col>{{ row.item.category }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                      <b-col class="text-sm-right">
                        <b>Type:</b>
                      </b-col>
                      <b-col>{{ row.item.type }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                      <b-col class="text-sm-right">
                        <b>Order before (in hours):</b>
                      </b-col>
                      <b-col>{{ row.item.order_before }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                      <b-col class="text-sm-right">
                        <b>Description:</b>
                      </b-col>
                      <b-col>{{ row.item.description }}</b-col>
                    </b-row>
                  </b-container>
                </b-col>
              </b-row>
              <b-row>
                <br />
                <b-col style="text-align: center">
                  <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>&nbsp;
                  <!-- <b-button size="sm" @click="deleteItem(row.item.id)">Delete</b-button> -->
                </b-col>
              </b-row>
            </b-card>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <!-- Info modal -->
    <b-modal :id="infoModal.id" size="lg" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <b-form @submit="onSubmit" @reset="onReset">
          <!-- Quantity -->
          <b-form-group label="Quantity:" label-for="quantity">
        <b-form-select
          id="quantity"
          v-model="form.quantity"
          :options="allowed_quantity"
          required
        ></b-form-select>
      </b-form-group>
      <!-- any instructions -->
        <b-form-group label="Additional cooking Instructions:" label-for="instructions">
         <b-form-textarea
            id="instructions"
            v-model="form.description"
            placeholder="write about allergies..."
            rows="3"
            max-rows="6"
        ></b-form-textarea>
        </b-form-group>
        <!-- date for the pickup -->
        <b-form-group label="Date of Pickup" label-for="date">
            <b-form-datepicker id="date" v-model="form.date"
             :min="dateMin"
             :initial-date="dateMin"
             :required="true"  
             locale="en"></b-form-datepicker>
        </b-form-group>
        <!-- time of pickup -->
        <b-form-group label="Time of Pickup(24 hr format)" label-for="time">
            <b-input id="time" type="time" v-model="form.time" required> </b-input>
        </b-form-group>

        <!-- select card -->
        <b-form-group label="Payment Method" label-for="pay">
            <b-form-select
            id="pay"
            v-model="form.card_id"
            :options="cards"
            text-field="repr"
            value-field="id"
            required
        ></b-form-select>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>    
    </b-modal>
  </b-container>
</template>
<script>
import CategoryTypeSelect from "../components/common/CategoryTypeSelect";
import Axios from "axios";
import config from "../config";

export default {
  name: "buyer-dishes",
  components: {
    "cat-type": CategoryTypeSelect,
  },
  data() {
    return {
      dateMin: null,
      fields: ["name", "chef_name", "show_details"],
      items: [],
      types: JSON.parse(localStorage.getItem("types")),
      diah_added_observer: null,
      cards: [],
      allowed_quantity: [{text: "choose a value", value: null},1,2,3,4,5],
      infoModal: {
          id: 'info-modal',
          title: '',
        },
      form:{
          quantity: null,
          description: null,
          date: null,
          time: null,
          card_id: null,
          dish_id: null
          }
    };
  },
  mounted() {
    this.getUserCards();
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    this.dateMin = minDate;
    this.form.date = this.dateMin;
  },
  methods: {
    info(item, index, button) {
        this.infoModal.title = `Place Order: ${item.name}`
        this.form.dish_id = item.id
        this.getUserCards();
        // this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    onSubmit(event) {
        event.preventDefault()
        Axios.post('order/place/', this.form).then(success => {
            alert('order placed successfully')
            this.$root.$emit('bv::hide::modal', this.infoModal.id, button)
            this.onReset()
            this.resetInfoModal()
        }, error => alert(JSON.stringify(error.data['errors'])))
    },
    onReset() {
        this.form = {
          quantity: null,
          description: null,
          date: this.dateMin,
          time: '',
          card_id: null,
          }
    },
    resetInfoModal() {
        this.infoModal.title = ''
        this.form.dish_id = null
    },
    getUserCards() {
      Axios.get("buyer/card/").then(
        success => {
          this.cards = [{'repr': "select a value", 'id': null}];
          const my_cards = success.data["cards"];
          for (let card of my_cards) {
              card.repr = `${card.vendor}: *** ${card.last_four}`
            this.$set(this.cards, this.cards.length, card);
          }
          console.log(this.cards);
        },
        error => console.log(error)
      );
    },
    setType(val) {
      Axios.get(`dish/list/${val}/`).then(
        success => {
          console.log(success);
          this.items = [];
          const dishes = success.data["dishes"];
          for (let dish of dishes) {
            dish.image = `${config.baseUrl}${dish.image}`;
            const dish_type = this.types.filter(x => x.id == dish.type_id)[0];
            dish.type = dish_type.name;
            dish.category = dish_type.category.name;
            this.$set(this.items, this.items.length, dish);
          }
        },
        error => console.log(error)
      );
    },

  }
};
</script>