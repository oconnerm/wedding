<template lang="html">
  <div class="container">
    <img class="pic" src="../../assets/alaska.png">
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
</style>
