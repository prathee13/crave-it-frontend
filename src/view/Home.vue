<template>
    <div id="app">
        <div class="jumbotron text-center">
          <h1>Crave-It</h1>
          <p>A platform to order home-food away from home.</p>
          <h2 class="text-center">Get Started!</h2>
        </div>
        <!-- <b-card-header header-tag="nav"> -->
     <!-- <b-nav tabs align="center">
      <b-nav-item href="#signup">Sign Up</b-nav-item>
      <b-nav-item href="#signin">Sign In</b-nav-item>
    </b-nav> -->
    <!-- </b-card-header> -->

    <div>
      <b-card no-body>
        <b-tabs card align="center">
          
          <b-tab title="Sign Up" active>
            <b-card-text><Signup/></b-card-text>
          </b-tab>
          <b-tab title="Sign In">
            <b-card-text><Signin/></b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
        
    </div>
</template>

<script>

$(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
});

import Signup from '../components/partials/Signup.vue'
import Signin from '../components/partials/Signin.vue'

export default {
    name: 'home',
    components: {
        Signup, Signin
    }
}
</script>