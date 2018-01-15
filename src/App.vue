<template>
  <div class="body-container">
    <div class="">
        <div class="">
          <landing></landing>
          <router-view></router-view>
          <copy></copy>
        </div>
      </div>
  </div>
</template>

<script>
import Landing from './components/LandingSection.vue'
import copy from './components/FooterSection.vue'
export default {
  name: 'app',
  components: {
    Landing,
    copy
  }
}
</script>

<style>
    html{
        overflow-x:hidden;
    }
    body{
        width:100%;
    }
    .main {
      text-align: center;
      font-size:16px;
    }

    .container{
        max-width:100%;
    }

    div.body-container{
        /*background-color:cyan;*/
        /*border: 1px dotted red;*/
        margin: 0 auto;
        max-width:none;
    }

    .button{
        background-color:#5f1e1a;
        border-color:#5f1e1a;
        color: #FDC667;
    }

    .button:hover,
    .button:focus,
    .button:active{
        background-color:#fdc666 !important;;
        border-color:#fdc666 !important;
        color:#5f1e1a;
    }



</style>
