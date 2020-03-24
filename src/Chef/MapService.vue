<template>
  <div>
      <br>
    <div style="width: 100%; text-align: center">
      <h2>Look for live updates on buyer locations</h2>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%; height: 400px"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :label="m.dish_name"
        :title="m.username"
        @click="toggleInfo(m, index)"
      ></gmap-marker>
      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <div v-html="infoContent"></div>
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
import LiveLocationService from '../_service/location.service';

export default {
  name: "map-view",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 50.4500809	, lng: -104.6177979 },
      markers: [],
      places: [],
      currentPlace: null,
      location_observer: null,
     user: JSON.parse(localStorage.getItem('user'))['user'],
     infoContent: '',
        infoWindowPos: {
          lat: 0,
          lng: 0
        },
        infoWinOpen: false,
        currentMidx: null,
        fullscreenControl:false,
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },  
        MarkerOptions:{
          zIndex:999999,
          opacity:0.2

        },
    
    };
  },

  mounted() {
    LiveLocationService.pusherConnect(`user-${this.user.id}`)  
    this.location_observer = LiveLocationService.getMessage().subscribe(message => {
        if (message) {
            const element = this.markers.filter(x => x.user_id === message.user_id)[0]
            this.removeMarker(element)
            if (!message.last) {
            this.addMarker(message)
            }
            console.log('--------------------')
            console.log(this.markers.length)
            // this.$set(this.markers, this.markers.length, message)
        }
    })
    // this.geolocate();
  },
   beforeDestroy() {
        // unsubscribe to ensure no memory leaks
        if (this.location_observer) {
        this.location_observer.unsubscribe();
        }
        LiveLocationService.pusherDisconnect(`user-${this.user.id}`)
  },
  methods: {
    toggleInfo: function (marker, idx) {
        this.infoWindowPos = {lat: marker.position.lat, lng: marker.position.lng};
        this.infoContent = this.getInfoWindowContent(marker.position);

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },
      getInfoWindowContent: function (marker) {
        return (
        `<div class="">
          <div>
            <div>
              <div class="m-2"><span style="font-weight: bold;">Buyer Name: </span>
                ${marker.name}
              </div>
            </div>
            <div class="m-2"><span style="font-weight: bold;">Ordered Dish:  </span>
              ${marker.dish_name}
              <br>
            </div>
          </div>
        </div>`);
      },
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker(data) {
    //   if (this.currentPlace) {
        // const marker = {
        //   lat: data.lat,
        //   lng: data.lng
        // };
        this.markers.push({ position: data });
        // this.places.push(this.currentPlace);
        // this.center = marker;
        // this.currentPlace = null;
    //   }
    },
    removeMarker(marker) {
        this.markers = []
        const upd_markers = this.markers.map(x => {
            if(x.user_id != marker.user_id) {
                this.addMarker(x)
            }})
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>