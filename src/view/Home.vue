<template>
    <div>
       <b-jumbotron style="margin-bottom: 0px !important" class="text-center" header="Crave-It" lead="A platform to order home-food away from home.">
          <h2 class="text-center">Get Started!</h2>
        <div style="display: flex; justify-content: center;">
          <!-- <b-container>
            <b-row>
               -->
            <b-card style="max-width:400px; width:100% !important" no-body>
              <b-tabs card fill>
                <b-tab title="Sign Up" active>
                  <b-card-text style="justify-content:left;"><Signup/></b-card-text>
                </b-tab>
                <b-tab title="Sign In">
                  <b-card-text><Signin/></b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          <!-- </b-row>
          </b-container> -->
          </div>
          </b-jumbotron> 
        </div>
</template>

<script>

// $(document).ready(function(){
//   $(".nav-tabs a").click(function(){
//     $(this).tab('show');
//   });
// });

import Signup from '../components/partials/Signup.vue'
import Signin from '../components/partials/Signin.vue'

export default {
    name: 'home',
    components: {
        Signup, Signin
    }
}
</script>