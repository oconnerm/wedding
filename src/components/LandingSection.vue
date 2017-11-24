<template>
  <div class="">
      <div class="masthead">
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
<style>
    .masthead{
        margin:0 auto;
        width:100%;
        padding:0;
    }

</style>
