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
import catTypeComponentService from '../../_service/cattype.service'

export default {
  name: "cat-type-select",
  data() {
    return {
      type_disable: true,
      all_types: JSON.parse(localStorage.getItem('types')),
      category: JSON.parse(localStorage.getItem('category')),
      types: [],
      selected_category: undefined,
      selected_type: undefined,
      message_observer: null,
    };
  },
  created() {
    const self = this
    this.message_observer = catTypeComponentService.getMessage().subscribe(message => {
      if (message.reset) {
        self.selected_category = ''
        self.selected_type = ''
        self.type_disable = true
        self.types = []
      } else if (message.type) {
        const type = self.all_types.filter(x => x.name == message.type)[0]
        const cat = self.category.filter(x => x.id == type.category.id)
        self.$set(self.$data, 'selected_category', cat[0].id)
        self.categoryChanged()
        self.selected_type = type.id
        self.typeChanged(self.selected_type)
      }
    })
  },
  beforeDestroy() {
    if (this.message_observer) {
      this.message_observer.unsubscribe()
    }
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