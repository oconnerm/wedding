<template lang="html">
  <div class="">
    <h1>The Pines at Genesee</h1>
    <div class="">
      <div class="">
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
