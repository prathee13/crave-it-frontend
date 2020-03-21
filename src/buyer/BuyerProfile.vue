<template>
  <div>
    <br />
    <b-container>
      <b-row>
        <b-col>
          <b-card
            header="Credentials"
            header-tag="header"
            footer=" "
            footer-tag="footer"
          >
            <user-credentials />
          </b-card>
        </b-col>
        <b-col>
          <b-card
            header="Cards"
            header-tag="header"
            footer=" "
            footer-tag="footer"
          >
          <buyer-cards></buyer-cards>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import userCredentials from '../components/common/userCredentials';
import BuyerCards from './BuyerCards'

export default {
    components: {
        'user-credentials': userCredentials,
        'buyer-cards': BuyerCards
    },
    name:'buyer-brofile'
};
</script>