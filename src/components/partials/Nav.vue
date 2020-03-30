<template>
<!-- <div>
<b-nav class="navbar navbar-expand-sm bg-dark navbar-dark">
   <ul class="navbar-nav"> 
    <div id="navbar" class="navbar-menu">
        <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
    </div>
   </ul>
</b-nav>
</div> -->
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">CraveIt</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- Using 'button-content' slot -->
        <b-nav-item-dropdown right v-if="user_logged_in">
          <template v-slot:button-content>
            Menu
          </template>
          <b-dropdown-item v-on:click="gotoProfile">Profile</b-dropdown-item>
          <b-dropdown-item v-on:click="gotoDishes">Dishes</b-dropdown-item>
          <b-dropdown-item v-on:click="gotoOrders">Orders</b-dropdown-item>
          <b-dropdown-item v-if="showMap" v-on:click="gotoMap">Location Tracker</b-dropdown-item>
          <b-dropdown-item v-on:click="logoutUser()" >Sign Out</b-dropdown-item>
          <b-dropdown-item v-on:click="logoutUser(true)">Sign Out (All devices)</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import logInNotifyService from '../../_service/message.service';
import Axios from 'axios';
import config from '../../config';

export default {
    name: 'Nav',
    data() {
      return {
        user_logged_in: false,
        user_observer: null,
        showMap: false,
      }
    },
    methods: {
      gotoMap() {
          this.$router.push({name: 'chef-map'});
      },
      gotoOrders() {
        const user = JSON.parse(localStorage.getItem('user'))['user'];
        if (user.role.name == 'chef') {
          this.$router.push({name: 'chef-orders'});
        } else if (user.role.name == 'buyer') {
          this.$router.push({name: 'buyer-orders'});
        } else {
          this.logoutUser();
        }
      },
      gotoDishes() {
        const user = JSON.parse(localStorage.getItem('user'))['user'];
        if (user.role.name == 'chef') {
          this.$router.push({name: 'chef-dishes'});
        } else if (user.role.name == 'buyer') {
          this.$router.push({name: 'buyer-dishes'});
        } else {
          this.logoutUser();
        }
        
      },
      gotoProfile() {
        const user = JSON.parse(localStorage.getItem('user'))['user'];
        if (user.role.name == 'chef') {
          this.$router.push({name: 'chef-profile'})
        } else if (user.role.name == 'buyer') {
          this.$router.push({name: 'buyer-profile'})
        } else {
          this.logoutUser();
        }
      },
      logoutUser(all=false) {
          const logout_url = all ? 'users/logout/all/' : 'users/logout/me/';
          Axios.post(logout_url).then(data => {
            localStorage.removeItem('user');
            delete Axios.defaults.headers.common['Authorization'];
            logInNotifyService.sendMessage(false);
            this.$router.push({name: 'home'});
            this.showMap = false;
          }, error => {
            console.log(error);
          });
      }
    },
    mounted() {
      const self = this
      this.user_observer = logInNotifyService.getMessage().subscribe(message => {
            if (message["login"]) {
                // add message to local state if not empty
                this.user_logged_in = message['login'];
                if (this.user_logged_in) {
                  const user = JSON.parse(localStorage.getItem('user'));
                  const user_token = user['token'];
                  console.log(user_token);
                  Axios.defaults.baseURL = config.apiUrl;
                  Axios.defaults.headers.common['Authorization'] = `Token ${user_token}`;

                  if(user.user.role.name == 'chef') {
                    self.showMap = true
                  } 
                }
            } else {
                // clear messages when empty message received
                this.user_logged_in = false;
            }
        });
      // if (!this.user_logged_in) {
        if (localStorage.getItem('user')) {
          logInNotifyService.sendMessage(true);
        }
      // }
    },
    beforeDestroy () {
        // unsubscribe to ensure no memory leaks
        if (this.user_observer) {
        this.user_observer.unsubscribe();
        }
    }
}
</script>
