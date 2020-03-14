<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Multi-Item Carousel</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/carousel/#multi-item/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-container class="mt-5">
      <mdb-carousel :interval="8000" showControls showIndicators multi slide>
        <mdb-carousel-item>
          <mdb-row>
            <mdb-col md="4">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <mdb-row>
            <mdb-col md="4">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <mdb-row>
            <mdb-col md="4">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-carousel-item>
      </mdb-carousel>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbContainer, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbIcon } from 'mdbvue';

export default {
  name: 'CarouselPage',
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbIcon
  }
};
</script>

<style scoped>
</style>
