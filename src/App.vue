<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 main">
          <landing></landing>
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import Landing from './components/LandingSection.vue'

export default {
  name: 'app',
  components: {
    Landing
  }
}
</script>

<style>
.main {
  text-align: center;
}
</style>
