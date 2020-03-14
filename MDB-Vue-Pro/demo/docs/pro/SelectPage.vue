<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Select</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/select/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <h4 class="pb-3">Basic example</h4>
      <mdb-row>
        <mdb-col sm="6">
          <mdb-select @getValue="getSelectValue" :options="basicOptions" />
        </mdb-col>
        <mdb-col sm="6">
          <mdb-btn tag="a" color="warning" floating @click="removeOption(basicOptions)" icon="minus" iconLeft></mdb-btn>
          <mdb-btn tag="a" color="success" floating @click="addOption(basicOptions)" icon="plus" iconLeft></mdb-btn>
          <mdb-btn tag="a" color="danger" floating @click="removeAllOptions(basicOptions)" icon="trash" iconLeft></mdb-btn>
        </mdb-col>
      </mdb-row>
      <h4 class="pt-4 pb-3">Color variations</h4>
      <mdb-row>
        <mdb-col sm="6">
          <mdb-select color="primary" @getValue="getSelectValue" :options="colorOptions" />
          <label>Blue select</label>
        </mdb-col>
      </mdb-row>
      <h4 class="pt-4 pb-3">Select with search box</h4>
      <mdb-row>
        <mdb-col sm="6">
          <mdb-select search @getValue="getSelectValue" :options="searchOptions" />
        </mdb-col>
      </mdb-row>
      <h4 class="pt-4 pb-3">Select with label and search box</h4>
      <mdb-row>
        <mdb-col sm="6">
          <mdb-select search @getValue="getSelectValue" :options="labelOptions" />
          <label>Example label</label>
        </mdb-col>
      </mdb-row>
      <h4 class="pt-4 pb-3">Multiple select</h4>
      <mdb-row>
        <mdb-col sm="6">
          <mdb-select multiple search selectAll @getValue="getSelectValue" :options="multiOptions" />
          <label>Example label</label>
        </mdb-col>
        <mdb-col sm="6">
          <mdb-btn tag="a" color="warning" floating @click="removeOption(multiOptions)" icon="minus" iconLeft></mdb-btn>
          <mdb-btn tag="a" color="success" floating @click="addOption(multiOptions)" icon="plus" iconLeft></mdb-btn>
          <mdb-btn tag="a" color="danger" floating @click="removeAllOptions(multiOptions)" icon="trash" iconLeft></mdb-btn>
        </mdb-col>
      </mdb-row>
      <h4 class="pt-4 pb-2">Options groups</h4>
      <mdb-row>
        <mdb-col sm="6">
          <mdb-select @getValue="getSelectValue" :options="groupOptions" />
        </mdb-col>
      </mdb-row>
      <h4 class="pt-4 pb-2">Select with icons</h4>
      <mdb-row>
        <mdb-col sm="6">
          <mdb-select @getValue="getSelectValue" :options="iconOptions" />
        </mdb-col>
      </mdb-row>
      <h4 class="pt-4 pb-2">Disabled select</h4>
      <mdb-row>
        <mdb-col sm="6">
          <mdb-select disabled :options="disabledOptions" />
        </mdb-col>
      </mdb-row>
      <br><br><br><br><br><br><br><br><br>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbSelect, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn } from 'mdbvue';

export default {
  name: 'SelectPage',
  components: {
    mdbSelect,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn
  },
  data() {
    return {
      basicOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      colorOptions: [
        { text: 'Option nr 1', value: 'Option 1', selected: true }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      searchOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      labelOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      multiOptions: [
        { text: 'Choose your options', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      groupOptions: [
        { text: 'team 1', value: null, disabled: true, optgroup: true },
        { text: 'Option nr 1', value: 'Option 1', selected: true }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'team 2', value: null, disabled: true, optgroup: true },
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }
      ],
      iconOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' }, 
        { text: 'Option nr 2', value: 'Option 2', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' }, 
        { text: 'Option nr 3', value: 'Option 3', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg' }
      ],
      disabledOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
    };
  },
  methods: {
    getSelectValue(value, text) {
      console.log(value);
    },
    removeOption(data) {
      if (data.length < 2) return;
      data.pop();
    },
    removeAllOptions(data) {
      if (data.length < 2) return;
      data.splice(1);
    },
    addOption(data) {
      data.push({
        text: 'Option nr ' + data.length,
        value: 'Option ' + data.length
      });
    }
  }
};
</script>

<style scoped>
h4 {
  font-weight: bold;
}
</style>
