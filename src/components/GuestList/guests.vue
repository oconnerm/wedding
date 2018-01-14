<template lang="html">
  <div id="app" class="container">
    <h1>Secret Page - The Guest List</h1>
    <b-btn @click="getGuestsFunc" class="btn" type="button" name="button">Show List</b-btn>
    <br>
    <div id="col">
      <p>Name</p>
      <p>Is Attending?</p>
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
      arr: []
    }
  },

  methods: {
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
        })
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
  font-family: 'Oregano', cursive;
  border-radius: 5px;
}
p {
  text-align: left;
}
#col {
  -moz-column-count: 2;
  -webkit-column-count: 2;
  column-count: 2;
}
</style>
