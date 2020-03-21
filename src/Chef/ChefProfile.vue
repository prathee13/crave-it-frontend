<template>
  <b-container>
    <br>
    <b-row>
      <b-col>
        <b-card-group deck>
          <b-card header="Credentials" header-tag="header" footer footer-tag="footer">
            <user-creds />
          </b-card>
          <b-card header="Contact" header-tag="header" footer footer-tag="footer">
            <chef-details />
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col>
        <b-card-group deck>
          <b-card
            header="Payment Details"
            header-tag="header"
            footer
            footer-tag="footer"
            title="Connect your profile to Stripe"
          >
            <b-card-text></b-card-text>
            <div style="width:100%; hwight: 100%; display: flex;">
              <b-button
                v-bind:href="this.stripe_url"
                class="align-self-center"
                variant="outline-primary"
              >Connect to Stripe</b-button>
            </div>
          </b-card>

          <b-card header="Documents" header-tag="header" footer footer-tag="footer">
            <chef-documents />
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ChefDocuments from "./ChefDocuments";
import UserCredentials from "../components/common/userCredentials";
import ChefDetails from "./chefDetails";
import config from "../config";
import Axios from "axios";

// TODO: finish the update flow when pratheeksha makes autocomplete
export default {
  components: {
    "chef-documents": ChefDocuments,
    "user-creds": UserCredentials,
    "chef-details": ChefDetails
  },
  data() {
    return {
      files: [],
      documents: [],
      form: {
        name: "",
        email: "",
        password: ""
      },
      stripe_url: ""
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    const state = user["user"]["uuid"];
    const user_email = user["user"]["email"];
    const query = this.$route.query;
    if (query != {}) {
      if (query["code"]) {
        Axios.get("chef/stripe/account/?code=" + query["code"]).then(
          success => {
            alert("account connected");
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  },
  mounted() {
    this.stripe_url = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${config.stripe_client_id}&scope=read_write`;
  },
  //   methods: {
  //       connectToStripe() {
  //           const url=
  //       }
  //   }
  name: "chef-profile"
};
</script>