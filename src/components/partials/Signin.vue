<template>
<div class="form-inline">
  <br>
  <div>
    <b-form>
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
                v-model="password"
                id="input-2" 
                placeholder="Enter password"
                required
            >
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" @click="signIn">Sign In</b-button>
    </b-form>
  </div>
  <router-link to="/signup">Not a user? Sign up</router-link>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn() {
      
    }
  }
}
</script>