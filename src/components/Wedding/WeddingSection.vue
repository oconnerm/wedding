<template lang="html">
  <div class="wedding-container">
    <h1>Wedding Information</h1>
    <hr>
      <app-location></app-location>
    <hr>
    <div class = "wedding-header">
      <h1>The Pines at Genesee</h1>
      <p>633 Park Point Dr, Golden, CO 80401</p>
      <b-button class="button" href="http://thepinesatgenesee.com/" target="_blank" variant="primary">Visit Site</b-button>
    </div>
    <div class = "googleMap">
      <app-map></app-map>
    </div>
    <hr>
      <app-hotel></app-hotel>
    <hr>
      <app-todo></app-todo>
  </div>
</template>

<script>
import mapComponent from './map.vue'
import locationInfoComponent from './locationInfo.vue'
import hotelComponent from './hotels.vue'
import todoComponent from './todo.vue'
export default {
  components: {
    appMap: mapComponent,
    appLocation: locationInfoComponent,
    appHotel: hotelComponent,
    appTodo: todoComponent
  }
}
</script>

<style lang='css' scoped>

@media screen and (min-width:68.75em ){
    div.wedding-container{
        margin:0 auto;
    }
}
div.wedding-header{
    width: 100%;
    padding: 1rem 0.5rem 2.5rem 0.5rem;
    text-align:center;
    position: relative;
}

@media screen and (min-width: 31.25em){
    div.wedding-header{
        width: 83%;
        margin:0 auto;
    }
}

div.wedding-header h1{
    font-size: 2rem;
    margin-bottom:0;
}

div.wedding-header button{
    position:absolute;
    left: calc(50% - 46.2265px);
    bottom: 0;

}

div.googleMap{
    width:100%;
}
div.wedding-container hr{
  width: 100%;
  max-width:1100px;
}
div.wedding-container {
  width: 100%;
  padding: 1rem 0.5rem 2.5rem 0.5rem;
  text-align:center;
  position: relative;
}
div.wedding-container p{
  margin-left: 15vw;
  margin-right: 15vw;
}

</style>
