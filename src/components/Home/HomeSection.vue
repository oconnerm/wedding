<template lang="html">
  <div class="container">
    <div class="box">
      <picture></picture>
      <hr>
      <br>
      <h4>Come celebrate our wedding!</h4>
      <h5>Friday, August 10, 2018</h5>
      <br>
      <hr>
      <br>
      <h3>Rabecca Aragon</h3>
      <h1>&</h1>
      <h3>Ryan O'Connell</h3>
      <br>
      <hr>
      <br>
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
