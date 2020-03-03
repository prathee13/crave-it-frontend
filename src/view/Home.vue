<template>
    <div id="app">
        <div class="jumbotron text-center">
          <h1>Crave-It</h1>
          <p>A platform to order home-food away from home.</p>
        </div>
        <h2 class="text-center">Get Started!</h2>
           <Signup />
           <router-view></router-view>
    </div>
</template>

<script>
import Signup from '../components/partials/Signup.vue'
export default {
    name: 'home',
    components: {
        Signup
    }
}
</script>