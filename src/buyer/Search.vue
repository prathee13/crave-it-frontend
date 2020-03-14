<template>
    <div id="app">
        <title> This is Search Component </title>
        <h4> Here's what's offered in Regina, Saskatchewan... </h4>
        <b-card-group deck>
    <food-card v-for="(item, index) in searchData" :key="index" :item="item"></food-card>
    <router-view></router-view>
    </b-card-group>
    
    </div>
</template>

<script>

import foodCard from './foodCard.vue'
import data from './data.js'

export default {
    name: 'Search',
    components: {
        'food-card': foodCard
    },
    data() {
        return {
            data: [
                {
        name: 'Idli',
        logo: 'https://holycowvegan.net/wp-content/uploads/2019/04/idli-recipe-2.jpg',
        cuisine: 'South-Indian'
    },
    {
        name: 'Dhokla',
        logo: 'https://punampaul.com/wp-content/uploads/2018/05/gujarati-dhokla-recipe.jpg',
        cuisine: 'Gujarati'
    },
    {
        name: 'Paratha',
        logo: 'https://www.manjulaskitchen.com/blog/wp-content/uploads/aloo_palak_paratha.jpg',
        cuisine: 'Punjabi'
    },
    {
        name: 'Pasta and Meatballs',
        logo: 'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-NIGMEATBALLS2/05COOKING-NIGMEATBALLS2-articleLarge.jpg',
        cuisine: 'Italian'
    }],
            search: '',
            searchData: [],
        }
        },
        mounted() {
        this.searchData = JSON.parse(JSON.stringify(data));
    },
    methods: {
        filteredData: function() {
           if (this.search == '') {
               this.searchData = JSON.parse(JSON.stringify(data));
           } else {
           this.searchData = this.searchData.filter(data => data.name.toLowerCase().match(this.search.toLowerCase()))
            }
            }
        }
    
    }
</script>