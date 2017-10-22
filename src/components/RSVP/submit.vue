<template lang="html">
  <div id="app" class="container">
    <h1>Join Becca and Ryan!</h1>

    <b-btn v-b-modal.modal1>Find your reservation</b-btn>

    <b-modal size="lg" :hideFooter='true' ref="my_modal" id="modal1" title="RSVP" @next="sendRsvp">
      <div class="form" v-if="!query">
        <form @submit.stop.prevent="requestNames">
          <b-form-input style="width: 300px; margin: auto; margin-bottom: 20px;" type="text" placeholder="Enter your code" v-model="guestInput"></b-form-input>
          <!-- <br> -->
          <b-btn @click="requestNames" type="button" variant="secondary" name="button">Find My Invitation</b-btn>
        </form>
      </div>
      <div v-if='query'>

        <!-- Guest Number 1-->
        <h5>Guest 1 of {{guest_count}}</h5>
        <h1>{{one_name}}</h1>
        <h4>Will You be able to attend?</h4>
        <div>
          <b-button @click="one_attending = true" :pressed="true" variant="success">Accept</b-button>
          <b-button @click="one_attending = false" :pressed="true" variant="danger">Regret</b-button>
        </div>
        <br>
        <h2>Status</h2>
        <h3 v-if="one_attending">{{one_name}} will be attending.</h3>
        <h3 v-else>{{one_name}} hates Ryan and Becca.</h3>
        <div v-if="isOneGuest">
          <b-btn class="float-right" @click.prevent="sendRsvp" name="button">Submit</b-btn>
        </div>
        <div v-else>
            <b-btn v-b-modal.modal2 @click.prevent="sendRsvp" class="float-right">Next</b-btn>
        </div>
        <br>
      </div>
    </b-modal>

  <!-- Guest Number 2-->
    <b-modal size="lg" :hideFooter='true' ref="my_modal2" id="modal2" title="RSVP" @next="sendRsvp">
      <div v-if='query'>
        <hr>
        <h5>Guest 2 of {{guest_count}}</h5>
        <h1>{{two_name}}</h1>
        <h4>Will You be able to attend?</h4>
        <div>
          <b-button @click="two_attending = true" :pressed="true" variant="success">Accept</b-button>
          <b-button @click="two_attending = false" :pressed="true" variant="danger">Regret</b-button>
        </div>
        <br>
        <h2>Status</h2>
        <h3 v-if="two_attending">{{two_name}} will be attending.</h3>
        <h3 v-else>{{two_name}} hates Ryan and Becca.</h3>
        <b-btn class='float-right' @click.prevent="sendRsvp" name="button">Submit</b-btn>
        <br>
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
      guest: '',
      guestInput: '',
      query: false,
      one_name: '',
      one_attending: false,
      two_name: '',
      two_attending: '',
      comments: '',
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
        self.one_name = snapshot.val().one_name
        self.two_name = snapshot.val().two_name
        self.guest_count = snapshot.val().guest_count
        self.query = true
      })
    },
    hide () {
      this.$refs.my_modal.hide()
    },
    sendRsvp () {
      var codeQuery = Firebase.database().ref('guest_code').child(this.guestInput)
      codeQuery.update({
        'one_attending': this.one_attending
      })
      if (this.two_name) {
        codeQuery.update({
          'two_attending': this.two_attending
        })
      }
      codeQuery.update({
        'comments': this.comments
      })
      this.$refs.my_modal.hide()
      this.$refs.my_modal2.hide()
    }
  },
  props: {
    okDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="css" scoped>
body{
  font-family: 'Oregano', cursive;
}
button{
  font-family: 'Oregano', cursive;
  border-radius: 4px;
}
</style>
