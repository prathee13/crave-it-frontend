<template>
    <div id="app">
        <div class="jumbotron text-center">
          <h1>Crave-It</h1>
          <p>A platform to order home-food away from home.</p>
        </div>
        <h2 class="text-center">Get Started!</h2>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/signup">Sign up </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/signin">Sign in </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Signup from '../components/partials/Signup.vue'
import Signin from '../components/partials/Signin.vue'

export default {
    name: 'home',
    components: {
        Signup, Signin
    }
}
</script>