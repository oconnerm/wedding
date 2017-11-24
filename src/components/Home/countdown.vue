<template>
  <div class="countdown">
    <div class="countdownContainer">
      <div class="countdownElement">
        
          <p class="text">Days</p>
          <p class="digit">{{ days | two_digits }}</p>
        
      </div>
      <div class="countdownElement">
        
          <p class="text">Hours</p>
          <p class="digit">{{ hours | two_digits }}</p>
        
      </div>
      <div class="countdownElement">
        
          <p class="text">Minutes</p>
          <p class="digit">{{ minutes | two_digits }}</p>
        
      </div>
      <div class="countdownElement">
        
          <p class="text">Seconds</p>
          <p class="digit">{{ seconds | two_digits }}</p>
        
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.filter('two_digits', function (value) {
  if (value.toString().length <= 1) {
    return '0' + value.toString()
  }
  return value.toString()
})

export default {
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
    seconds () {
      return (1533945600 - this.now) % 60
    },
    minutes () {
      return Math.trunc((1533945600 - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((1533945600 - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((1533945600 - this.now) / 60 / 60 / 24)
    }
  },
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  }
}
</script>

<style>

.countdown{
    padding:1.25rem 0 0 0;
}

.countdownContainer{
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
        
    -webkit-flex-flow: row ;
    -ms-flex-flow: row;
    flex-flow: row; 
}

div.countdownElement{

    -webkit-flex:1 0 25%;
    -ms-flex:1 0 25%;
    flex:1 0 25%;
            
    align-items: center;
    justify-content: center;
    text-align:center;

    padding: 0 0.25rem;

}

div.countdownElement p:first-child{
    font-size: 1.5rem;
}

div.countdownElement p:nth-child(2){
    font-size: 1.25rem;
}

@media screen and (min-width: 31.25em) {
    .countdownContainer{padding: 1.25rem 0;}

    div.countdownElement p:first-child{
        font-size: 1.75rem;
    }

    div.countdownElement p:nth-child(2){
        font-size: 1.5rem;
    }
}

 @media screen and (min-width: 46.875em) {
     .countdownContainer{
        max-width: 80%;
        text-align:center;
        margin:0 auto;
    }
}

@media screen and (min-width: 62.5em){
    .countdownContainer{
        padding: 2rem 0;
        max-width: 85%;
    }

    div.countdownElement p:first-child{
        font-size: 2rem;
    }

    div.countdownElement p:nth-child(2){
        font-size: 1.75rem;
    }
}


.text {
  font-family: 'Oregano', cursive;
  color: #5f1e1a;
  font-size: 30px;
  text-align: center;
}
.digit {
  margin: 10px;
  font-size: 30px;
  font-family: 'Oregano', cursive;
  text-align: center;
}
</style>
