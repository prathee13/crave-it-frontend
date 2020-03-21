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
import Signup from '../components/partials/Signup.vue'
import Signin from '../components/partials/Signin.vue'
import Axios from 'axios';
import config from '../config';

export default {
    name: 'home',
    components: {
        Signup, Signin
    }, 
    mounted() {
      Axios.defaults.baseURL = config.apiUrl;
      const getUniqueCategories = (types) => {
        const result = [];
        const map = new Map();
        for (const item of types) {
            if(!map.has(item.category.id)){
                map.set(item.category.id, true);    // set any value to Map
                result.push({
                    id: item.category.id,
                    name: item.category.name
                });
            }
        }
        return result;
      }
      Axios.get('dish/types/').then(success => {
        const response = success.data['types'];
        let categories = getUniqueCategories(response);
        console.log(categories);
        localStorage.setItem('category',  JSON.stringify(categories));
        localStorage.setItem('types', JSON.stringify(response));
      }, error => {alert("Problem with Server Refresh The Site And Try Again")});      
    }
}
</script>