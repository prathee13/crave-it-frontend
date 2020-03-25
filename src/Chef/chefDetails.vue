<template>
  <div>
    <b-form @submit="updateProfile($event)">
      <!-- phone number  -->
      <b-form-group label="Phone number" label-for="phone">
        <b-form-input type="text" id="phone" 
        v-model="form.phone_number" 
        required
        placeholder="Enter your phone number">
        </b-form-input>
      </b-form-group>
      <!-- address -->
      <b-form-group label="Address" label-for="address">
        <gmap-autocomplete class="form-control" id="address" style="width: 100%" placeholder="Enter your kitchen address" 
          required
          :value="form.address"
          @place_changed="setPlace">
        </gmap-autocomplete>
        <!-- <b-form-input
          id="address"
          v-model="form.address"
          placeholder="Enter your kitchen address"
          type="text"
        ></b-form-input> -->
      </b-form-group>
      <b-button type="submit" variant="primary">{{ form.address == "" ? "save": "update" }}</b-button>
    </b-form>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data() {
    return {
        form: {
        address: "",
        phone_number: "",
        latitude: "",
        longitude: ""
        },
        is_profile_loaded: false
    };
  },
  mounted() {
      Axios.get('profile/chef/').then(success => {
        console.log(success.data)
        if (!success.data['message']) {
          this.$set(this.form, 'address', success.data.address)
          this.form.longitude = success.data.longitude
          this.form.latitude = success.data.latitude
          this.form.address = success.data.address
          this.form.phone_number = success.data.phone_number
          this.is_profile_loaded = true
          console.log(this.form)
        }
      }, error => {
        console.log(error)
      })
  },
  methods: {
    updateProfile(event) {
      event.preventDefault()
      console.log(this.is_profile_loaded)
      const axios_instance = !this.is_profile_loaded ? Axios.post : Axios.put
      axios_instance('profile/chef/', this.form).then(success => {alert("profile data updated successfully")}, error => {
        console.log(error);
      })
    },
    setPlace(place) {
      this.form.address = place.formatted_address
      this.form.longitude = place.geometry.location.lat()
      this.form.latitude = place.geometry.location.lng()
      console.log(this.form)
    },
    },
  name: "chef-details"
};
</script>