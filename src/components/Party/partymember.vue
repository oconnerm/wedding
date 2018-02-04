<template lang="html">
  <div class="wedding-container">
    <h2>Maids of Honor</h2>
      <div class="card-container">
        <div class="card-wrap">
          <span>
            <img src="../../assets/rachel.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
          </span>
          <p>Rachel Aragon</p>
        </div>
        <div class="card-wrap">
          <span>
            <img src="../../assets/ramona.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
          </span>
          <p>Ramona Aragon</p>
        </div>
      </div>
      <hr>
      <h2>Bridesmaids</h2>
      <div class="card-container">
         <div class="card-wrap">
          <span>
            <img src="../../assets/mat.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
          </span>
          <p>Mat Aragon</p>
          <span>
            <img src="../../assets/stephanie.png" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
          </span>
          <p>Stephanie Aragon</p>
        </div>
        <div class="card-wrap">
          <span>
            <img src="../../assets/chelsea.png" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
          </span>
          <p>Chelsea Baker</p>
          <span>
            <img src="../../assets/dana.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
          </span>
          <p>Dana Miller</p>
        </div>
        <div class="card-wrap">
          <span>
            <img src="../../assets/brittany.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
          </span>
          <p>Brittany Sheehan</p>
          <span>
            <img src="../../assets/ryan.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;"></span>
          <p>Ryan Thomas</p>
        </div>
      </div>
    <hr>
    <h2>Best Men</h2>
    <div class="card-container">
      <div class="card-wrap">
        <span>
          <img src="../../assets/kyle.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
        </span>
        <p>Kyle O'Connell</p>
    </div>
    <div class="card-wrap">
        <span>
          <img src="../../assets/anu.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
        </span>
        <p>Anu Shrestha</p>
        </div>
      </div>
    <hr>
    <h2>Groomsmen</h2>
    <div class="card-container">
      <div class="card-wrap">
        <span>
          <img src="../../assets/steve.png" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
        </span>
        <p>Steve Aragon</p>
        <span>
          <img src="../../assets/michael.png" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
        </span>
        <p>Michael Christman</p>
      </div>
      <div class="card-wrap">
        <span>
          <img src="../../assets/henson.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
        </span>
        <p>Kyle Henson</p>
        <span>
          <img src="../../assets/dj.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
        </span>
        <p>DJ Molinare</p>
      </div>
      <div class="card-wrap">
        <img src="../../assets/david.png" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
        <p>David Morris</p>
        <img src="../../assets/eric.jpg" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
        <p>Eric Ramon</p>
      </div>
    </div>
    <hr>
    <h2>Officiant</h2>
    <div class="card-container">
      <div class="card-wrap">
        <img src="../../assets/john.png" id="weddingParty" style="width:170px;height:170px;margin-right:15px;">
        <p>John Honn</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
p{
  margin-bottom: 25px;
}
.card{
    width:100%;
    border:none;
    position:static;
}

.card-text{
    width:83%;
    margin:0 auto;
    padding:1rem 0;
}

.wedding-container hr{
  width: 100%;
  max-width:1400px;
}
.wedding-container {
  width: 100%;
  padding: 1rem 0.5rem 2.5rem 0.5rem;
  text-align:center;
  position: relative;
}
.wedding-container h2{
    text-align:center;
    margin:0 auto 1rem;
    font-family: 'Oregano', cursive;
    color: #5f1e1a;
    font-weight: 600;
}

@media screen and (min-width: 50em){
    .card-container{
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;

        justify-content: space-between;

        -webkit-flex-flow: row;
        -ms-flex-flow: row;
        flex-flow: row;

        padding:0 2%;


    }
}

.card-wrap{
    /*width:83%;*/
    width: 100%;
    border:none;
    padding-top: 20px;
    margin:0 auto 1rem;

    -webkit-transition: all 0.25s ease-out; /* Safari 3.1 to 6.0 */
    transition:all 0.25s ease-out;
}

@media screen and (min-width:26.875em){
    .card-wrap{
       margin:0 auto 2rem;
    }
}

@media screen and (min-width: 31.25em){
    .card-wrap{
        width:83%;
        margin:0 auto 8.5vw;

        -moz-box-shadow: -1px 5px 8px #eee;
        -webkit-box-shadow: -1px 5px 8px #eee;
        box-shadow: -1px 5px 8px #eee;

    }
}

 @media screen and (min-width: 50em){
    .card-wrap{
        width: 32%;
        position:relative;
    }
 }

@media screen and (min-width:68.75em ){
    .card-wrap{
        margin:0 auto 2rem;
    }
}



.card-wrap .hotel-website{
    text-align:center;
    margin-bottom:1rem;
}

@media screen and (min-width:50em){
    .card-wrap .hotel-website{
        position:absolute;
        bottom:0.75rem;
        left: calc(50% - (92.4531px / 2 ) );
    }
}

@media screen and (min-width: 31.25em){
    .card-text{
        padding:2rem 0;
    }
}

@media screen and (min-width: 50em){
    .card-text{
        padding:2rem 0 5rem 0 ;
    }
}

.card-text p{
    margin:0;
}

</style>
