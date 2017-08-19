<template lang="html">
  <div>
    <h1>Hotels</h1>
    <div class="row">
      <div class="col-md-4">
        <b-card title="Evergreen Comfort Suites ">
          <img slot="img" src="https://media.xogrp.com/images/fd3c05ce-c1ef-4227-b8e6-285e44d959c8" alt="img" class=" pic card-img-top img-fluid" />
          <p class="card-text">
            <p>303-526-2000</p>
            <p>29300 U.S Highway 40</p>
            <p>Evergreen, CO 80439</p>
          </p>
          <b-button class="button" href="http://goldenevergreenhotel.com/" target="_blank" variant="primary">Visit Site</b-button>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card title="Table Mountain Inn">
          <img slot="img" src="http://www.tablemountaininn.com/photogallery/large/hotel/table-mountain-inn-golden-exterior.jpg" alt="img" class="pic card-img-top img-fluid" />
          <p class="card-text">
            <p>303-277-9898</p>
            <p>1310 Washington Ave</p>
            <p>Golden, CO 80401</p>
          </p>
          <b-button class="button" href="http://tablemountaininn.com/" variant="primary" target="_blank">Visit Site</b-button>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card title="Denver West Marriott">
          <img slot="img" src="http://marijuanainvestorsummit.com/wp-content/uploads/2015/04/Gateway-Marriot-Denver.jpg" alt="img" class=" pic card-img-top img-fluid" />
          <p class="card-text">
            <p>303-279-9100</p>
            <p>1717 Denver West Blvd</p>
            <p>Golden, CO 80401</p>
          </p>
          <b-button class="button" href="http://www.marriott.com/hotels/travel/denwe-denver-marriott-west/" target="_blank" variant="primary">Visit Site</b-button>
        </b-card>
      </div>
    </div>
    <br>
    <hr>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.pic{
  max-height: 180px;
  width: 100%;
}
.card{
  height: 100%;
}
.button{
  margin-top: 3vh;
}
</style>
