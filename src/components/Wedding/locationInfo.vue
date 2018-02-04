<template lang="html">
  <div class="location-details">
    <p>The wedding will be held on Friday, August 10, 2018 at the Pines at Genesee in Golden, Colorado. We'll start at the Evergreen Wedding Terrace for the outdoor ceremony. A reception will follow in the ballroom including dinner, dancing and <i>free</i> beer.</p>
    <p>Ceremoney: 6:30pm - 7:00pm</p>
    <p>Reception: 7:00pm - 12:00am</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  div.location-details{
        padding:1rem;
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
