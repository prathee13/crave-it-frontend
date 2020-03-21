<template>
  <div style="width:100%; display: flex; justify-content:center">
      <div style="max-width:400px; width:100% !important; border: 2px solid rgba(0, 0, 0, 0.125); padding: 10px; ">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        label="Name"
        label-for="dish-name"
      >
        <b-form-input
          id="dish-name"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name of the dish"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Description" label-for="desc">
        <b-form-textarea
            id="desc"
            required
            v-model="form.description"
            placeholder="Add description of the dish"
            rows="4"
        ></b-form-textarea>
      </b-form-group>
    
      <b-form-group label="Food Type" label-for="type">
      <cat-type id="type" v-on:type-changed="setType($event)"></cat-type>
      </b-form-group>

      <b-form-group label="Price" label-for="price">
        <b-form-input
          id="price"
          v-model="form.price"
          type="number"
          required
          min="0"
        ></b-form-input>
      </b-form-group>

     <b-form-group label="Order Brfore (in hours)" label-for="sb-inline">
        <b-form-spinbutton required id="sb-inline" wrap min="1" max="25" v-model="form.order_before"></b-form-spinbutton>
      </b-form-group>

      <b-form-group label-for="image" label="Image">
        <b-form-file
        id="image"
        v-model="form.image"
        :state="Boolean(form.image)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        ></b-form-file>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
      </div>
</div>
</template>

<script>
import CategoryTypeSelect from '../components/common/CategoryTypeSelect';
import Axios from  'axios';

export default {
    name: 'add-dishes',
    components: {
        'cat-type': CategoryTypeSelect,
    },
    data() {
      return {
        form: {
          name: '',
          description: '',
          image: null,
          price: null,
          order_before: null,
          type: -1
        },
      }
    },
    methods: {
      setType(val) {
          console.log(val)
          this.form.type = val;
      },  
      onSubmit(evt) {
        evt.preventDefault()
        if (this.form.type == -1) {
            alert('Please select a cuisine type');
            return
        }
        const form_data = new FormData()
        form_data.methods = 'post'
        form_data.append('files', this.form.image)
        form_data.set('name', this.form.name)
        form_data.set('description', this.form.description)
        form_data.set('price', this.form.price)
        form_data.set('order_before', this.form.order_before)
        form_data.set('type', this.form.type)

        Axios.post('dish/', form_data, {headers: {
                'Content-Type': 'multipart/form-data; boundary=--------------------------329066800504698048817510',
            }
            }).then(response => {
                alert('dish added successfully');
                // TODO: make an observer class to emit refresh message
                this.onReset(null);
          }, error => console.log(error))
      },
      onReset(evt) {
        // evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.description = null
        this.form.image = null
        this.form.type = null
        this.form.order_before = null
        this.form.price
      }
    }
  }
</script>