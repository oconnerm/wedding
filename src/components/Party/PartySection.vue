<template lang="html">
  <div class="container">
    <h1>The Wedding Party</h1>
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

<style lang="css">
.pic{
  height: 400px;
}
h1 {
  margin: 30px;
  font-family: 'Oregano', cursive;
  color: #5f1e1a;
  font-weight: bold;
}
</style>
