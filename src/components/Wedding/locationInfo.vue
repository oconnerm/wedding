<template lang="html">
  <div class="wedding-container">
    <p>The wedding will be held on Friday, August 10, 2018 at the Pines at Genesee in Golden, Colorado. We'll start at the Evergreen Wedding Terrace for the outdoor ceremony. A reception will follow in the ballroom including dinner, dancing and <i>free</i> beer.</p>
    <p><b>Ceremoney: 6:30pm - 7:00pm</b></p>
    <p><b>Reception: 7:00pm - 12:00am</b></p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
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
