<template lang="html">
  <div class="wedding-container">
    <h1>Rehearsal Dinner RSVP</h1>
    <hr>
    <dinner></dinner>
  </div>
</template>

<script>
import dinner from './dinnerRSVP.vue'
export default {
  components: {
    dinner
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
