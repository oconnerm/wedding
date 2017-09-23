<template lang="html">
  <div class="container">
    <picture></picture>
    <h1>Song Request</h1>
    <selectSong></selectSong>
  </div>
</template>

<script>

import picture from './picture.vue'
import selectSong from './selectSong.vue'

export default {
  components: {
    selectSong,
    picture
  }
}

</script>

<style lang="css">
</style>
