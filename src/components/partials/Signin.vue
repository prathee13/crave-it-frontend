<template>
<div>
    <b-form @submit="signIn">
        <b-form-group id="input-group-1" label="Email" label-for="input-1">
            <b-form-input
                id="email"
                type="email"
                v-model="form.email"
                required
                placeholder="Enter email"
            >
            </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Password" label-for="input-1">
            <b-form-input
                type="password" 
                v-model="form.password"
                id="input-2" 
                placeholder="Enter password"
                required
            >
            </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-5">
               <b-form-checkbox-group v-model="form.role" id="checkboxes-4">
                  <b-form-checkbox value="2">Log in as a chef?</b-form-checkbox>
               </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" variant="primary">Sign In</b-button>
    </b-form>
</div>
</template>

<script>
// import login from '../../_service/user.service';
import Axios from 'axios';
import logInNotifyService from '../../_service/message.service';

export default {
  data() {
    return {
      form: {email: '',
      password: '',
      role: []
      }
    }
   },
  methods: {
    handleSigninSuccess(data) {
      const user = data.data;
      if (user) {
          // store user details and basic auth credentials in local storage 
          // to keep user logged in between page refreshes
          // user.authdata = window.btoa(username + ':' + password);
          localStorage.setItem('user', JSON.stringify(user));
          Axios.defaults.headers.common['Authorization'] = `Token ${user.token}`;
          logInNotifyService.sendMessage(true);
          this.$router.push({path: `/${user.user.role.name}`})
      }
    },
    signIn(evt) {
        evt.preventDefault();
           const user_data = {
                "email": this.form.email,
                "password": this.form.password,
                "role": (this.form.role.length > 0) ? 2 : 1
            }
            Axios.post('users/login/', user_data).then(
                data => {this.handleSigninSuccess(data)},
                error => {console.log(error.body)});
      }
    }
  }
</script>