<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <div class="block">
          <p class="digit">{{ days | two_digits }}</p>
          <p class="text">Days</p>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="block">
          <p class="digit">{{ hours | two_digits }}</p>
          <p class="text">Hours</p>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="block">
          <p class="digit">{{ minutes | two_digits }}</p>
          <p class="text">Minutes</p>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="block">
          <p class="digit">{{ seconds | two_digits }}</p>
          <p class="text">Seconds</p>
        </div>
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
  props: {
    date: null
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      event: this.date
    }
  },
  computed: {
    calculatedDate () {
      this.event = Math.trunc(Date.parse(this.event) / 1000)
      return this.event
    },
    seconds () {
      return (this.calculatedDate - this.now) % 60
    },
    minutes () {
      return Math.trunc((this.calculatedDate - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((this.calculatedDate - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.calculatedDate - this.now) / 60 / 60 / 24)
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
.countdown-div{
  min-width: 600px;
  margin: auto;
}
.block {
  margin: 20px;
}
.text {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
}
.digit {
  margin: 10px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
}
</style>
