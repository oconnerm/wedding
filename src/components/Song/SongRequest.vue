<template lang="html">
  <div class="container">
    <h1>Song Request</h1>
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
.pic{
  height: 400px;
}
</style>
