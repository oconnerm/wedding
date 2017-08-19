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
