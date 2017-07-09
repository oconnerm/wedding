<template lang="html">
  <div id="app" class="container">
    <h1>Join Ryan and Becca!</h1>
    <h2>Find your RSVP by typing in your Code:</h2>
    <input v-model="guestInput" placeholder="Your code">
    <button @click.prevent="submit">Submit</button>
    <h2 v-if="submitted">Name on your RSVP:</h2>
    <h3>{{one_name}}</h3>
    <h3 v-if="two_name">{{two_name}}</h3>

    <!-- Guest Number 1-->
    <h3 v-if="submitted"> {{one_name}} is attending Ceremony?</h3>
    <select v-if="submitted" v-model="one_ceremony">
      <option disabled value="">Please select one</option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <h3 v-if="submitted">{{one_name}} is attending Reception?</h3>
    <select v-if="submitted" v-model="one_reception">
      <option disabled value="">Please select one</option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <br>
    <input type="radio" v-if="submitted" v-model="one_guestFood" id="steak" value="Steak">
    <label v-if="submitted" for="steak">Steak</label>
    <input type="radio" v-if="submitted" v-model="one_guestFood" id="chicken" value="Chicken">
    <label v-if="submitted" for="chicken">Chicken</label>

    <!-- Guest Number 2-->
    <h3 v-if="two_name"> {{two_name}} is attending Ceremony?</h3>
    <select v-if="two_name" v-model="two_ceremony">
      <option disabled value="">Please select one</option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <h3 v-if="two_name">{{two_name}} is attending Reception?</h3>
    <select v-if="two_name" v-model="two_reception">
      <option disabled value="">Please select one</option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <br>
    <input type="radio" v-if="_2" v-model="two_guestFood" id="steak" value="Steak">
    <label v-if="two_name" for="steak">Steak</label>
    <input type="radio" v-if="two_name" v-model="two_guestFood" id="chicken" value="Chicken">
    <label v-if="two_name" for="chicken">Chicken</label>

    <textarea v-if="submitted" v-model="comments" placeholder="Write us something cute!"></textarea>

    <button v-if="submitted" @click.prevent="sendRsvp">Send RSVP</button>

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
      guestInput: '',
      submitted: false,
      one_guestFood: '',
      one_ceremony: '',
      one_reception: '',
      one_name: '',
      two_name: '',
      two_guestFood: '',
      two_ceremony: '',
      two_reception: '',
      comments: ''
    }
  },
  methods: {
    submit: function () {
      var self = this
      var codeQuery = Firebase.database().ref('guest_code').child(this.guestInput)
      codeQuery.once('value').then(function (snapshot) {
        // alert(snapshot.val().name)
        self.one_name = snapshot.val().one_name
        self.two_name = snapshot.val().two_name
        self.submitted = true
      })
    },
    sendRsvp: function () {
      // var self = this
      var codeQuery = Firebase.database().ref('guest_code').child(this.guestInput)
      codeQuery.update({'one_food': this.one_guestFood, 'one_attending_ceremony': this.one_reception, 'one_attending_reception': this.one_ceremony})
      codeQuery.update({'two_food': this.two_guestFood, 'two_attending_ceremony': this.two_reception, 'two_attending_reception': this.two_ceremony})
      codeQuery.update({'comments': this.comments})
    }
  }
}
</script>

<style lang="css">
</style>
