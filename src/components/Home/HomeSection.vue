<template lang="html">
  <div class="container">
    <div class="box">
      <picture></picture>
    </div>
      <h4>Come celebrate our wedding!</h4>
      <h3>Rabecca Aragon</h3>
      <h2>&</h2>
      <h3>Ryan O'Connell</h3>
      <h4>Friday, August 10, 2018</h4>
      <h3>Becca and Ryan would like to invite you to celebrate their marriage.</h3>
    <div class="box">
      <countdown date="2018-8-10 18:00:00"></countdown>
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
