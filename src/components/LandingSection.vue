<template>
  <div class="main">
      <div class="container">
        <Navigation></Navigation>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
  name: 'main',
  components: {
    Navigation
  },
  data () {
    return {
      msg: "Hello welcome to Becca and Ryan's Wedding page!!!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.main{
    width: 50%;
    margin: auto;
  }*/
</style>
