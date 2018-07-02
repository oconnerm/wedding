<template lang="html">
  <div class="location-details">
    <h1>Song Request</h1>
    <a>Click <a href="javascript:void(0)" @click='songLink'> HERE </a> to request a song at the wedding!</a>
    <br>
    <h1>Things To Do</h1>
    <b-list-group>
      <b-list-group-item href="http://www.blackhawkcolorado.com/" target="_blank">Blackhawk</b-list-group-item>
      <b-list-group-item href="http://www.simon.com/mall/colorado-mills" target="_blank">Colorado Mills Mall</b-list-group-item>
      <b-list-group-item href="https://www.millercoors.com/av?url=https://www.millercoors.com/breweries/coors-brewing-company/tours" target="_blank">Coors Brewery</b-list-group-item>
      <b-list-group-item href="https://www.denver.org/about-denver/neighborhood-guides/downtown/" target="_blank">Downtown Denver</b-list-group-item>
      <b-list-group-item href="https://www.visitgolden.com/places-to-go/historic-downtown-golden/" target="_blank">Downtown Golden</b-list-group-item>
      <b-list-group-item href="https://estes-park.com/" target="_blank">Estes Park</b-list-group-item>
      <b-list-group-item href="https://www.colorado.com/cities-and-towns/evergreen" target="_blank">Evergreen</b-list-group-item>
      <b-list-group-item href="http://redrocksonline.com/" target="_blank">Red Recks Amphitheater - Hiking</b-list-group-item>
      <b-list-group-item href="https://www.mlb.com/rockies" target="_blank">Rockies Game - Playing the Dodgers 8/9 - 8/12</b-list-group-item>
      <b-list-group-item href="https://www.nps.gov/romo/index.htm" target="_blank">Rocky Mountain National Park</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  methods: {
    songLink () {
      this.$router.push({ path: 'SongRequest' })
    }
  }
}
</script>

<style lang="css" scoped>
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
