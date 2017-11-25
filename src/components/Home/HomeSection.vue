<template lang="html">
    <div class=" home-container">
      <div class="content-container">
        <div class="image-container"> 
          <img class="pic" src="../../assets/alaska3_old.png">
        </div>
        <div class="text-content">
            <div v-if="!isSaveDate" class="saveDateHeading">
              <h4>Come celebrate our wedding!</h4>
              <h5>Friday, August 10, 2018</h5>     
            </div>
            <span v-if="!isSaveDate" class="saveDateHeadingSpacer"></span>
            <div class="saveDateText" v-if="isSaveDate">
              <img class="barley" src='../../assets/barley_down.png'>
              <h2 class="mainText">Save the date!</h2>
              <h1 id="date">08.10.18</h1>
              <img class="barley" src="../../assets/barley_up.png">
              <h2 class="mainText">Website under construction!</h2>
            </div>
            <div v-if="!isSaveDate" class= "bride-and-groom">
              <h3>Rabecca Aragon</h3>
              <h3>&</h3>
              <h3>Ryan O'Connell</h3>
            </div>
            <span v-if="!isSaveDate" class="saveDateHeadingSpacer"></span>
            <countdown></countdown>
        </div><!--end .text-content-->
      </div>
    </div>
</template>

<script>
import countdown from './countdown.vue'
export default {
  components: {
    countdown
  },
  computed: {
    isSaveDate () {
      return this.$route.name === 'saveDate'
    }
  }
}
</script>

<style lang="css" scoped>

  .home-container{
    
  }

  @media screen and (min-width: 46.875em) {
        .home-container{
            position:relative;
        }
  }
    
  .home-container .image-container {
    text-align:center;
  }

  @media screen and (min-width: 31.25em) {

        .home-container .image-container {
            width:80%;
            margin:0 auto;
            
        }
        
  }

  @media screen and (min-width: 46.875em) {
         .home-container .image-container {
            width:50%;
            margin:0;
        }
  }
   
  .home-container .image-container img{ 
        width: 100%;
        height:auto;
        padding: 1rem 0;
  }

    @media screen and (min-width: 46.875em) {
        .home-container .image-container img{ 
            display:inline-block;
            padding: 0;
            margin:0;
        }
    }

  .barley{
    width: 80%;
    text-align:center;
    margin: 0 auto;
    display:block;
  }



  .saveDateHeading{
    width:100%;
    text-align:center;
    color: #5f1e1a;
    padding: 0 0 1.25rem 0;
  }

  .saveDateHeading h4{
    font-size:1.25rem;
    margin:0;
  }
    
  .saveDateHeading h5{
    font-size:1.25rem;
    margin:0;
  }

  @media screen and (min-width: 31.25em) {
        .saveDateHeading{padding: 2rem 0 1.5rem 0;}

        .saveDateHeading h4{
            font-size:1.5rem;
            
        }

        .saveDateHeading h5{
            font-size:1.5rem;
           
        }
  }

  @media screen and (min-width: 53.125em){
        .saveDateHeading{padding: 0 0 2rem 0;}
  }

  @media screen and (min-width: 62.5em){
        .saveDateHeading{padding: 0 0 3rem 0;}
  }
  



  .saveDateHeadingSpacer{
    display:block;
    margin:0 auto;
    width:60%;
    border-bottom: 2px solid #eee;
  }

  @media screen and (min-width: 31.25em) {
    .saveDateHeadingSpacer{width:50%;}
  }
  
  @media screen and (min-width: 46.875em) {
        .text-content{
            position:absolute;
            width: 50%;
            top:0;
            left: 50%;
        }
  }

  @media screen and (min-width: 53.125em){
        .text-content{padding-top: 2.5rem;}
  }
  
  @media screen and (min-width: 62.5em){
        .text-content{padding-top: 3rem;}
  }
  
  

  .saveDateText{
    margin-top: 30px;
    width:100%;
    font-family: 'Oregano', cursive;
    color: #5f1e1a;
    font-weight: bold;
  }
  
  @media screen and (min-width: 31.25em) {
          .saveDateText{
                margin:0;
          }
  }

  .mainText{
    margin-top: 0.75rem;
    text-align:center;
    margin: 0.5rem auto;
    font-size: 2.5rem;
  }

  @media screen and (min-width: 46.875em) {
    .mainText{padding: 0 1rem;}
  }

  .bride-and-groom{
    text-align: center;
    padding: 1.25rem 0;
  }

  .bride-and-groom h3{
    font-size: 2rem;
    font-family: 'Oregano', cursive;
  }

  @media screen and (min-width: 31.25em) {
    .bride-and-groom h3{
        font-size: 2.25rem;
    }
  }

  @media screen and (min-width: 62.5em){
    .bride-and-groom h3{
        font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 53.125em){
    .bride-and-groom{
        padding: 1.75rem 0;
    }
  }
    
  #date{
    font-weight: bold;
    font-size: 3.5rem;
    text-align:center;
    margin:0 auto 0.5rem;
    color: #112339;
  }
  
</style>
