<template lang="html">
  <div class="container-fluid">
    <h1>The Pines at Genesee</h1>
    <p>633 Park Point Dr, Golden, CO 80401</p>
    <div class="row">
      <div class="col-lg-12">
        <div class="mapContainer">
          <hr>
          <app-map></app-map>
        </div>
      </div>
    </div>
    <app-location></app-location>
  </div>
</template>

<script>
import mapComponent from './map.vue'
import locationInfoComponent from './locationInfo.vue'
export default {
  components: {
    appMap: mapComponent,
    appLocation: locationInfoComponent
  }
}
</script>

<style scoped>
  .container-fluid{
    height: 100vh;
  }
</style>
