<template lang="html">
  <div class="container-fluid">
    <h1>The Pines at Genesee</h1>
    <div class="row">
      <div class="col-lg-12">
        <div class="mapContainer">
          <app-map></app-map>
        </div>
      </div>
    </div>
    <div>
      <h2>The wedding will be held on Friday, August 10, 2018. We'll start at the Evergreen Wedding Terrace for the ceremony, then move to the ballroom for the reception.</h2>
      <h3>Ceremoney 5:00 - 6:00</h3>
      <h3>Reception 7:00 - 12:00</h3>
      <h3>The Pines at Genesee</h3>
      <h3>633 Park Point Dr, Golden, CO 80401</h3>
    </div>
  </div>
</template>

<script>
import mapComponent from './map.vue'
export default {
  components: {
    appMap: mapComponent
  }
}
</script>

<style lang="css">

</style>
