<template>
  <div>
    <div class="header banner">
      <span>Becca </span>
      <img class='heart' src='../assets/heart.png'>
      <span>Ryan </span>
    </div>
    <div class="">
      <div v-if="isNotSaveDatePage" class="nav-div">
        <div class="">
          <div class="nav-button">
            <div class="link-container">
              <router-link to="home">HOME</router-link>
            </div>
          </div>
          <div class="nav-button">
            <div class="link-container">
              <router-link to="wedding">WEDDING INFO</router-link>
            </div>
          </div>
          <div class="nav-button">
            <div id='party' class="link-container">
              <router-link to="Photos">PHOTOS</router-link>
            </div>
          </div>
          <div class="nav-button">
            <div id='party' class="link-container">
              <router-link to="Party">PARTY</router-link>
            </div>
          </div>
          <div class="nav-button">
            <div class="link-container">
              <router-link to="registry">REGISTRY</router-link>
            </div>
          </div>
          <div class="nav-button">
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
  computed: {
    isNotSaveDatePage () {
      return this.$route.name !== 'saveDate'
    }
  }
}
</script>

<style lang="css" scoped>

    .heart{
      width: 70px;
      margin-right: 10px;
      margin-left: 10px;
    }

    .header {
      /*font-size: 75px;*/
      font-family: 'Oregano', cursive;
      /*red*/
      color: #5f1e1a;
    }

    .header.banner{
        /*background-color:cyan;*/
        width:100%;
        padding: 1rem 0;
        text-align:center;
        font-size: 2.25rem;
    }

    @media screen and (min-width: 46.875em) {
        .header.banner{
            padding: 1rem 0;
            font-size: 2.75rem;
        }
    }

    .nav-div{
        width:100%;
        max-width:1100px;
        margin: auto;
        padding: 0;

        align-items: center;
        font-family: 'Open Sans', monospace;
        font-size: 0.9rem;

        border-top:2px solid #5f1e1a;
        border-bottom:2px solid #5f1e1a;
    }

    .nav-div>div{
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;

        -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
    }

    .nav-button{
        -webkit-flex: 1 0 33%;
        -ms-flex: 1 0 33%;
        flex: 1 0 33%;


        align-items: center;
        justify-content: center;
        text-align:center;

    }

    @media screen and (min-width:50em){
        .nav-button{
            -webkit-flex: 1 0 16%;
            -ms-flex: 1 0 16%;
            flex: 1 0 16%;
        }
    }

    .nav-button a{
        display:block;
        padding:0.5rem 0;
        text-align:center;
        color:#5f1e1a;
    }

    .nav-button a:hover,
    .nav-button a:focus,
    .nav-button a:active{
        font-weight:600;
    }


    @media only screen and (max-width: 768px) {

      #party{
        padding-left: 10px;
      }

    }

</style>
