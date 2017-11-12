<template lang="html">
  <div id="app" class="container">
    <img class="pic" src="../../assets/RB10.jpg">
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

<style lang="css">
.pic{
  height: 400px;
}
</style>
