<template>
<div>
    <b-form @submit="signIn">
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
            <b-form-input
                id="email"
                v-model="email"
                required
                placeholder="Enter email"
            >
            </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Password:" label-for="input-1">
            <b-form-input
                type="password" 
                v-model="password"
                id="input-2" 
                placeholder="Enter password"
                required
            >
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Sign In</b-button>
    </b-form>
  <router-link to="/signup">Not a user? Sign up</router-link>
</div>
</template>

<script>

export default {
  data() {
    return {
      form: { 
         email: '',
         password: '',
         error: {
                  message: ''
          }
      }
    }
   },
  methods: {
    signIn() {
      
      }
    }
  }
</script>