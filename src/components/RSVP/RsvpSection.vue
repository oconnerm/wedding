<template lang="html">
  <div id="app" class="wedding-container">
    <h1>Join Becca and Ryan!</h1>
    <hr>
    <submit></submit>
  </div>
</template>

<script>

import submit from './submit.vue'

export default {
  components: {
    submit
  }
}

</script>

<style lang="css" scoped>
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
div.wedding-container p{
  margin-left: 15vw;
  margin-right: 15vw;
}
</style>
