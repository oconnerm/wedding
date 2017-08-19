<template lang="html">
  <div id="app" class="container">
    <h1>Guest List</h1>
    <button @click="getGuestsFunc" type="button" name="button">Get List</button>
    <div v-for="item in arr">
      <h3>{{item.one_name}}</h3>
      <h3>{{item.one_attending_ceremony}}</h3>
      <h3>{{item.one_attending_reception}}</h3>
      <h3>{{item.comments}}</h3>
      <h3>{{item.two_name}}</h3>
      <h3>{{item.two_attending_ceremony}}</h3>
      <h3>{{item.two_attending_reception}}</h3>
      <h3>{{item.three_name}}</h3>
      <h3>{{item.three_attending_ceremony}}</h3>
      <h3>{{item.three_attending_reception}}</h3>
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

<style lang="css">
</style>
