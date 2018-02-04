<template lang="html">
  <div class="wedding-container">
    <h1>The Wedding Party</h1>
    <hr>
    <partymember></partymember>
  </div>
</template>

<script>

import partymember from './partymember.vue'

export default {
  components: {
    partymember
  }
}

</script>

<style lang="css" scoped>
.pic{
  height: 400px;
}
h1 {
  margin: 30px;
  font-family: 'Oregano', cursive;
  color: #5f1e1a;
  font-weight: bold;
}
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
