<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Time Picker</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/time-picker/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-container class="ml-5 mt-5">
      <mdb-row>
        <mdb-col col="6">
          <mdb-time-picker
            :id="'timePickerOne'"
            :placeholder="'Select your time'"
            :label="'format: am/pm'"
            :color="'secondary-color'"
            @getValue="getPickerValue"
          />
        </mdb-col>
        <mdb-col col="6">
          <mdb-time-picker
            :id="'timePickerTwo'"
            :placeholder="'Select your time'"
            :label="'format: 24h'"
            :hoursFormat="24"
            @getValue="getPickerValue"
          />
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbTimePicker, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

export default {
  name: 'TimePickerPage',
  data() {
    return {
    };
  },
  methods: {
    getPickerValue(value) {
      console.log(value);
    }
  },
  components: {
    mdbTimePicker,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
