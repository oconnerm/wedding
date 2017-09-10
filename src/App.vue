<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 main">
          <landing></landing>
          <router-view></router-view>
          <copy></copy>
        </div>
      </div>
  </div>
</template>

<script>
import Landing from './components/LandingSection.vue'
import copy from './components/FooterSection.vue'
export default {
  name: 'app',
  components: {
    Landing,
    copy
  }
}
</script>

<style>
.main {
  text-align: center;
}
</style>
