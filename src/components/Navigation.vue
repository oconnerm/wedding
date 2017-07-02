<template>
  <div>
    <div class="header">
      <span>Ryan </span>
      <img class='heart' src='../assets/heart.svg'>
      <span>Becca </span>
    </div>
    <div class="container-fluid">
      <div class="nav-div">
        <div class="row">
          <div class="col-sm-2">
            <div class="link-container">
              <router-link to="home">HOME</router-link>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="link-container">
              <router-link to="about">ABOUT</router-link>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="link-container">
                <router-link to="location">LOCATION</router-link>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="link-container">
              <router-link to="rsvp">RSVP</router-link>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="link-container">
              <router-link to="Register">REGISTER</router-link>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="link-container">
              <router-link to="WeddingParty">PARTY</router-link>
            </div>
          </div>
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
    margin: auto;
    font-size: 15px;
    padding: 25px;
    align-items: center;
    min-width: 600px;
  }

</style>
