<template lang="html">
  <div id="app" class="container">
    <h1>Join Becca and Ryan!</h1>

    <b-btn v-b-modal.modal1>Find your reservation</b-btn>
    <b-modal size="lg" :hideFooter='true' ref="my_modal" id="modal1" title="RSVP" @next="sendRsvp">
      <div class="form" v-if="!query">
        <form @submit.stop.prevent="requestNames">
          <b-form-input style="width: 300px; margin: auto; margin-bottom: 20px;" type="text" placeholder="Enter your code" v-model="guestInput"></b-form-input>
          <!-- <br> -->
          <b-button @click="requestNames" type="button" variant="secondary" name="button">Find My Invitation</b-button>
        </form>
      </div>
      <div v-if='query'>
        <div v-if="!two_name">
          <h2>Name on your RSVP:</h2>
          <h3>{{one_name}}</h3>
        </div>
        <div v-else>
          <h2>Names on your RSVP:</h2>
          <h3>{{one_name}}</h3>
          <h3>{{two_name}}</h3>
        </div>
        <hr>

        <!-- Guest Number 1-->
        <h4>Is {{one_name}} attending the Ceremony?</h4>
        <select v-model="one_ceremony">
          <option disabled value="">Please select one</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <h4>Is {{one_name}} attending the Reception?</h4>
        <select v-model="one_reception">
          <option disabled value="">Please select one</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <br>
        <h4>What would {{one_name}} like for dinner?</h4>
        <input type="radio" v-model="one_guestFood" id="steak" value="Steak">
        <label for="steak">Steak</label>
        <input type="radio" v-if="query" v-model="one_guestFood" id="chicken" value="Chicken">
        <label for="chicken">Chicken</label>
        <br>

        <!-- Guest Number 2-->
        <div v-if="two_name">
          <hr>
          <h4>Is {{two_name}} attending the Ceremony?</h4>
          <select v-model="two_ceremony">
            <option disabled value="">Please select one</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <h4 >Is {{two_name}} attending the Reception?</h4>
          <select v-model="two_reception">
            <option disabled value="">Please select one</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <br>
          <h4 >What would {{two_name}} like for dinner?</h4>
          <input type="radio" v-if="two_name" v-model="two_guestFood" id="steak" value="Steak">
          <label  for="steak">Steak</label>
          <input type="radio" v-if="two_name" v-model="two_guestFood" id="chicken" value="Chicken">
          <label for="chicken">Chicken</label>
          <br>
          <hr>
        </div>
        <!-- Submit and comments section-->
        <h4>Leave us a comment! (Optional)</h4>
        <textarea v-model="comments" placeholder="Write us something cute!"></textarea>
        <button @click.prevent="sendRsvp" name="button">Submit</button>
      </div>
    </b-modal>
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
      two_attending: '',
      guest_count: ''
    }
  },
  computed: {
    isOneGuest () {
      let val = false
      if (this.guest_count === 1) {
        val = true
      }
      return val
    }
  },
  methods: {
    requestNames (code) {
      var self = this
      var codeQuery = Firebase.database().ref('guest_code').child(this.guestInput)
      codeQuery.once('value').then(function (snapshot) {
        // TODO: Add more guests
        self.one_name = snapshot.val().one_name
        self.two_name = snapshot.val().two_name
        self.query = true
      })
      return code.cancel()
    },

    sendRsvp () {
      var codeQuery = Firebase.database().ref('guest_code').child(this.guestInput)
      codeQuery.update({'one_food': this.one_guestFood, 'one_attending_ceremony': this.one_reception, 'one_attending_reception': this.one_ceremony})
      if (this.two_name) {
        codeQuery.update({'two_food': this.two_guestFood, 'two_attending_ceremony': this.two_reception, 'two_attending_reception': this.two_ceremony})
      }
      codeQuery.update({'comments': this.comments})
      this.$refs.my_modal.hide()
    }
    // TODO: Show the ueser has submitted an RSVP
  },
  props: {
    okDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="css">
</style>
