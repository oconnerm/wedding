<template lang="html">
  <div class="location-details">
    <h1>Things To Do</h1>

    <b-list-group>
      <b-list-group-item href="#">Blackhawk</b-list-group-item>
      <b-list-group-item href="#">Colorado Mills Mall</b-list-group-item>
      <b-list-group-item href="#">Downtown Denver</b-list-group-item>
      <b-list-group-item href="#">Downtown Golden</b-list-group-item>
      <b-list-group-item href="#">Estes Park</b-list-group-item>
      <b-list-group-item href="#">Rocky Mountain National Park</b-list-group-item>
      <b-list-group-item href="#">Coors Brewery</b-list-group-item>
      <b-list-group-item href="#">Red Recks Amphitheater - Hiking</b-list-group-item>
      <b-list-group-item href="#">Evergreen</b-list-group-item>
      <b-list-group-item href="#">Rockies Game - Playing the Dodgers 8/9 - 8/12</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  // data
}
</script>

<style lang="css">
  div.location-details{
        padding:1.5rem;
  }

  @media screen and (min-width: 31.25em){
        div.location-details{
            width: 83%;
            margin:0 auto;
        }
  }

  @media screen and (min-width: 50em){
        div.location-details{
            width:664px;
        }
  }

  div.location-details p{
        margin:0;
  }

  div.location-details p:first-child{
        margin-bottom:1.5rem;
  }

  div.location-details p:nth-child(2),
  div.location-details p:nth-child(3){
        font-weight: 600;
        text-align:center;
  }
</style>
