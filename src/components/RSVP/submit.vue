<template lang="html">
  <div id="app" class="wedding-container">
    <p>On your invitation there will be a 4 digit code. Type your code with the link below to find your invitation. Invitations will be sent a few months before the wedding </p>
    <b-btn v-b-modal.modal1 class="button" @click="clearArray">Find your Invitation</b-btn>
    <b-modal size="lg" :hideFooter='true' ref="my_modal" id="modal1" title="RSVP" @next="sendRsvp">
      <div class="form" v-if="!query">
        <form @submit.stop.prevent="requestNames">
          <b-alert variant="danger" dismissible :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
            Sorry, could not find your code. Please check your Invitation.
          </b-alert>
          <b-form-input style="margin: auto; margin-bottom: 20px;" type="text" placeholder="Enter your guest code" v-model="guestInput"></b-form-input>
          <!-- <br> -->
          <b-btn @click="requestNames" type="button" variant="secondary" name="button" class="button">Find My Invitation</b-btn>
        </form>
      </div>
      <div v-if='query'>
        <h4>Will {{one_name}} be able to attend?</h4>
        <div class="button-div">
          <b-button @click="one_attending = true" :pressed="true" variant="success">Accept</b-button>
          <b-button @click="one_attending = false" :pressed="true" variant="danger">Regret</b-button>
        </div>
        <br>
        <div v-if="one_attending">
          <h5>{{one_name}} will be attending!</h5>
          <img src="../../../src/assets/happy.png" />
        </div>
        <div v-else>
          <h5>{{one_name}} will <span id="not">not be</span> attending.</h5>
          <img src="../../../src/assets/sad.png" />
        </div>
      </div>
        <!-- Guest Number 2-->
        <div v-if="two_name">
          <img class='barley' src="../../../src/assets/barley_up.png"/>
          <h4>Will {{two_name}} be able to attend?</h4>
          <div class="button-div">
            <b-button @click="two_attending = true" :pressed="true" variant="success">Accept</b-button>
            <b-button @click="two_attending = false" :pressed="true" variant="danger">Regret</b-button>
          </div>
          <br>
          <div v-if="two_attending">
            <h5>{{two_name}} will be attending!</h5>
            <img src="../../../src/assets/happy.png" />
          </div>
          <div v-else>
            <h5>{{two_name}} will <span id="not">not be</span> attending.</h5>
            <img src="../../../src/assets/sad.png" />
          </div>
        </div>
        <!-- Guest Number 3-->
        <div v-if="three_name">
          <img class='barley' src="../../../src/assets/barley_up.png"/>
          <h4>Will {{three_name}} be able to attend?</h4>
          <div class="button-div">
            <b-button @click="three_attending = true" :pressed="true" variant="success">Accept</b-button>
            <b-button @click="three_attending = false" :pressed="true" variant="danger">Regret</b-button>
          </div>
          <br>
          <div v-if="three_attending">
            <h5>{{three_name}} will be attending!</h5>
            <img src="../../../src/assets/happy.png" />
          </div>
          <div v-else>
            <h5>{{three_name}} will <span id="not">not be</span> attending.</h5>
            <img src="../../../src/assets/sad.png" />
          </div>
        </div>
        <!-- Guest Number 4-->
        <div v-if="four_name">
          <img class='barley' src="../../../src/assets/barley_up.png"/>
          <h4>Will {{four_name}} be able to attend?</h4>
          <div class="button-div">
            <b-button @click="four_attending = true" :pressed="true" variant="success">Accept</b-button>
            <b-button @click="four_attending = false" :pressed="true" variant="danger">Regret</b-button>
          </div>
          <br>
          <div v-if="four_attending">
            <h5>{{four_name}} will be attending!</h5>
            <img src="../../../src/assets/happy.png" />
          </div>
          <div v-else>
            <h5>{{four_name}} will <span id="not">not be</span> attending.</h5>
            <img src="../../../src/assets/sad.png" />
          </div>
        </div>
      <!-- Guest Number 5-->
      <div v-if="five_name">
        <img class='barley' src="../../../src/assets/barley_up.png"/>
        <h4>Will {{five_name}} be able to attend?</h4>
        <div class="button-div">
          <b-button @click="five_attending = true" :pressed="true" variant="success">Accept</b-button>
          <b-button @click="five_attending = false" :pressed="true" variant="danger">Regret</b-button>
        </div>
        <br>
        <div v-if="five_attending">
          <h5>{{five_name}} will be attending!</h5>
          <img src="../../../src/assets/happy.png" />
        </div>
        <div v-else>
          <h5>{{five_name}} will <span id="not">not be</span> attending.</h5>
          <img src="../../../src/assets/sad.png" />
        </div>
      </div>
      <!-- plus one options -->
      <div v-if="plus_one" class="button-div">
        <img class='barley' src="../../../src/assets/barley_up.png"/>
        <h4>Do you have a plus one?</h4>
        <b-button @click="has_plus_one = true" :pressed="true" variant="primary">Yes</b-button>
        <b-button @click="has_plus_one = false" :pressed="true" variant="primary">No</b-button>
        <br>
        <div v-if="plus_one">
          <b-col sm="10">
            <br>
            <div v-if="has_plus_one">
              <div class="input">
                <b-form-input id="input-default" type="text" v-model="plus_one_name" placeholder="Enter guest name"></b-form-input>
              </div>
            </div>
          </b-col>
        </div>
      </div>
      <div v-if="submitShow">
        <div class="submit">
            <b-btn class="float-right" id="sbumit-button" @click.prevent="sendRsvp" name="button">Submit</b-btn>
        </div>
      </div>
    </b-modal>
    <b-alert class="alert" show variant="success" dismissible :show="showSuccessAlert" @dismissed="showSuccessAlert=false">
        {{successSentence}} Before you go, click <a href="javascript:void(0)" @click='songLink' class="alert-link"> here</a> to request songs!
    </b-alert>
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
      attendingArr: [],
      guest: '',
      guestInput: '',
      query: false,
      one_name: '',
      one_attending: '',
      two_name: '',
      two_attending: '',
      guest_count: '',
      three_name: '',
      three_attending: '',
      four_name: '',
      four_attending: '',
      five_name: '',
      five_attending: '',
      plus_one: '',
      submitShow: false,
      plus_one_name: '',
      has_plus_one: '',
      showDismissibleAlert: false,
      showSuccessAlert: false
    }
  },
  computed: {
    isOneGuest () {
      let val = false
      if (this.guest_count === 1) {
        val = true
      }
      return val
    },
    successSentence () {
      let sentence = 'Thank you for letting us know!'
      let arrLength = this.attendingArr.length
      if (arrLength > 0) {
        let final = `${this.attendingArr[0]}`
        if (arrLength >= 3) {
          const lastElement = this.attendingArr[arrLength - 1]
          this.attendingArr.splice((arrLength - 1), 1)
          let middle = this.attendingArr.join(', ')
          let end = `, and ${lastElement}`
          final = `${middle} ${end}`
        } else if (arrLength === 2) {
          final = `${this.attendingArr[0]} and ${this.attendingArr[1]}`
        }
        sentence = `Thank you! We'll see ${final} at the wedding.`
      }
      return sentence
    }
  },
  methods: {
    clearArray () {
      this.attendingArr = []
    },
    submitToggle () {
      if (this.submitShow) {
        this.submitShow = false
      } else {
        this.submitShow = true
      }
    },
    songLink () {
      this.$router.push({ path: 'SongRequest' })
    },
    requestNames () {
      let code = this.guestInput.toLowerCase()
      var self = this
      if (!code) {
        self.showDismissibleAlert = true
        return
      }
      var codeQuery = Firebase.database().ref('guest_code').child(code)
      codeQuery.once('value').then(function (snapshot) {
        if (!snapshot.val()) {
          self.showDismissibleAlert = true
        } else {
          self.one_name = snapshot.val().one_name
          self.two_name = snapshot.val().two_name
          self.three_name = snapshot.val().three_name
          self.four_name = snapshot.val().four_name
          self.five_name = snapshot.val().five_name
          self.guest_count = snapshot.val().guest_count
          self.plus_one = snapshot.val().plus_one
          self.query = true
          self.submitToggle()
        }
      })
    },
    hide () {
      this.$refs.my_modal.hide()
    },
    sendRsvp () {
      let guestInput = this.guestInput.toLowerCase()
      var codeQuery = Firebase.database().ref('guest_code').child(guestInput)
      codeQuery.update({
        'one_attending': this.one_attending
      })
      if (this.two_name) {
        codeQuery.update({
          'two_attending': this.two_attending
        })
      }
      if (this.three_name) {
        codeQuery.update({
          'three_attending': this.three_attending
        })
      }
      if (this.four_name) {
        codeQuery.update({
          'four_attending': this.four_attending
        })
      }
      if (this.five_name) {
        codeQuery.update({
          'five_attending': this.five_attending
        })
      }
      if (this.plus_one_name) {
        codeQuery.update({
          'plus_one_name': this.plus_one_name
        })
        this.attendingArr.push(this.plus_one_name)
      }
      if (this.one_attending) {
        this.attendingArr.push(this.one_name)
      }
      if (this.two_attending) {
        this.attendingArr.push(this.two_name)
      }
      if (this.three_attending) {
        this.attendingArr.push(this.three_name)
      }
      if (this.four_attending) {
        this.attendingArr.push(this.four_name)
      }
      if (this.five_attending) {
        this.attendingArr.push(this.five_name)
      }
      this.showSuccessAlert = true
      // this.submitToggle()
      this.$refs.my_modal.hide()
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
  button.btn.btn-secondary{
    margin: auto;
    display: flex;
    align-items: center;
  }
  h4, h5{
    text-align: center;
  }
  div.button-div{
    text-align: center;
  }
#not{
  font-style: italic;
}
body{
  font-family: 'Oregano', cursive;
}
button{
  border-radius: 4px;
}
img {
    display: block;
    margin: auto;
    margin-bottom: 50px;
}
.alert {
  margin: 15px;
}
.barley{
    width: 50vw;
    height: 5vw;
}
.submit{
  margin-top: 20px;
}
.btn-secondary{
  color: #ffff;
}
.btn-secondary:hover{
    color: #5f1e1a;
}
div.wedding-container hr{
  width: 100%;
  max-width:1100px;
}
div.wedding-container p{
  margin-left: 220px;
  margin-right: 220px;
}
div.wedding-container {
  width: 100%;
  padding: 1rem 0.5rem 2.5rem 0.5rem;
  text-align:center;
  position: relative;
}
div.wedding-container p{
  margin-left: 15vw;
  margin-right: 15vw;
}
#sbumit-button{
  background-color: #5f1e1a;
  color: #fff;
}
#sbumit-button:hover{
  background-color: #fdc666;
  color: #5f1e1a;
}
/* .float-right .btn .btn-secondary{
  color: #5f1e1a;
} */
</style>
