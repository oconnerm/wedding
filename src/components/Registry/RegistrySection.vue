<template lang="html">
  <div class="wedding-container">
    <h1>Registry</h1>
    <hr>
    <h2>Crate and Barrel</h2>
    <p>Becca and Ryan are registered at Crate and Barrel.</p>
    <b-button class="button" href="https://www.crateandbarrel.com/gift-registry/rabecca-aragon-and-ryan-oconnell/r5813809" variant="primary" target="_blank">Crate and Barrel Registry</b-button>
    <br></br>
    <h2>Honeyfund</h2>
    <p>Honeyfund is a honeymoon registry. A simple way for help Becca and Ryan enjoy their honeymoon to Ireland!</p>
    <b-button class="button" href="https://www.honeyfund.com/wedding/becca-ryan" variant="primary" target="_blank">Honeyfund Registry</b-button>
    <br></br>
    <h2>VEBO</h2>
    <p>VEBO is an experience-based wedding registry. Skip the traditional gifts and instead give Becca and Ryan a memorable experience.</p>
    <b-button class="button" href="https://vebolife.com/registries/RabeccaandRyan/" variant="primary" target="_blank">VEBO Wedding Registry</b-button>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
div.wedding-container hr{
  width: 100%;
  max-width:1100px;
}
div.wedding-container h2{
    text-align:center;
    margin:0 auto 1rem;
    font-family: 'Oregano', cursive;
    color: #5f1e1a;
    font-weight: 600;
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
