<template lang="html">
  <div class="wedding-container">
    <div class = "wedding-header">
        <h1>The Pines at Genesee</h1>
        <p>633 Park Point Dr, Golden, CO 80401</p>
        <b-button class="button" href="http://thepinesatgenesee.com/" target="_blank" variant="primary">Visit Site</b-button>
    </div>
    <hr>
    <div class = "googleMap">
    <app-map></app-map>
    </div>
    <hr>
    <app-location></app-location>
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

<style scoped>
    div.wedding-container{
        width: 100%;
        max-width:1100px;
    }

    @media screen and (min-width:68.75em ){
        div.wedding-container{
            margin:0 auto;
        }
    }

    div.wedding-container h1{
        font-family: 'Oregano', cursive;
        margin:0;
        color: #5f1e1a;
        font-weight: 600;
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

    div.wedding-header a{
        position:absolute;
        left: calc(50% - 46.2265px);
        bottom: 0;
     
    }
    

    div.googleMap{
        width:100%;
    }

</style>
