<template>
  <b-card-group deck>
    <!-- <b-card
      header="Personal Details"
      header-tag="header"
      footer=""
      footer-tag="footer"
    >

    </b-card> -->

    <b-card
      header="Documents"
      header-tag="header"
      footer=""
      footer-tag="footer"
    >
    <chef-documents />
    </b-card>

  </b-card-group>
</template>

<script>
import ChefDocuments from './ChefDocuments';
// import UserCredentials from '../components/common/userCredentials';

export default {
  components: {
    'chef-documents': ChefDocuments,
    // 'user-creds': UserCredentials
  },
  data() {
    return {
       files: [],
       documents: [], 
       form: {
           name: '',
           email: '',
           password: '',
        },  
    };
  },
  name: "chef-profile"
};
</script>