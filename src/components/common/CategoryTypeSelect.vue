<template>
  <b-card>
    <b-form-group label="Select Category" label-for="category">
      <b-form-select 
      id="category" 
      @change="categoryChanged" 
      v-model="selected_category" 
      :options="category"
      value-field="id"
      text-field="name"
      >
      </b-form-select>
    </b-form-group>

    <b-form-group  label="select Dish Type" label-for="cuisine">
      <b-form-select :disabled="type_disable"
       id="cuisuine" 
       @change="typeChanged" 
       v-model="selected_type" 
       :options="types"
       value-field="id"
      text-field="name"
       ></b-form-select>
    </b-form-group>
  </b-card>
</template>
<script>
export default {
  name: "cat-type-select",
  data() {
    return {
      type_disable: true,
      all_types: JSON.parse(localStorage.getItem('types')),
      category: JSON.parse(localStorage.getItem('category')),
      types: [],
      selected_category: undefined,
      selected_type: undefined
    };
  },
  methods: {
      categoryChanged() {
          this.$set(this.$data, 'types', []);
          const a = this.all_types.forEach(x => {
              if(x.category.id == this.selected_category) {
                  this.$set(this.types, this.types.length, {'id': x.id, 'name': x.name})
              }})

          this.type_disable = false;
      },
      typeChanged(val) {
        //   this.$set(this.selected_type, val);
          this.$emit('type-changed', val);
      }
  }
};
</script>