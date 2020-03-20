<template>
          <!-- @submit="signUp" @reset="onReset" -->
          <b-form>
            <b-form-group label="Name" label-for="name1">
            <b-form-input
                id="name1"
                v-model="form.name"
                type="name"
                required
                placeholder="Enter name"
            >
            </b-form-input>
            </b-form-group>
            <b-form-group label="Email" label-for="email1">
            <b-form-input
                id="email1"
                v-model="form.email"
                required
                placeholder="Enter email"
            >
            </b-form-input>
            </b-form-group>
            <b-form-group label="Password" label-for="password1">
            <b-form-input 
                type="password"
                v-model="form.password"
                id="password1" 
                placeholder="Enter password"
                required
            >
            </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Register</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
     
</template>

<script>
import ChefDocuments from './ChefDocuments';

export default {
  components: {
    'chef-documents': ChefDocuments
  },
  data() {
    return {
       files: [],
       documents: [], 
       form: {
           name: '',
           email: '',
           password: '',
        },  
    };
  },
  name: "user-credentials"
};
</script>