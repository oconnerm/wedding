<template lang="html">
  <div id="app" class="container">
    <h1>Join Ryan and Becca!</h1>
    <h2>Find your RSVP by typing in your Code:</h2>
    <button @click.prevent="submit">Submit</button>
    <input v-model="guestInput" placeholder="">
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
  methods: {
    submit: function () {
      var codeQuery = Firebase.database().ref('guest_code').child(this.guestInput)
      codeQuery.once('value').then(function (snapshot) {
        alert('Name: ' + snapshot.val().name + '\nAttending: ' + snapshot.val().attending)
      })
    }
  },
  data () {
    return {
      guestInput: ''
    }
  }
}

</script>

<style lang="css">
</style>
