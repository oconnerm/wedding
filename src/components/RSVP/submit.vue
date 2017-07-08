<template lang="html">
  <div id="app" class="container">
    <h1>Join Ryan and Becca!</h1>
    <h2>Find your RSVP by typing in your Code:</h2>
    <input v-model="guestInput" placeholder="Your code">
    <button @click.prevent="submit">Submit</button>
    <h2 v-if="submitted">Name on your RSVP: {{name}}</h2>
    <input type="radio" v-if="submitted" v-model="guestFood" id="steak" value="Steak">
    <label v-if="submitted" for="steak">Steak</label>
    <input type="radio" v-if="submitted" v-model="guestFood" id="chicken" value="Chicken">
    <label v-if="submitted" for="chicken">Chicken</label>
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
      name: ''
    }
  },
  methods: {
    submit: function () {
      var self = this
      var codeQuery = Firebase.database().ref('guest_code').child(this.guestInput)
      codeQuery.once('value').then(function (snapshot) {
        // alert(snapshot.val().name)
        self.name = snapshot.val().name
        self.submitted = true
      })
    },
    sendRsvp: function () {
      var self = this
      var codeQuery = Firebase.database().ref('guest_code').child(this.guestInput)
      codeQuery.once('value').then(function (snapshot) {
        // alert(snapshot.val().name)
        self.name = snapshot.val().name
        self.submitted = true
      })
    }
  }
}
</script>

<style lang="css">
</style>
