<template>
  <div id="app">
    <google-map />
    <!-- <div>
      <h2>Your Address</h2>

       <vue-google-autocomplete
        ref="address"
        id="map"
        class="form-control"
        placeholder="Please type your address"
        v-on:placechanged="getAddressData"
      ></vue-google-autocomplete> 
    </div>  -->
  </div>
</template>

<script>
//import VueGoogleAutocomplete from 'vue-google-autocomplete'

import GoogleMap from './components/GoogleMaps.vue'
export default {
  name: "App",
  components: {
    GoogleMap
  }
  // components: { VueGoogleAutocomplete },
 
  //       data: function () {
  //           return {
  //             address: '',
  //             map : new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: -34.397, lng: 150.644},
  //   zoom: 8
  // })
  //           }
  //       },
 
  //       mounted() {
  //           // To demonstrate functionality of exposed component functions
  //           // Here we make focus on the user input
  //           this.$refs.address.focus();
  //       },
 
  //       methods: {
  //           /**
  //           * When the location found
  //           * @param {Object} addressData Data of the found location
  //           * @param {Object} placeResultData PlaceResult object
  //           * @param {String} id Input container ID
  //           */
  //           getAddressData: function (addressData, placeResultData, id) {
  //               this.address = addressData;
  //               console.log(this.address);
  //           }
  //       }
}
</script>


