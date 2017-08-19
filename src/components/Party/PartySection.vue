<template lang="html">
  <div class="container">
    <picture></picture>
    <h1>The Wedding Party</h1>
    <partymember></partymember>
  </div>
</template>

<script>

import picture from './picture.vue'
import partymember from './partymember.vue'

export default {
  components: {
    partymember,
    picture
  }
}

</script>

<style lang="css">
</style>
