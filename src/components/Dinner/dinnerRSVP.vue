<template lang="html">
  <div class="dinner-container">
    <div class="form-container">
      <b-form-input v-model="newDinner.name" type="text" placeholder="Enter your Last Name"></b-form-input>
      <b-card header="How many adults in your party?" class="text-center">
        <b-form-select v-model="newDinner.adultsGoing" :options="options" class="mb-3" />
        <h4>{{ adultsGoing }} {{ adultWord }}</h4>
       </b-card>
      <b-card header="How many kids in your party?" class="text-center">
        <b-form-select v-model="newDinner.childrenGoing" :options="options" class="mb-3" />
        <h4>{{ childrenGoing }} {{childrenWord}}</h4>
      </b-card>
      <form id="form" class="form-group" v-on:submit.prevent="dinnerRSVP">
        <input type="submit" class="btn btn-primary button" value="Send Dinner RSVP"></input>
      </form>
    </div>
  </div>
</template>

<script>
import Firebase from 'Firebase'

let dinnerRef = Firebase.database().ref('dinner')

export default {
  firebase: {
    dinner: dinnerRef
  },
  data () {
    return {
      newDinner: {
        name: '',
        adultsGoing: null,
        childrenGoing: null
      },
      options: [
       { value: 0, text: '0' },
       { value: 1, text: '1' },
       { value: 2, text: '2' },
       { value: 3, text: '3' },
       { value: 4, text: '4' },
       { value: 5, text: '5' }
      ]
    }
  },
  computed: {
    adultWord () {
      let word
      if (this.adultsGoing === 1) {
        word = 'Adult'
      } else if (this.adultsGoing > 1) {
        word = 'Adults'
      }
      return word
    },
    childrenWord () {
      let word
      if (this.childrenGoing === 1) {
        word = 'Child'
      } else if (this.childrenGoing > 1) {
        word = 'Children'
      }
      return word
    },
    dinnerRSVP: function () {
      if (this.newDinner.name === '' || this.newDinner.adultsGoing === '' || this.newDinner.childrenGoing === '') {
        alert('Please fill in all fields')
      } else {
        dinnerRef.push(this.newDinner)
        this.newDinner.name = ''
        this.newDinner.adultsGoing = ''
        this.newDinner.childrenGoing = ''
      }
    }
  }
}
</script>

<style lang="css" scoped>
.form-container{
  width: 40vw;
  margin: auto;
}
.form-control {
  margin-bottom: 50px;
}
.dinner-container{
  width: 100%;
  padding: 1rem 0.5rem 2.5rem 0.5rem;
  text-align:center;
  position: relative;
}
.form-group {
  padding: 5px;
  margin: 5px;
  display: inline-block !important;
}
</style>
