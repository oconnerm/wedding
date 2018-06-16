<template lang="html">
  <div id="app" class="container">
    <h1>Secret Page - The Guest List</h1>
    <div v-if="isVisible">
      <b-button class="button" @click="getGuestsFunc" type="button" name="button">Show List</b-button>
    </div>
    <div v-if="isntVisible">
      <h3 style="text-align: center">Total Attending: {{total_attending}}</h3>
    </div>
    <br>
    <div id="col">
      <p>Name</p>
      <p>Attending?</p>
    </div>
    <hr>
    <div v-for="item in arr">
      <div id="col">
        <p>{{item.one_name}}</p>
        <p>{{item.one_attending}}</p>
      </div>
      <div id="col">
        <p>{{item.two_name}}</p>
        <p>{{item.two_attending}}</p>
      </div>
      <div id="col">
        <p>{{item.three_name}}</p>
        <p>{{item.three_attending}}</p>
      </div>
      <div id="col">
        <p>{{item.four_name}}</p>
        <p>{{item.four_attending}}</p>
      </div>
      <div id="col">
        <p>{{item.five_name}}</p>
        <p>{{item.five_attending}}</p>
      </div>
      <div id="col">
        <p>{{item.plus_one_name}}</p>
      </div>
    </div>
  </div>
</template>

<script>

import Firebase from 'Firebase'

export default {
  data () {
    return {
      arr: [],
      isVisible: true,
      isntVisible: false,
      plusOneVisible: false,
      total_attending: 0
    }
  },

  methods: {
    showListToggle () {
      if (this.isVisible) {
        this.isVisible = false
        this.isntVisible = true
      } else {
        this.isVisible = true
        this.isntVisible = false
      }
    },
    increment () {
      this.total_attending++
    },
    getGuestsFunc () {
      var self = this
      var codeQuery = Firebase.database().ref('guest_code')
      codeQuery.once('value').then(function (snapshot) {
        snapshot.forEach(function (ChildSnapshot) {
          self.arr.push(ChildSnapshot.val())
          if (ChildSnapshot.val().two_name !== undefined) {
            self.arr.push(ChildSnapshot.val().two_name)
          }
          if (ChildSnapshot.val().three_name !== undefined) {
            self.arr.push(ChildSnapshot.val().three_name)
          }
          if (ChildSnapshot.val().four_name !== undefined) {
            self.arr.push(ChildSnapshot.val().four_name)
          }
          if (ChildSnapshot.val().five_name !== undefined) {
            self.arr.push(ChildSnapshot.val().five_name)
          }
          if (ChildSnapshot.val().one_attending === true) {
            self.increment()
          }
          if (ChildSnapshot.val().two_attending === true) {
            self.increment()
          }
          if (ChildSnapshot.val().three_attending === true) {
            self.increment()
          }
          if (ChildSnapshot.val().four_attending === true) {
            self.increment()
          }
          if (ChildSnapshot.val().five_attending === true) {
            self.increment()
          }
          if (ChildSnapshot.val().plus_one_name !== undefined) {
            self.increment()
          }
        })
        self.showListToggle()
      })
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
.btn{
  margin: auto;
  display: flex;
  align-items: center;
}
button{
  border-radius: 5px;
  color: #ffff;
}
p {
  text-align: left;
}
#col {
  -moz-column-count: 2;
  -webkit-column-count: 2;
  column-count: 2;
  padding-left:0;
padding-right:0;
}
</style>
