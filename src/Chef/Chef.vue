<template>
  <div id="app">
    <b-card
      img-src="https://img.pngio.com/user-icons-free-download-png-and-svg-user-png-200_200.png"
      img-alt="Card image"
      img-left
      class="mb-3"
    >
      <b-card-title>John Doe</b-card-title>
      <b-card-sub-title>Welcome to my profile.</b-card-sub-title>
    </b-card>
    <b-tabs card align="center">
      <!-- Notification -->
      <b-tab title="Notifications" active>
        <!-- <b-card-text>
          You've got no new notifications.
          <br />Please come back later.
        </b-card-text> -->
        <chef-profile />
      </b-tab>
      <!-- Food -->
      <b-tab title="Food">
        <b-table foodItems="foodItems" :fields="fields" striped responsive="sm">
          <template v-slot:cell(add_details)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">{{ row.detailsShowing ? 'Hide' : 'Show'}} Details</b-button>
            <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </b-form-checkbox>
          </template>
        </b-table>
      </b-tab>
      <!-- Payments -->
      <b-tab title="Payment">
        <h6>Crave-It Balance</h6>
        <div>
          <b-card>
            <b-card-text>$250</b-card-text>
            <b-button href="#" variant="primary">Withdraw money</b-button>
          </b-card>
        </div>
        <hr />
        <h6>Withdrawal History</h6>
        <p>None so far</p>
        <hr />
        <h6>Payment History</h6>
        <div>
          <b-table striped hover :items="items"></b-table>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import ChefProfile from './ChefProfile';

export default {
  components : {
    'chef-profile': ChefProfile
  },
  data() {
    return {
      fields: ["food_name", "cuisine", "show_details"],
      foodItems: [
        {
          isActive: true,
          cost: "$10",
          food_name: "Dosa",
          cuisine: "South Indian"
        }
      ],
      items: [
        { date: "13 August 2019", name: "Gol gappa", money: "$10" },
        { date: "19 April 2019", name: "Dosa", money: "$7" },
        { date: "18 November 2019", name: "Dosa", money: "$20" }
      ]
    };
  },
  name: "Chef"
};
</script>