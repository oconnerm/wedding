<template>
  <div>
    <div class="header">
      <span>Becca </span>
      <img class='heart' src='../assets/heart.svg'>
      <span>Ryan </span>
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
              <router-link to="wedding">WEDDING</router-link>
            </div>
          </div>
          <div class="col-sm-2">
            <div id='party' class="link-container">
              <router-link to="Photos">PHOTOS</router-link>
            </div>
          </div>
          <div class="col-sm-2">
            <div id='party' class="link-container">
              <router-link to="Party">PARTY</router-link>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="link-container">
              <router-link to="registery">REGISTERY</router-link>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="link-container">
              <router-link to="rsvp">RSVP</router-link>
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
  }
  .nav-div{
    margin: auto;
    font-size: 15px;
    padding: 25px;
    align-items: center;
    font-family: 'Inconsolata', monospace;
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    .link-container{
      font-size: 16px;
    }
    #party{
      padding-left: 10px;
    }
  }

</style>
