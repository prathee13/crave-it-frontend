<template>
    <div>
        <br>
        <router-view></router-view>
        <!-- <b-card>
         <b-card-title> Select your preferences: </b-card-title>
          <b-form @submit="next">
            <b-form-group id="location" label="Select location" label-for="location">
                <b-form-select v-model="selectedLocation" :options="optionLocation"></b-form-select>
            </b-form-group>

            <b-form-group id="cusine" label="Select cuisine" label-for="cuisine">
                <b-form-select v-model="selectedCuisine" :options="optionCuisine"></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
        </b-card> -->
        <!-- <cat-type /> -->
        <br>
    </div>
</template>

<script>
import Search from './Search.vue'
import CategoryTypeSelect from '../components/common/CategoryTypeSelect';

export default {
    name: 'Buyer',
    components: {
        'category' : Search,
        'cat-type': CategoryTypeSelect
},
    // components : {
    //     'food-card': foodCard
    // },
    data() {
        return {
            isDisabled: true,
            selectedLocation: null,
            optionLocation: [
                {value: 'a', text: 'Regina, SK'}
            ],
            selectedCuisine: null,
            optionCuisine: [
                {value: 'South Indian', text: 'South Indian'},
                {value: 'Gujarati', text: 'Gujarati'},
                {value: 'Punjabi', text: 'Punjabi'},
                {value: 'Italian', text: 'Italian'}
            ],
        }
    },
    methods: {
        next() {
            this.$router.push("/search?cuisine="+this.selectedCuisine);
        }
    }
}
</script>