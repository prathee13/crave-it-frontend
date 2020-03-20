<template>
    <div> 
        <b-form @submit="signUp" @reset="onReset">
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
            <b-form-group>
               <b-form-checkbox-group v-model="form.role" id="role-check-su">
                  <b-form-checkbox value="2">Do you want to be a chef?</b-form-checkbox>
               </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit" variant="primary">Register</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>
<script>

// import Router from '../../router';
import Axios from 'axios';
import config from '../../config';
import logInNotifyService from '../../_service/message.service';

export default {
    data() {
        return {
            form: {name: '',
            email: '',
            password: '',
            role: []
        }}
    },
    methods: {
        handleSignupSuccess(data) {
            // login successful if there's a user in the response
            console.log(data);
            const user = data.data;
            if (user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                // user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
                Axios.defaults.baseURL = config.apiUrl;
                Axios.defaults.headers.common['Authorization'] = `Token ${user.token}`;
                logInNotifyService.sendMessage(true);
                this.$router.push({path: `/${user.user.role.name}`})
            }
        },
        signUp(evt) {
           evt.preventDefault();
           const user_data = {
                "username": this.form.name,
                "email": this.form.email,
                "password": this.form.password,
                "role": (this.form.role.length > 0) ? 2 : 1
            }
        //    const api_endpoint = register ?   : `${config.apiUrl}users/login/`;
            Axios.post(`${config.apiUrl}users/register/`, user_data).then(
                data => {this.handleSignupSuccess(data)},
                error => {console.log("error")});
        },
        onReset(evt) {
        // Reset our form values
        this.email = ''
        this.name = ''
        this.role = []
      }
    }
}
</script>