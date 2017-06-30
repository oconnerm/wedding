<template lang="html">
  <div class="container">
    <div class="box">
      <picture></picture>
    </div>
    <div class="box">
      <countdown date="2018-6-28 00:00:00"></countdown>
    </div>
  </div>
</template>

<script>
import picture from './picture.vue'
import countdown from './countdown.vue'
export default {
  components: {
    picture,
    countdown
  }
}
</script>

<style lang="css" scoped>
  .box {
    padding: 25px;
  }
</style>
