<template>
  <div>
    <div class="header">
      <span>Ryan </span>
      <img class='heart' src='../assets/heart.svg'>
      <span>Becca </span>
    </div>
    <div>
      <router-link to="home">HOME</router-link>
      <router-link to="about">ABOUT</router-link>
      <router-link to="location">LOCATION</router-link>
      <router-link to="rsvp">RSVP</router-link>
      <router-link to="Register">REGISTER</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
  .heart{
    width: 50px;
  }
  .header {
    font-size: 30px;
    font-family: 'Inconsolata', monospace;
    margin: 30px;
  }
</style>
