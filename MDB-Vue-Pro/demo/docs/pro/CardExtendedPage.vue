<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Extended Cards</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/cards/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <h4 class="mb-4">Promoting card</h4>
    <mdb-card class="promoting-card" style="width: 22rem">
      <mdb-card-body class="d-flex flex-row">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" class="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />
        <div>
          <mdb-card-title class="font-weight-bold mb-2">New spicy meals</mdb-card-title>
          <mdb-card-text><mdb-icon icon="clock-o" class="pr-2" />07/24/2018</mdb-card-text>
        </div>
      </mdb-card-body>
      <mdb-view>
        <mdb-card-image top class="rounded-0" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg" alt="Card image cap"/>
        <a>
          <mdb-mask overlay="white-slight" waves />
        </a>
      </mdb-view>
      <mdb-card-body>
        <div class="collapse-content">
          <mdb-card-text :class="['collapse', show1 && 'show']" ref="collapse1" :style="'height:' + height1">Recently, we added several exotic new dishes to the menu of our restaurant. They come from countries such as Mexico, Argentina, and Spain. Come to us, have a delicious wine and enjoy the juicy meals from around the world.</mdb-card-text>
          <mdb-btn @click.native="toggle1" tag="a" flat darkWaves :class="['red-text p-1 my-1 mr-0', !show1 && 'collapsed']"></mdb-btn>
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">Share this post</div>
            <mdb-icon slot="reference" icon="share-alt" class="text-muted float-right p-1 my-1"/>
          </mdb-tooltip>
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">I like it</div>
            <mdb-icon slot="reference" icon="heart" class="text-muted float-right p-1 my-1 mr-3"/>
          </mdb-tooltip>
        </div>
      </mdb-card-body>
    </mdb-card>
    <hr class="my-5" />
    <h4 class="mb-4">Weather card</h4>
    <mdb-card class="weather-card" style="width: 22rem">
      <mdb-card-body class="pb-3">
        <mdb-card-title class="font-weight-bold">Warsaw</mdb-card-title>
        <mdb-card-text>Mon, 12:30 PM, Mostly Sunny</mdb-card-text>
        <div class="d-flex justify-content-between">
          <p class="display-1 degree">23</p>
          <mdb-icon icon="sun-o" size="5x" class="pt-3 amber-text" />
        </div>
        <div class="d-flex justify-content-between mb-4">
          <p><mdb-icon icon="tint" size="lg" class="text-info pr-2"/>3% Precipitation</p>
          <p><mdb-icon icon="leaf" size="lg" class="grey-text pr-2"/>21 hm/h Winds</p>
        </div>
        <mdb-progress color="dark" :value="40" />
        <ul class="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
          <li class="pl-4">8AM</li>
          <li>11AM</li>
          <li>2PM</li>
          <li>5PM</li>
          <li class="pr-4">8PM</li>
        </ul>
        <div class="collapse-content">

          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="show2" class="collapse-item">
              <mdb-tbl borderless sm class="mb-0">
                <tbody>
                  <tr>
                    <td class="font-weight-normal align-middle">Tuesday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">24&deg;<span class="text-muted">/12&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="sun-o" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Wednesday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">19&deg;<span class="text-muted">/10&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="cloud" size="lg" class="text-info" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Thursday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">23&deg;<span class="text-muted">/15&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="sun-o" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Friday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">26&deg;<span class="text-muted">/19&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="sun-o" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Saturday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">20&deg;<span class="text-muted">/16&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="cloud" size="lg" class="text-info" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Sunday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">22&deg;<span class="text-muted">/13&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="sun-o" size="lg" class="amber-text" />
                    </td>
                  </tr>
                </tbody>
              </mdb-tbl>
            </div>
          </transition>
          <hr />
          <mdb-btn tag="a" @click.native="show2 = !show2" :class="['p-1 my-1 mr-0 deep-purple-text', !show2 && 'collapsed']" flat darkWaves aria-expanded="false" aria-controls="collapseExample" />
        </div>
      </mdb-card-body>
    </mdb-card>
    <hr class="my-5" />
    <h4 class="mb-4">Booking card</h4>
    <mdb-card class="booking-card" style="width: 22rem">
      <mdb-view>
        <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" alt="Card image cap" />
        <a>
          <mdb-mask overlay="white-slight" waves />
        </a>
      </mdb-view>
      <mdb-card-body>
        <mdb-card-title class="font-weight-bold"><a>La Sirena restaurant</a></mdb-card-title>
        <ul class="list-unstyled list-inline rating mb-0">
          <li class="list-inline-item mr-0"><mdb-icon icon="star" class="amber-text" /></li>
          <li class="list-inline-item mr-0"><mdb-icon icon="star" class="amber-text" /></li>
          <li class="list-inline-item mr-0"><mdb-icon icon="star" class="amber-text" /></li>
          <li class="list-inline-item mr-0"><mdb-icon icon="star" class="amber-text" /></li>
          <li class="list-inline-item"><mdb-icon icon="star-half-o" class="amber-text" /></li>
          <li class="list-inline-item"><p class="text-muted">4.5 (413)</p></li>
        </ul>
        <p class="mb-2">$ • American, Restaurant</p>
        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
        <hr class="my-4">
        <p class="lead"><strong>Tonight's availability</strong></p>
        <ul class="list-unstyled list-inline d-flex justify-content-between mb-0">
          <li class="list-inline-item mr-0">
            <mdb-chip waves class="mr-0">5:30PM</mdb-chip>
          </li>
          <li class="list-inline-item mr-0">
            <mdb-chip waves class="deep-purple white-text mr-0">7:30PM</mdb-chip>
          </li>
          <li class="list-inline-item mr-0">
            <mdb-chip waves class="mr-0">8:00PM</mdb-chip>
          </li>
          <li class="list-inline-item mr-0">
            <mdb-chip waves class="mr-0">9:00PM</mdb-chip>
          </li>
        </ul>
        <mdb-btn tag="a" flat darkWaves class="deep-purple-text p-1 mx-0 mb-0">Button</mdb-btn>
      </mdb-card-body>
    </mdb-card>
    <hr class="my-5" />
    <h4 class="mb-4">Gradient cards</h4>
    <mdb-row>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient1 && 'show']" @click.native="gradient1 = true" v-on-clickaway="away1">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 blue-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient1">
                    <h3 class="card-title font-weight-bold">Today's sales</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient1">
                    <mdb-icon icon="money" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient1">
                <p class="text-uppercase text-muted">Today's sales</p>
                <h4 class="font-weight-bold">2000$</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient1">
              <mdb-progress color="primary" :value="25" />
              <p class="text-muted">Better than last week (25%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient2 && 'show']" @click.native="gradient2 = true" v-on-clickaway="away2">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 purple-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient2">
                    <h3 class="card-title font-weight-bold">Subscriptions</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient2">
                    <mdb-icon icon="line-chart" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient2">
                <p class="text-uppercase text-muted">Subscriptions</p>
                <h4 class="font-weight-bold">200</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient2">
              <mdb-progress color="purple" :value="25" />
              <p class="text-muted">Worse than last week (25%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient3 && 'show']" @click.native="gradient3 = true" v-on-clickaway="away3">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 peach-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient3">
                    <h3 class="card-title font-weight-bold">Traffic</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient3">
                    <mdb-icon icon="pie-chart" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient3">
                <p class="text-uppercase text-muted">Traffic</p>
                <h4 class="font-weight-bold">20000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient3">
              <mdb-progress color="amber" :value="75" />
              <p class="text-muted">Worse than last week (75%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient4 && 'show']" @click.native="gradient4 = true" v-on-clickaway="away4">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 aqua-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient4">
                    <h3 class="card-title font-weight-bold">Organic traffic</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient4">
                    <mdb-icon icon="bar-chart" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient4">
                <p class="text-uppercase text-muted">Organic traffic</p>
                <h4 class="font-weight-bold">2000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient4">
              <mdb-progress color="cyan" :value="50" />
              <p class="text-muted">Better than last week (50%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <hr class="my-5" />
    <h4 class="mb-4">Chart card</h4>
    <mdb-card class="chart-card" style="width: 22rem">
      <mdb-card-body class="pb-0">
        <mdb-card-title class="font-weight-bold">Alie Corporation</mdb-card-title>
        <p class="card-text mb-4">NYSE: AZHC  •  Oct 16, 1:45PM</p>
        <div class="d-flex justify-content-between">
          <p class="display-4 align-self-end">887.32</p>
          <p class="align-self-end pb-2">887.02 (.03%)</p>
        </div>
      </mdb-card-body>
      <div class="classic-tabs">
        <mdb-tab class="tabs-white nav-fill" justify>
          <mdb-tab-item class="ml-0" :active="tab==0" @click.native.prevent="tab=0">Profile</mdb-tab-item>
          <mdb-tab-item :active="tab==1" @click.native.prevent="tab=1">Follow</mdb-tab-item>
          <mdb-tab-item :active="tab==2" @click.native.prevent="tab=2">Contact</mdb-tab-item>
        </mdb-tab>
        <mdb-tab-content>
          <mdb-tab-pane class="fade" key="show1" v-if="tab==0">
            <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="300"/>
          </mdb-tab-pane>
          <mdb-tab-pane class="fade" key="show2" v-if="tab==1">
            <p align="justify" class="font-small text-muted mx-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
            <p align="justify" class="font-small text-muted mx-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
          </mdb-tab-pane>
          <mdb-tab-pane class="fade" key="show3" v-if="tab==2">
            <img class="img-fluid z-depth-1 rounded mb-3" alt="sample image" src="https://mdbootstrap.com/img/Photos/Others/intro1.jpg">
            <p align="justify" class="font-small text-muted mx-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima at ipsum sit amet.</p>
          </mdb-tab-pane>
        </mdb-tab-content>
      </div>
    </mdb-card>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbIcon, mdbView, mdbMask, mdbBtn, mdbTooltip, mdbProgress, mdbTbl, mdbChip, mdbTab, mdbTabItem, mdbTabContent, mdbTabPane, mdbLineChart } from 'mdbvue';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'CardProPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbTooltip,
    mdbProgress,
    mdbTbl,
    mdbChip,
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane,
    mdbLineChart
  },
  mounted() {
    this.fullHeight1 = this.$refs.collapse1.$el.scrollHeight + 'px';
    this.fullHeight2 = '100%';
  },
  data() {
    return {
      show1: false,
      show2: false,
      height1: '2.65rem',
      gradient1: false,
      gradient2: false,
      gradient3: false,
      gradient4: false,
      tab: 0,
      lineChartData: {
        labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,0.4)',
            borderColor: '#673ab7',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            pointBorderColor: '#673ab7',
            pointBorderWidth: 1,
            data: [885, 884, 887, 883, 888, 889, 888]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }]
        }
      }
    };
  },
  methods: {
    toggle1() {
      this.show1 = !this.show1;
      this.show1 ? this.height1 = this.fullHeight1 : this.height1 = '2.65rem';
    },
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    leave(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    away1() {
      this.gradient1 = false;
    },
    away2() {
      this.gradient2 = false;
    },
    away3() {
      this.gradient3 = false;
    },
    away4() {
      this.gradient4 = false;
    }
  },
  mixins: [clickaway]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  font-weight: bold;
}
.collapse {
  transition: height 0.3s;  
}
.collapse-item {
  transition: all 0.5s;  
}
.gradient-card {
  transition: 0.5s ease-in-out; 
}
.gradient-card.show {
  margin-top: 20px;
}
.gradient-card .card-image {
  display: inline-block;
  width: 100%;
  transition: 0.5s ease-in-out; 
}
.gradient-card.show .card-image {
  width: 112px;
  height: 112px;
  margin-left: 20px;
  margin-top: -20px;
}
.gradient-card .card-body {
  padding: 0 1.25rem;
}
.collapse-content .fa.fa-heart:hover {
  color: #f44336 !important;
}
.collapse-content .fa.fa-share-alt:hover {
  color: #0d47a1 !important;
}
.card.weather-card .collapse-content a.collapsed:after {
  content: 'Expand'; }

.card.weather-card .collapse-content a:not(.collapsed):after {
  content: 'Collapse'; }
</style>

<style>
.card.chart-card .classic-tabs .nav.tabs-white li a {
  color: #757575;
  font-weight: 500;
}
.card.chart-card .classic-tabs .nav.tabs-white li a.active {
  color: #673ab7;
}
</style>
