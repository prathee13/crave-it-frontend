<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Inputs</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/inputs/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <h2 class="title mb-5"><strong>Checkboxes</strong></h2>

      <h4 class="mt-5 mb-3">Basic examples</h4>
      <mdb-input type="checkbox" id="checkbox1" @change="checkboxChange" label="Default checkbox" />
      <mdb-input type="checkbox" id="checkbox2" @change="checkboxChange" label="Filled-in checkbox" checked filled/>

      <h4 class="mt-5 mb-3">Disabled checkboxes</h4>
      <mdb-input type="checkbox" id="checkbox3" label="Default checkbox" disabled/>
      <mdb-input type="checkbox" id="checkbox4" label="Filled-in checkbox" filled disabled/>

      <h4 class="mt-5 mb-3">Inline checkboxes</h4>
      <mdb-form-inline>
        <mdb-input type="checkbox" id="checkbox5" @change="checkboxChange" label="Default checkobox" />
        <mdb-input type="checkbox" id="checkbox6" @change="checkboxChange" label="Filled-in checkobox" filled/>
        <mdb-input type="checkbox" id="checkbox7" @change="checkboxChange" label="Default checkobox" />
      </mdb-form-inline>

      <hr class="my-5" />
      <h2 class="title mb-5"><strong>Radio buttons</strong></h2>

      <h4 class="mt-5 mb-3">Basic examples</h4>
      <mdb-input type="radio"
        id="option1-1"
        name="option1"
        value="option1"
        label="Option 1"
        checked
        @input="handleRadio"
      />
      <mdb-input type="radio"
        id="option1-2"
        name="option1"
        value="option2"
        label="Option 2"
        @input="handleRadio"
      />
      <mdb-input type="radio"
        id="option1-3"
        name="option1"
        value="option3"
        label="Option 3"
        @input="handleRadio"
      />

      <h4 class="mt-5 mb-3">Radio buttons with gap</h4>
      <mdb-input type="radio"
        gap
        id="option2-1"
        name="option2"
        value="option1"
        label="Option 1"
        @input="handleRadio"
      />
      <mdb-input type="radio"
        gap
        id="option2-2"
        name="option2"
        value="option2"
        label="Option 2"
        @input="handleRadio"
      />
      <mdb-input type="radio"
        gap
        id="option2-3"
        name="option2"
        value="option3"
        label="Option 3"
        @input="handleRadio"
      />

      <h4 class="mt-5 mb-3">Inline radio buttons</h4>
      <mdb-form-inline>
        <mdb-input type="radio"
          id="option3-1"
          name="option3"
          value="option1"
          label="Option 1"
          @input="handleRadio"
        />
        <mdb-input type="radio"
          id="option3-2"
          name="option3"
          value="option2"
          label="Option 2"
          @input="handleRadio"
        />
        <mdb-input type="radio"
          id="option3-3"
          name="option3"
          value="option3"
          label="Option 3"
          @input="handleRadio"
        />
      </mdb-form-inline>

      <hr class="my-5" />
      <h2 class="title mb-5"><strong>Switch</strong></h2>
      <mdb-switch checked @getValue="getSwitchValue"/>
      <h4 class="mt-5 mb-3">Disabled</h4>
      <mdb-switch disabled />

      <hr class="my-5" />
      <h2 class="title mb-5"><strong>File input</strong></h2>
      <h4 class="mt-5 mb-3">Basic example</h4>
      <mdb-file-input @getValue="getFileInputValue" />
      <h4 class="mt-5 mb-3">Multiple files</h4>
      <mdb-file-input @getValue="getFileInputValue" multiple btnColor="primary"/>

      <hr class="my-5" />
      <h2 class="title mb-5"><strong>Slider</strong></h2>
      <mdb-range-input :min="0" :max="100" :value="50" @getValue="getSliderValue"></mdb-range-input>
      <div style="height: 60px;"></div>

      <h2 class="title mb-5"><strong>Slider with different width</strong></h2>
      <mdb-range-input wrapperClass="my-4 w-25" :min="0" :max="100" :value="50" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
      <mdb-range-input wrapperClass="my-4 w-50" :min="0" :max="100" :value="50" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
      <mdb-range-input wrapperClass="my-4 w-75" :min="0" :max="100" :value="50" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
      <mdb-range-input wrapperClass="my-4 w-100" :min="0" :max="100" :value="50" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
      <div style="height: 60px;"></div>

      <h2 class="title mb-5"><strong>Slider with first and last value</strong></h2>
      <div class="d-flex justify-content-center my-4">
        <mdb-range-input wrapperClass="my-4 w-25" :min="20" :max="50" :value="25" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
      </div>
      <div class="d-flex justify-content-center my-4">
        <mdb-range-input wrapperClass="my-4 w-50" :min="0" :max="40" :value="40" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
      </div>
      <div class="d-flex justify-content-center my-4">
        <mdb-range-input wrapperClass="my-4 w-75" :min="0" :max="100" :value="0" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
      </div>
      <div class="d-flex justify-content-center my-4">
        <mdb-range-input wrapperClass="my-4 w-100" :min="40" :max="100" :value="50" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
      </div>
      <div style="height: 60px;"></div>

      <hr class="my-5" />
      <h2 class="title mb-3">Classic checkbox buttons</h2>
      <mdb-btn-group>
        <mdb-btn color="primary" @click.native="toggleActiveState1" :active="active1">Checkbox 1 (pre-checked)</mdb-btn>
        <mdb-btn color="primary" @click.native="toggleActiveState2" :active="active2">Checkbox 2</mdb-btn>
        <mdb-btn color="primary" @click.native="toggleActiveState3" :active="active3">Checkbox 3</mdb-btn>
      </mdb-btn-group>

      <h2 class="title my-3">Rounded checkbox buttons</h2>
      <mdb-btn-group>
        <mdb-btn color="pink" rounded @click.native="toggleActiveState1" :active="active1">Checkbox 1 (pre-checked)</mdb-btn>
        <mdb-btn color="pink" rounded @click.native="toggleActiveState2" :active="active2">Checkbox 2</mdb-btn>
        <mdb-btn color="pink" rounded @click.native="toggleActiveState3" :active="active3">Checkbox 3</mdb-btn>
      </mdb-btn-group>

      <h2 class="title my-3">Rounded checkbox buttons</h2>
      <mdb-btn-group>
        <mdb-btn color="warning" rounded icon="diamond" iconRight @click.native="toggleActiveState1" :active="active1">Checkbox 1 (pre-checked)</mdb-btn>
        <mdb-btn color="warning" rounded icon="user" iconRight @click.native="toggleActiveState2" :active="active2">Checkbox 2</mdb-btn>
        <mdb-btn color="warning" rounded icon="code" iconRight @click.native="toggleActiveState3" :active="active3">Checkbox 3</mdb-btn>
      </mdb-btn-group>

    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbInput, mdbFormInline, mdbSwitch, mdbFileInput, mdbRangeInput, mdbBtn, mdbBtnGroup, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'InputsProPage',
  components: {
    mdbContainer,
    mdbInput,
    mdbFormInline,
    mdbSwitch,
    mdbFileInput,
    mdbRangeInput,
    mdbBtn,
    mdbBtnGroup,
    mdbIcon,
    mdbRow
  },
  data() {
    return {
      radio1: 0,
      radio2: 0,
      radio3: 0,
      active1: true,
      active2: false,
      active3: false,
    };
  },
  methods: {
    checkboxChange (val) {
      console.log(val);
    },
    handleRadio (val) {
      console.log(val);
    },
    getSliderValue (val) {
      console.log(val);
    },
    getFileInputValue (val) {
      console.log(val);
    },
    getSwitchValue (val) {
      console.log(val);
    },
    toggleActiveState1() {
      this.active1 = !this.active1;
    },
    toggleActiveState2() {
      this.active2 = !this.active2;
    },
    toggleActiveState3() {
      this.active3 = !this.active3;
    },
    toggleRadio1() {
      this.radio1 = 1;
    },
    toggleRadio2() {
      this.radio1 = 2;
    },
    toggleRadio3() {
      this.radio1 = 3;
    },
    toggleRadio4() {
      this.radio2 = 1;
    },
    toggleRadio5() {
      this.radio2 = 2;
    },
    toggleRadio6() {
      this.radio2 = 3;
    },
    toggleRadio7() {
      this.radio3 = 1;
    },
    toggleRadio8() {
      this.radio3 = 2;
    },
    toggleRadio9() {
      this.radio3 = 3;
    }
  }
};

</script>

<style>
</style>
