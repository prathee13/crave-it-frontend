<template>
    <div id="app">
        <h3>Please answer a few questions....</h3>
        <b-form>
            <b-form-group
                id="time"
                label="When will you be able to pick up?"
                label-for="time"
            >
            </b-form-group>
            <b-dropdown id="dropdown1" text="Select" class="m-md-2">
                <b-dropdown-item>12:00 PM </b-dropdown-item>
                <b-dropdown-item>1:00 PM</b-dropdown-item>
                <b-dropdown-item>2:00 PM</b-dropdown-item>
                <b-dropdown-item>3:00 PM </b-dropdown-item>
                <b-dropdown-item>6:00 PM</b-dropdown-item>
                <b-dropdown-item>7:00 PM</b-dropdown-item>
            </b-dropdown>
            <b-form-group
                id="quantity"
                label="Enter quantity"
                label-for="quantity"
            >
            <b-form-select v-model="selected" :options="quantity" size="sm" class="mt-3"></b-form-select>
            </b-form-group>
            <b-form-group
                id="pay"
                label="How would you like to pay?"
                label-for="pay"
            >
               <b-form-radio v-model="selected" name="some-radios" value="A">Pay online</b-form-radio>
               <b-form-radio v-model="selected" name="some-radios" value="B">Cash at door.</b-form-radio>
            </b-form-group>
        </b-form>
        <b-form-group label="Waiting for chef's approval...">
        <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </b-form-group>
        <hr>
        <h4>People who brought Idli also viewed.....</h4>
        <b-card-group deck>
           <b-card title="Dosa" img-src="https://c.ndtvimg.com/2018-09/evskipf_dosa_625x300_14_September_18.jpg" img-alt="Dosa"
    img-top tag="article" style="max-width: 20rem;" class="mb-2"
  >
  </b-card>
  <b-card title="Vada" img-src="https://www.tastycircle.com/wp-content/uploads/2014/04/uzhunnu-vada.jpg" img-alt="Dosa"
    img-top tag="article" style="max-width: 20rem;" class="mb-2"
  >
  </b-card>
  <b-card title="Appam" img-src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Madhuri_Aggarwal/Nei_Appam.jpg" img-alt="Appam"
    img-top tag="article" style="max-width: 20 rem;" class="mb-2">
  </b-card>
  </b-card-group>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        selected: null,
        quantity: [
          { value: null, text: 'Please select.' },
          { value: '1', text: '1' },
          { value: '2', text: '2'},
          { value: '3', text: '3' },
          { value: '4', text: '4' },
          { value: '5', text: '5' },
        ]
      }
    }
  }
</script>