<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 main">
          <landing></landing>
          <router-view></router-view>
          <Footer></Footer>
        </div>
      </div>
  </div>
</template>

<script>
import Landing from './components/LandingSection.vue'
import Footer from './components/FooterSection.vue'
export default {
  name: 'app',
  components: {
    Landing,
    Footer
  }
}
</script>

<style>
.main {
  text-align: center;
}
</style>
