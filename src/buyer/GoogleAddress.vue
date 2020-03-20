<template>
  <div id="app">
    <vue-google-autocomplete
      id="map"
      class="form-control"
      placeholder="Start typing"
      v-on:placechanged="getAddressData"
    ></vue-google-autocomplete>
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {};
</script>