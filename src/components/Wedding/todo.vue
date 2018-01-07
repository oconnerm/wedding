<template lang="html">
  <div class="location-details">
    <h1>Things To Do</h1>
    <p>1. Blackhawk</p>
    <p>2. Colorado Mills Mall - 3 Minutes from Marriot Hotels.</p>
    <p>3. Downtown Denver - 11 Minutes from Marriot Hotels</p>
    <p>4. Downtown Golden - 5 Minutes from Marriot Hotels</p>
    <p>5. Estes Park</p>
    <p>6. Rocky Mountain National Park</p>
    <p>7. Coors Brewery</p>
    <p>8. Red Recks Amphitheater - Hiking</p>
    <p>9. Evergreen</p>
    <p>10. Rockies Game - Playing the Dodgers 8/9 - 8/12</p>
  </div>
</template>

<script>
export default {
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
