<template lang='html'>
  <div class='mapContainer'>
    <gmap-map class='g-map' :center='center' :zoom='15'>
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
