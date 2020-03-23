<template>
  <div class="form-group">
    <card v-if="showStripeForm" class='form-control'
      :class='{ complete }'
      stripe='pk_test_OrrKAgHFmP1FJsH7YIVNGeuR0095Q5E13Y'
      @change='complete = $event.complete'
    />
    <br>
    <b-button v-if="showStripeForm" variant="primary" @click='pay' :disabled='!complete'>Add a credit card</b-button>
     <br>
     <br>
     <b-table v-if="items.length > 0" :items="items" :fields="fields">
      <template v-slot:cell(last_four_digits)="row">
        {{ row.item.last_four }} 
      </template>
      <template v-slot:cell(action)="row">
        <b-button size="sm" @click="removeCard(row.item.id)" class="mr-2">
          Delete
        </b-button>
      </template>
    </b-table>
  </div>
</template>
 
<script>
// import { stripeKey, stripeOptions } from './stripeConfig.json'
import { Card, createToken } from 'vue-stripe-elements-plus'
import Axios from 'axios'

export default {
  data () {
    return {
      showStripeForm: false,  
      complete: false,
      fields: ['last_four_digits', 'vendor', 'action'],
      items: [],
    }
  },
 
  components: { Card },
 mounted() {
     this.getBuyerCards();
     setTimeout(() => {
     this.showStripeForm = true
  }, 2000)
 },
  methods: {
    removeCard(id) {
        Axios.get(`buyer/card/delete/${id}/`).then(success => {
            this.getBuyerCards()
        }, error => console.log(error))
    },  
    getBuyerCards() {
        Axios.get('buyer/card/').then(success => {
            this.items = [];
            const cards = success.data['cards']
            for (let card of cards) {
                this.$set(this.items, this.items.length, card)
            }
            console.log(cards);
        }, error => console.log(error));
    },  
    pay () {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => {
          console.log(data)
          Axios.post('buyer/card/', {
              'card_token': data.token.id,
              'last_four': data.token.card.last4,
              'vendor': data.token.card.brand,
              'card_id': data.token.card.id 
              }).then(success => {
                  this.getBuyerCards()
              }, error => {})
      })
    }
  }
}
</script> 