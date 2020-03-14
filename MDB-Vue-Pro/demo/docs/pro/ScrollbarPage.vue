<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Scrollbar</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-container class="mt-5 d-flex justify-content-center">
      <mdb-scrollbar class="img-wrapper" :wheelSpeed="0.3">
        <div class="img">
        </div>
      </mdb-scrollbar>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbScrollbar, mdbRow, mdbIcon } from 'mdbvue';

export default {
  name: 'ScrollbarPage',
  components: {
    mdbContainer,
    mdbScrollbar,
    mdbRow,
    mdbIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-wrapper {
  position: relative;
  width: 480px;
  height: 320px;
  margin: auto;
}

.img-wrapper .img {
  position: relative;
  background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(33).jpg');
  background-size: cover;
  width: 1280px;
  height: 720px;
}
</style>
