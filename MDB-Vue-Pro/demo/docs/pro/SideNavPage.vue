<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Sidenav</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/navigation/sidenav/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container class="green-text">
      <div :style="{height: '45%'}"></div>
      <div class="text-center icon-div">
        <mdb-icon icon="bars" size="5x" @click.native="toggleSideNav('A')"/></div>
      <div class="text-center icon-div">
        <mdb-icon icon="bars" size="5x" @click.native="toggleSideNav('B')"/></div>
      <div class="deep-purple-skin">
        <mdb-side-nav logo="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" sideNavClass="sn-bg-4" mask="strong" :OpenedFromOutside.sync="toggleA" hidden waves>
          <ul>
            <li>
              <ul class="social">
              <li><a href="#" class="icons-sm fb-ic"><mdb-icon icon="facebook" /></a></li>
              <li><a href="#" class="icons-sm pin-ic"><mdb-icon icon="pinterest" /></a></li>
              <li><a href="#" class="icons-sm gplus-ic"><mdb-icon icon="google-plus" /></a></li>
              <li><a href="#" class="icons-sm tw-ic"><mdb-icon icon="twitter" /></a></li>
              </ul>
            </li>
            <li>
              <form class="search-form" role="search">
                <div class="form-group md-form mt-0 pt-1 ripple-parent" @click="wave">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
              </form>
            </li>
            <li>
              <mdb-side-nav-nav>
                <mdb-side-nav-cat name="Submit blog" icon="chevron-right">
                  <mdb-side-nav-item href="#">Submit listing</mdb-side-nav-item>
                  <mdb-side-nav-item href="#">Registration form</mdb-side-nav-item>
                </mdb-side-nav-cat>
                <mdb-side-nav-cat name="Instruction" icon="hand-pointer-o">
                  <mdb-side-nav-item href="#">For bloggers</mdb-side-nav-item>
                  <mdb-side-nav-item href="#">For authors</mdb-side-nav-item>
                </mdb-side-nav-cat>
                <mdb-side-nav-cat name="About" icon="eye">
                  <mdb-side-nav-item href="#">Introduction</mdb-side-nav-item>
                  <mdb-side-nav-item href="#">Monthly meetings</mdb-side-nav-item>
                </mdb-side-nav-cat>
                <mdb-side-nav-cat name="Contact me" icon="envelope-o">
                  <mdb-side-nav-item href="#">FAQ</mdb-side-nav-item>
                  <mdb-side-nav-item href="#">Write a message</mdb-side-nav-item>
                </mdb-side-nav-cat>
                <mdb-side-nav-item header icon="envelope" href="#">Write a message</mdb-side-nav-item>
                <mdb-side-nav-item header icon="user" href="#" @click.native="toggleSideNav('A')">Profile</mdb-side-nav-item>
                <mdb-side-nav-item header icon="cubes" href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVuePro" target="_blank">Official docs</mdb-side-nav-item>
              </mdb-side-nav-nav>
            </li>
          </ul>
        </mdb-side-nav>
      </div>
      <div class="indigo-skin">
        <mdb-side-nav logo="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" sideNavClass="sn-bg-4" mask="strong" :OpenedFromOutside.sync="toggleB" hidden waves right>
          <ul>
            <li>
              <ul class="social">
                <li><a href="#" class="icons-sm fb-ic"><mdb-icon icon="facebook" /></a></li>
                <li><a href="#" class="icons-sm pin-ic"><mdb-icon icon="pinterest" /></a></li>
                <li><a href="#" class="icons-sm gplus-ic"><mdb-icon icon="google-plus" /></a></li>
                <li><a href="#" class="icons-sm tw-ic"><mdb-icon icon="twitter" /></a></li>
              </ul>
            </li>
            <li>
              <mdb-side-nav-nav>
                <mdb-side-nav-cat name="Submit blog" icon="chevron-right">
                  <mdb-side-nav-item href="#">Submit listing</mdb-side-nav-item>
                  <mdb-side-nav-item href="#">Registration form</mdb-side-nav-item>
                </mdb-side-nav-cat>
                <mdb-side-nav-cat name="Instruction" icon="hand-pointer-o">
                  <mdb-side-nav-item href="#">For bloggers</mdb-side-nav-item>
                  <mdb-side-nav-item href="#">For authors</mdb-side-nav-item>
                </mdb-side-nav-cat>
                <mdb-side-nav-cat name="About" icon="eye">
                  <mdb-side-nav-item href="#">Introduction</mdb-side-nav-item>
                  <mdb-side-nav-item href="#">Monthly meetings</mdb-side-nav-item>
                </mdb-side-nav-cat>
                <mdb-side-nav-cat name="Contact me" icon="envelope-o">
                  <mdb-side-nav-item href="#">FAQ</mdb-side-nav-item>
                  <mdb-side-nav-item href="#">Write a message</mdb-side-nav-item>
                </mdb-side-nav-cat>
                <mdb-side-nav-item header icon="envelope" href="#">Write a message</mdb-side-nav-item>
                <mdb-side-nav-item header icon="user" href="#" @click.native="toggleSideNav('B')">Profile</mdb-side-nav-item>
                <mdb-side-nav-item header icon="cubes" href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVuePro" target="_blank">Official docs</mdb-side-nav-item>
              </mdb-side-nav-nav>
            </li>
          </ul>
        </mdb-side-nav>
      </div>
    </mdb-container>
  </mdb-container>
</template>

<script>
  import { mdbSideNav, mdbSideNavNav, mdbSideNavCat, mdbSideNavItem, mdbContainer, mdbRow, mdbIcon, waves} from 'mdbvue';

  export default {
    name: 'SideNavPage',
    components: {
      mdbSideNav,
      mdbSideNavNav,
      mdbSideNavCat,
      mdbSideNavItem,
      mdbContainer,
      mdbRow,
      mdbIcon
    },
    data(){
      return {
        toggleA: false,
        toggleB: false,
        waves: true
      };
    },
    methods: {
      toggleSideNav(sn) {
        this[`toggle${sn}`]=!this[`toggle${sn}`];
      }
    },
    mixins: [waves]
  };
</script>

<style scoped>
  .container {
    height: 750px;
  }
  .icon-div {
    width: 49%;
    display: inline-block;
  }
  .icon-div .fa {
    cursor: pointer;
  }
</style>
