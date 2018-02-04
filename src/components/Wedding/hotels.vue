<template lang="html">
  <div class="hotels-container">
    <h1>Hotels</h1>
    <p>You will find the information for your Marriot online group rate reservation at the link below. If you need to reserve a two bedroom two bath room or if you require different dates please contact Katie Borrego (303-215-9218).</p>
    <p><i>In addition...</i><p>
    <p>There will be a shuttle from the Marriot Courtyard and Ressidence Inn to the wedding at the Pines at Genesee.</p>
    <p>Out of town guests are invited to the rehersal dinner. If you plan to attend the rehersal dinner please RSVP <a href="javascript:void(0)" @click='dinnerLink'> here</a>!<p>
    <br>
    <div class="card-container">
       <div class="card-wrap">
         <b-card>
           <img slot="img" src="../../assets/residenceInn.jpg" alt="img" class=" card-img-top img-fluid" />
           <div class="card-text">
             <h4 class="card-title">Residence Inn by Marriott </h4>
             <p>303-271-0909</p>
             <p>14600 W 6th Ave Frontage Rd</p>
             <p>Golden, CO 80401</p>
           </div>
           <div class="hotel-website">
             <b-button class="button" href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=OConnell%20Aragon%20Wedding%20%5EDengo%60CAWCAWS%7CCAWCAWO%60164.00%60USD%60false%604%60;dengl%60CAWCAWG%7CCAWCAWD%60154.00%60USD%60false%604%608/9/18%608/11/18%607/10/18&app=resvlink&stop_mobi=yes" variant="primary" target="_blank">Discounted Rate</b-button>
           </div>
          </b-card>
       </div><!--.card-wrap-->

       <div class="card-wrap">
         <b-card>
           <img slot="img" src="../../assets/courtyard.jpg" alt="img" class=" card-img-top img-fluid" />
           <div class="card-text">
            <h4 class="card-title">Courtyard by Marriott Denver </h4>
             <p>303-271-0776</p>
             <p>14700 W 6th Ave Frontage Rd</p>
             <p>Golden, CO 80401</p>
           </div>
           <div class="hotel-website">
             <b-button class="button" href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=OConnell%20Aragon%20Wedding%20%5EDengo%60CAWCAWS%7CCAWCAWO%60164.00%60USD%60false%604%60;dengl%60CAWCAWG%7CCAWCAWD%60154.00%60USD%60false%604%608/9/18%608/11/18%607/10/18&app=resvlink&stop_mobi=yes" target="_blank" variant="primary">Discounted Rate</b-button>
           </div>
         </b-card>
       </div><!--.card-wrap-->
     </div><!--.card-container-->
     <p>Rick and Diane will be staying at the Residence Inn August 9th and 10th.</p>
     <p>Steve and Pita will be staying at... pending.</p>
     <h1>Additional Hotels</h1>
     <p>Here are some great hotels if you'd like to stay in Loiusville after the wedding.</p>
     <div class="additonal-container">
       <h3>Louisville</h3>
       <p>(These are within a mile of the O'Connell house)</p>
       <div class="Courtyard-Lousiville">
         <b-card title="Courtyard by Marriott">
         <span class="card-text">
           <p>948 West Dillon Road, Louisville, CO 80027 US</p>
           <p>Reservation: 844-232-0912</p>
          </span>
          <b-link href="http://www.marriott.com/hotels/travel/denls-courtyard-boulder-louisville/" target="_blank">Book Here</b-link>
          </b-card>
       </div>
       <div class="BestWestern">
         <b-card title="Best Wersern Plus">
         <span class="card-text">
           <p>960 West Dillion Road, Louisville, CO 80027</p>
           <p>Reservations: 303-327-1215</p>
          </span>
          <b-link href="https://www.bestwestern.com/en_US/book/hotels-in-louisville/best-western-plus-louisville-inn-suites/propertyCode.06179.html" target="_blank">Book Here</b-link>
          </b-card>
       </div>
         <div class="LaQuinta">
           <b-card title="La Quinta Inn">
           <span class="card-text">
             <p>902 West Dillion Road, Louisville, CO 80027</p>
             <p>Reservations: 303-664-0100</p>
            </span>
            <b-link href="http://www.laquintadenverboulderlewisville.com/"
              class="card-link" target="_blank">Book Here</b-link>
            </b-card>
         </div>
     </div>
  </div>
</template>

<script>
export default {
  methods: {
    dinnerLink () {
      this.$router.push({ path: 'dinner' })
    }
  }
}
</script>

<style lang="css" scoped>
.additonal-container{
text-align: center;
}
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
h4.card-title{
  text-align: center;
}
.disclaim{
  font-size: 16px;
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

.btn-primary{
  display: flex;
  justify-content: center;
}

.card-wrap .hotel-website{
    /* text-align:center;
    margin-bottom:1rem; */
}

@media screen and (min-width:50em){
    /* .card-wrap .hotel-website{
        position:absolute;
        bottom:0.75rem;
        left: calc(50% - (92.4531px / 2 ) );
    } */
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
    font-size: 15px;
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
