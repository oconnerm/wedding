<template lang="html">
  <div class="container-fluid">
    <h1>The Pines at Genesee</h1>
    <p>633 Park Point Dr, Golden, CO 80401</p>
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
