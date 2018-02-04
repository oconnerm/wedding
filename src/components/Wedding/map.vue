<template lang='html'>
  <div class='mapContainer'>
    <gmap-map class='g-map' :style='styles' :center='center' :zoom='15'>
      <gmap-marker :key='index' v-for='(m, index) in markers' :position='m.position' :clickable='true' :draggable='true' @click='center=m.position'></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD1xkN8IZjhOh2Cf_22cF8D10rrzc1gNAc'
    // v: 'OPTIONAL VERSION NUMBER'
   // libraries: 'places', //// If you need to use place input
  }
})

export default {
  data () {
    return {
      center: {lat: 39.7063, lng: -105.2884},
      styles: [{'featureType': 'administrative', 'elementType': 'geometry.fill', 'stylers': [{'color': '#bd2626'}]}, {'featureType': 'administrative', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#931f19'}]}, {'featureType': 'administrative.country', 'elementType': 'geometry.fill', 'stylers': [{'color': '#500202'}]}, {'featureType': 'administrative.country', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#3a0a0a'}]}, {'featureType': 'administrative.locality', 'elementType': 'geometry.fill', 'stylers': [{'color': '#fc8f8f'}]}, {'featureType': 'administrative.locality', 'elementType': 'labels.icon', 'stylers': [{'color': '#af6666'}]}, {'featureType': 'administrative.land_parcel', 'elementType': 'geometry.fill', 'stylers': [{'color': '#514141'}]}, {'featureType': 'administrative.land_parcel', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#773e3e'}]}, {'featureType': 'landscape', 'elementType': 'all', 'stylers': [{'color': '#f2f2f2'}]}, {'featureType': 'landscape', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#602929'}]}, {'featureType': 'landscape.natural.landcover', 'elementType': 'geometry.fill', 'stylers': [{'color': '#8a5353'}]}, {'featureType': 'landscape.natural.landcover', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#a05151'}]}, {'featureType': 'poi', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'poi.attraction', 'elementType': 'geometry.fill', 'stylers': [{'color': '#826060'}]}, {'featureType': 'poi.attraction', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#be6a6a'}]}, {'featureType': 'poi.business', 'elementType': 'geometry.fill', 'stylers': [{'color': '#4e4141'}]}, {'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{'color': '#551414'}]}, {'featureType': 'road', 'elementType': 'all', 'stylers': [{'saturation': -100}, {'lightness': 45}]}, {'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{'color': '#269ad3'}]}, {'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#958181'}]}, {'featureType': 'road', 'elementType': 'labels.icon', 'stylers': [{'color': '#8f312d'}]}, {'featureType': 'road.highway', 'elementType': 'all', 'stylers': [{'visibility': 'simplified'}]}, {'featureType': 'road.highway.controlled_access', 'elementType': 'geometry.fill', 'stylers': [{'color': '#e9342b'}]}, {'featureType': 'road.highway.controlled_access', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#e08c8c'}]}, {'featureType': 'road.arterial', 'elementType': 'labels.icon', 'stylers': [{'visibility': 'off'}, {'color': '#b03b3b'}]}, {'featureType': 'road.local', 'elementType': 'geometry.fill', 'stylers': [{'color': '#862d2d'}]}, {'featureType': 'road.local', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#8c4d4d'}]}, {'featureType': 'road.local', 'elementType': 'labels.icon', 'stylers': [{'color': '#a23939'}]}, {'featureType': 'transit', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'transit.line', 'elementType': 'labels.icon', 'stylers': [{'color': '#bf8484'}]}, {'featureType': 'water', 'elementType': 'all', 'stylers': [{'color': '#174a6d'}, {'visibility': 'on'}]}],
      markers: [{
        position: {lat: 39.7063, lng: -105.2884}
      }, {
        position: {lat: 39.7063, lng: -105.2884}
      }]
    }
  }
}
</script>

<style lang='css' scoped>
  .g-map{
    width: 100%;
    height: 300px;
    margin: auto;
  }

   @media screen and (min-width: 31.25em){
        .g-map{
            height: 350px;
        }
   }

    @media screen and (min-width:50em){
        .g-map{
            width: 83%;
        }
    }
</style>
