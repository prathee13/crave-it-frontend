<template>
    <div> 
        <b-form @submit="signUp" @reset="onReset">
            <b-form-group id="Name" label="Name:" label-for="input-1">
            <b-form-input
                id="name"
                v-model="form.name"
                type="name"
                required
                placeholder="Enter name"
            >
            </b-form-input>
            </b-form-group>
            <b-form-group id="email" label="Email:" label-for="input-2">
            <b-form-input
                id="email"
                v-model="form.email"
                required
                placeholder="Enter email"
            >
            </b-form-input>
            </b-form-group>
            <b-form-group id="password" label="Password:" label-for="input-3">
            <b-form-input 
                type="password"
                v-model="form.password"
                id="input-2" 
                placeholder="Enter password"
                required
            >
            </b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4">
               <b-form-checkbox-group v-model="form.role" id="checkboxes-4">
                  <b-form-checkbox value="2">Do you want to be a chef?</b-form-checkbox>
               </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit"  variant="primary">Register</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
          <router-link to="/signin">Already a user? Sign in.</router-link>
    </div>
</template>
<script>


export default {
    data(){
        return {
            form: {
            name: '',
            email: '',
            password: '',
            role: [],
            error: {
                message: ''
            }
         }
        }
    },
    methods: {
        signUp() {
           evt.preventDefault()
        alert(JSON.stringify(this.form))
        },
        onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.role = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>