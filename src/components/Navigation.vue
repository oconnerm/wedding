<template>
  <div>
    <div class="header">
      <span>Ryan </span>
      <img class='heart' src='../assets/heart.svg'>
      <span>Becca </span>
    </div>
    <div class="nav-div">
      <div class="row">
        <div class="col-md-2">
          <router-link to="home">HOME</router-link>
        </div>
        <div class="col-md-2">
          <router-link to="about">ABOUT</router-link>
        </div>
        <div class="col-md-2">
          <router-link to="location">LOCATION</router-link>
        </div>
        <div class="col-md-2">
          <router-link to="rsvp">RSVP</router-link>
        </div>
        <div class="col-md-2">
          <router-link to="Register">REGISTER</router-link>
        </div>
        <div class="col-md-2">
          <router-link to="WeddingParty">PARTY</router-link>
        </div>
      </div>
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
  .nav-div{
    width: 800px;
    margin: auto;
    font-size: 15px;
    padding: 25px;
  }
</style>
