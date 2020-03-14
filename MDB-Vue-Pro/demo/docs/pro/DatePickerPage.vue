<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Date Picker</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/date-picker/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-container class="mt-5 d-flex justify-content-center">
      <mdb-date-picker :date="startDate" :option="option" @getValue="getPickerValue"/>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbDatePicker, mdbRow, mdbIcon } from 'mdbvue';

export default {
  name: 'DatePickerPage',
  components: {
    mdbContainer,
    mdbDatePicker,
    mdbIcon,
    mdbRow
  },
  methods: {
    getPickerValue(value) {
      console.log(value);
    }
  },
  data() {
    return {
      startDate: {
        date: ''
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD',
        placeholder: 'Please choose a date',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: 'primary',
          headerText: 'white',
          checkedDay: 'primary'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        }
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format:"YYYY-MM-DD"
      },
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: '2018-02-01',
        to: '2018-06-20'
      }]
    };
  }
};

</script>

<style>
</style>
