<template lang="html">
  <div class="wedding-container">
    <h1>Song Request</h1>
    <hr>
    <selectSong></selectSong>
  </div>
</template>

<script>

import selectSong from './selectSong.vue'

export default {
  components: {
    selectSong
  }
}

</script>

<style lang="css">
div.wedding-container hr{
  width: 100%;
  max-width:1100px;
}
div.wedding-container {
  width: 100%;
  padding: 1rem 0.5rem 2.5rem 0.5rem;
  text-align:center;
  position: relative;
}
</style>
