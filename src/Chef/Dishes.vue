<template>
  <div>
  <b-card no-body>
    <b-tabs pills card>
      <b-tab title="Add Dish" active>
      <add-dish />  
      </b-tab>
      <b-tab title="My Dishes">
          <my-dishes />
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
import AddDish from './AddDish';
import MyDishes from './MyDihes';

export default {
  components: {
      'add-dish': AddDish,
      'my-dishes': MyDishes
  },  
  data() {
    return {
        form: {
        address: "",
        phone_number: "",
        },
        chef: null
    };
  },
  mounted() {
      
  },
  methods: {
      onRowSelected(items) {
        this.selected = items
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      },
      selectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.selectRow(2)
      },
      unselectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.unselectRow(2)
      }
    },
  name: "chef-dishes"
};
</script>