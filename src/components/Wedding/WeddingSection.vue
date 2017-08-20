<template lang="html">
  <div class="container-fluid">
    <h1>The Pines at Genesee</h1>
    <p>633 Park Point Dr, Golden, CO 80401</p>
    <br>
    <b-button class="button" href="http://thepinesatgenesee.com/" target="_blank" variant="primary">Visit Site</b-button>
    <hr>
    <br>
    <app-map></app-map>
    <br>
    <hr>
    <app-location></app-location>
    <br>
    <hr>
    <app-hotel></app-hotel>
  </div>
</template>

<script>
import mapComponent from './map.vue'
import locationInfoComponent from './locationInfo.vue'
import hotelComponent from './hotels.vue'
export default {
  components: {
    appMap: mapComponent,
    appLocation: locationInfoComponent,
    appHotel: hotelComponent
  }
}
</script>

<style scoped>
</style>
