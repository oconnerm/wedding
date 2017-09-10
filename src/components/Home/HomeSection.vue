<template lang="html">
  <div class="container">
    <div class="box">
      <picture></picture>
      <div v-if="!isSaveDate">
        <h4>Come celebrate our wedding!</h4>
        <h5>Friday, August 10, 2018</h5>
      </div>
      <div class="saveDateText" v-if="isSaveDate">
        <img class="barley" src='../../assets/barley_down.png'>
        <h2 class="mainText">Save the date!</h2>
        <h1 id="date">08.10.18</h1>
        <img class="barley" src="../../assets/barley_up.png">
        <h2 class="mainText">Website under construction!</h2>
        </div>
      </div>
      <div v-if="!isSaveDate">
        <h3>Rabecca Aragon</h3>
        <h3>&</h3>
        <h3>Ryan O'Connell</h3>
      </div>
      <countdown></countdown>
    </div>
  </div>
</template>

<script>
import picture from './picture.vue'
import countdown from './countdown.vue'
export default {
  components: {
    picture,
    countdown
  },
  computed: {
    isSaveDate () {
      return this.$route.name === 'saveDate'
    }
  }
}
</script>

<style lang="css" scoped>
  .barley{
    width: 600px;
    margin: 10px;
  }
  .saveDateText{
    margin-top: 30px;
    font-family: 'Oregano', cursive;
    color: #5f1e1a;
    font-weight: bold;
  }
  .mainText{
    margin-top: 10px;
    font-size: 65px;
  }
  .box {
    padding: 25px;
  }
  #date{
    font-weight: bold;
    font-size: 90px;
    color: #112339;
  }
</style>
