<template lang="html">
  <div class="hotels-container">
    <h1>Hotels</h1>
    <div class="card-container">
       <div class="card-wrap">
         <b-card>
           <img slot="img" src="https://media.xogrp.com/images/fd3c05ce-c1ef-4227-b8e6-285e44d959c8" alt="img" class=" card-img-top img-fluid" />
           <div class="card-text">
             <h4 class="card-title">Evergreen Comfort Suites</h4>
             <p>303-526-2000</p>
             <p>29300 U.S Highway 40</p>
             <p>Evergreen, CO 80439</p>
           </div>
           <div class="hotel-website">
             <b-button class="button" href="http://goldenevergreenhotel.com/" target="_blank" variant="primary">Visit Site</b-button>
           </div>
         </b-card>
       </div><!--.card-wrap-->
       <div class="card-wrap">
         <b-card>
           <img slot="img" src="http://www.tablemountaininn.com/photogallery/large/hotel/table-mountain-inn-golden-exterior.jpg" alt="img" class=" card-img-top img-fluid" />
           <div class="card-text">
             <h4 class="card-title">Table Mountain Inn</h4>
             <p>303-277-9898</p>
             <p>1310 Washington Ave</p>
             <p>Golden, CO 80401</p>
           </div>
           <div class="hotel-website">
           <b-button class="button" href="http://tablemountaininn.com/" variant="primary" target="_blank">Visit Site</b-button>
           </div>
          </b-card>
       </div><!--.card-wrap-->
       <div class="card-wrap">
         <b-card>
           <img slot="img" src="http://cache.marriott.com/propertyimages/d/denwe/denwe_main01.jpg" alt="img" class=" card-img-top img-fluid" />
           <div class="card-text">
            <h4 class="card-title">Denver West Marriott</h4>
             <p>303-279-9100</p>
             <p>1717 Denver West Blvd</p>
             <p>Golden, CO 80401</p>
           </div>
           <div class="hotel-website">
             <b-button class="button" href="http://www.marriott.com/hotels/travel/denwe-denver-marriott-west/" target="_blank" variant="primary">Visit Site</b-button>
           </div>
         </b-card>
       </div><!--.card-wrap-->
     </div><!--.card-container-->
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
    div.hotels-container h1{
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
