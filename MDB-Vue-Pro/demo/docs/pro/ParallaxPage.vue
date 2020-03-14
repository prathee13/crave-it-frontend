<template>
  <div class="wrapper">
    <mdb-parallax imgUrl="https://www.newsweek.pl/g/crop/1200/645/newsweek/635629652106028263.jpg" h="400px" style="margin-top: 500px"/>
    <h1>heheheh</h1>
  </div>
</template>

<script>
import { mdbParallax } from 'mdbvue';
export default {
  name: 'ParallaxPage',
  components: {
    mdbParallax
  }
};
</script>

<style>
.wrapper {
  height: 1000px;
}
</style>
