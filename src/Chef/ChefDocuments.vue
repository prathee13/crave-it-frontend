<template>
  <div>
    <div>
    <h3> Upload Documents</h3>
    <!-- <b-form @submit=""> -->
      <div>
      <b-form-file
        v-model="files"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        multiple
      ></b-form-file>
      </div>
      <div class="mt-3" style="width: 100%; display:flex; justify-content: center">
      <b-button @click="uploadDocuments()" variant="primary">Register</b-button>&nbsp;
      <b-button type="reset" @click="this.files = []" variant="danger">Reset</b-button>
      </div>
    <!-- </b-form> -->
    </div>
    <!-- the documents table -->
    
    <div class="mt-5">
    <h3>Documents</h3>
    <b-table
      ref="selectableTable"
      selectable
      :select-mode="selectMode"
      :items="items"
      :fields="fields"
      @row-selected="onRowSelected"
      responsive="sm"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template v-slot:cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
      
      <template v-slot:cell(actions)="row">
        <b-button size="sm" @click="viewFile(row.item, row.index, $event.target)" class="mr-1">
          view
        </b-button>
      </template>

    </b-table>
    <div style="width: 100%; display:flex; justify-content: center" v-if="selected.length > 0">
      <b-button size="sm" @click="clearSelected">Clear selected</b-button> &nbsp;
      <b-button size="sm" @click="deleteSelected">Delete selected</b-button>
    </div>
  </div>
  </div>
</template>

<script>
import Axios from 'axios';
import config from '../config';

export default {
  data() {
    return {
      files: [],
      documents: [], 
        fields: ['selected', 'id', 'name', 'actions'],
        items: [],
        selectMode: 'multi',
        selected: [],
    };
  },
  mounted() {
      this.getChefDocuments()
  },
  methods: {
      onRowSelected(items) {
        this.selected = items
      },
      deleteSelected() {
        Axios.post('/profile/chef/docs/', {
            'files': this.selected.map(x => x.id)
        }).then(success => {this.getChefDocuments()}, error => console.log(error));
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      },
      getChefDocuments() {
          Axios.get('profile/chef/docs/').then(response => {
              this.items = response.data['files'] ? response.data['files'] : [];
          }, error => console.log(error));
      }, 
      uploadDocuments(evt) {
          let formData = new FormData();
          formData.method = 'post';
          for (let i=0; i< this.files.length; i++) {
            formData.append('files', this.files[i])
          }
          Axios.post('profile/chef/docs/upload/', formData, {headers: {
                'Content-Type': 'multipart/form-data; boundary=--------------------------329066800504698048817510',
            }
            }).then(response => {
                this.getChefDocuments();
          }, error => console.log(error))
      }, 
      viewFile(item, index, event) {
          window.open(config.baseUrl + item.url)
      }
    },
  name: "chef-documents"
};
</script>