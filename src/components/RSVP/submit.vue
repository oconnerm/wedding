<template lang="html">
  <div id="app" class="container">
    <h1>Join Ryan and Becca!</h1>
    <h2>Find your RSVP by typing in your Code:</h2>
    <input v-model="guestInput" placeholder="Your code">
    <button @click.prevent="submit">Submit</button>
    <h2 v-if="query && !two_name">Name on your RSVP:</h2>
    <h2 v-if="two_name">Names on your RSVP:</h2>
    <h3>{{one_name}}</h3>
    <h3 v-if="two_name">{{two_name}}</h3>
    <br>

    <!-- Guest Number 1-->
    <h4 v-if="query">Is {{one_name}} attending the Ceremony?</h4>
    <select v-if="query" v-model="one_ceremony">
      <option disabled value="">Please select one</option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <h4 v-if="query">Is {{one_name}} attending the Reception?</h4>
    <select v-if="query" v-model="one_reception">
      <option disabled value="">Please select one</option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <br>
    <h4 v-if="query">What would {{one_name}} like for dinner?</h4>
    <input type="radio" v-if="query" v-model="one_guestFood" id="steak" value="Steak">
    <label v-if="query" for="steak">Steak</label>
    <input type="radio" v-if="query" v-model="one_guestFood" id="chicken" value="Chicken">
    <label v-if="query" for="chicken">Chicken</label>
    <br>

    <!-- Guest Number 2-->
    <h4 v-if="two_name">Is {{two_name}} attending the Ceremony?</h4>
    <select v-if="two_name" v-model="two_ceremony">
      <option disabled value="">Please select one</option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <h4 v-if="two_name">Is {{two_name}} attending the Reception?</h4>
    <select v-if="two_name" v-model="two_reception">
      <option disabled value="">Please select one</option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <br>
    <h4 v-if="two_name">What would {{two_name}} like for dinner?</h4>
    <input type="radio" v-if="two_name" v-model="two_guestFood" id="steak" value="Steak">
    <label v-if="two_name" for="steak">Steak</label>
    <input type="radio" v-if="two_name" v-model="two_guestFood" id="chicken" value="Chicken">
    <label v-if="two_name" for="chicken">Chicken</label>
    <br>

    <!-- Submit and comments section-->
    <h4 v-if="query">Leave us a comment! (Optional)</h4>
    <textarea v-if="query" v-model="comments" placeholder="Write us something cute!"></textarea>
    <br>
    <button v-if="query" @click.prevent="sendRsvp">Send RSVP</button>

  </div>
</template>

<script>

import Firebase from 'Firebase'

let config = {
  apiKey: 'AIzaSyCctzH9u49O2WlgUjZR2sTC7lcdQ3xgnYQ',
  authDomain: 'wedding-7f971.firebaseapp.com',
  databaseURL: 'https://wedding-7f971.firebaseio.com',
  projectId: 'wedding-7f971',
  storageBucket: 'wedding-7f971.appspot.com',
  messagingSenderId: '117898341533'
}
Firebase.initializeApp(config)

export default {
  data () {
    return {
      // TODO: Show previous data if already submitted
      guestInput: '',
      query: false,
      one_name: '',
      one_ceremony: '',
      one_reception: '',
      one_guestFood: '',
      two_name: '',
      two_ceremony: '',
      two_reception: '',
      two_guestFood: '',
      comments: ''
    }
  },
  methods: {
    submit: function () {
      var self = this
      var codeQuery = Firebase.database().ref('guest_code').child(this.guestInput)
      codeQuery.once('value').then(function (snapshot) {
        // TODO: Add more guests
        self.one_name = snapshot.val().one_name
        self.two_name = snapshot.val().two_name
        self.query = true
      })
    },
    sendRsvp: function () {
      // var self = this
      var codeQuery = Firebase.database().ref('guest_code').child(this.guestInput)
      codeQuery.update({'one_food': this.one_guestFood, 'one_attending_ceremony': this.one_reception, 'one_attending_reception': this.one_ceremony})
      if (this.two_name) {
        codeQuery.update({'two_food': this.two_guestFood, 'two_attending_ceremony': this.two_reception, 'two_attending_reception': this.two_ceremony})
      }
      codeQuery.update({'comments': this.comments})
    }
    // TODO: Show the ueser has submitted an RSVP
  }
}
</script>

<style lang="css">
</style>
