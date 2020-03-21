<template>
  <!-- @submit="signUp" @reset="onReset" -->
  <div>
    <b-form @submit="updateCreds($event)">
      <b-form-group label="Name" label-for="username">
        <b-form-input id="username" v-model="form.name" type="text" placeholder="Enter name"></b-form-input>
      </b-form-group>
      <b-form-group label="Email" label-for="user_email">
        <b-form-input
          id="user_email"
          type="email"
          v-model="form.email"
          placeholder="Enter email to update your email"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Password" label-for="new_password">
        <b-form-input
          type="password"
          v-model="form.password"
          id="new_password"
          placeholder="enter a new password to update password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Update</b-button>
    </b-form>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      files: [],
      documents: [],
      form: {
        name: "",
        email: "",
        password: ""
      },
      user: {}
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.form.name = user.user.username;
    this.form.email = user.user.email;
    this.user = user;
  },
  methods: {
    updateCreds(event) {
      let data = {};
      if (this.form.password) {
        data["password"] = this.form.password;
      }
      if (this.form.name) {
        if (this.form.name != this.user.username) {
          data["username"] = this.form.name;
        }
      }
      if (this.form.email) {
        if (this.form.email != this.user.email) {
          data["email"] = this.form.email;
        }
      }
      if (data != {}) {
        Axios.put("profile/creds/", data).then(
          response => {
            this.user.email = this.form.email;
            this.user.username = this.form.name;
            localStorage.setItem("user", JSON.stringify(this.user));
          },
          error => console.log(error)
        );
      }
    }
  },
  name: "user-credentials"
};
</script>