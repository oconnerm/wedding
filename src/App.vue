<template>
  <div>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/Navigation.vue'
export default {
  name: 'app',
  components: {
    navigation: navigation
  }
}
</script>

<style>

</style>
