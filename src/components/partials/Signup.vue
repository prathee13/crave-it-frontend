<template>
    <div class="form-inline">
        <div class="form-group">
            <label> User Name: </label>
            <input type="text" placeholder="name" class="form-control">
            <label> Email: </label>
            <input type="text" placeholder="email" class="form-control">
            <br>
            <label> Password: </label>
            <input type="password" placeholder="password" class="form-control">
            <input type="checkbox" value="role" class="form-control"/>
            <label>Do you wish to register as a chef?</label>
            <button class="btn-sm btn-primary" @click="signUp">Register</button>
        </div>
        <br>
        <br>
          <router-link to="/signin">Already a user? Sign in.</router-link>
        <br>
    </div>
</template>
<script>


export default {
    data(){
        return {
            name: '',
            email: '',
            password: '',
            role: '',
            error: {
                message: ''
            }
        }
    },
    methods: {
        signUp() {
           
        }
    }
}
</script>