<template lang="html">
  <div id="app" class="container">
    <h1>Secret Page - The Guest List</h1>
      <h3 style="text-align: center">Total Attending: {{totalCount}}</h3>
    <br>
    <template>
      <b-table striped :items="items" :fields="fields"></b-table>
    </template>
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
      total_attending: 0,
      fields: {
        name: {
          label: 'Name',
          sortable: true
        },
        attending: {
          label: 'Attending',
          sortable: true
        },
        party: {
          label: 'Party',
          sortable: true
        }
      },
      items: []
    }
  },
  beforeMount: function () {
    console.log('beforeMount')
    function trueFalseMap (val) {
      let answer
      if (val === true) {
        answer = 'Yes'
      } else if (val === false) {
        answer = 'No'
      } else {
        answer = 'No Response'
      }
      return answer
    }
    function partyMap (val) {
      let lastName = val.split(' ')[1]
      let First = val.split(' ')[0].split('')[0]
      return `${First}. ${lastName}`
    }
    var self = this
    var codeQuery = Firebase.database().ref('guest_code')
    codeQuery.once('value').then(function (snapshot) {
      snapshot.forEach(function (ChildSnapshot) {
        self.items.push({
          party: partyMap(ChildSnapshot.val().one_name),
          name: ChildSnapshot.val().one_name,
          attending: trueFalseMap(ChildSnapshot.val().one_attending)
        })
        if (ChildSnapshot.val().two_name !== undefined) {
          self.items.push({
            party: partyMap(ChildSnapshot.val().one_name),
            name: ChildSnapshot.val().two_name,
            attending: trueFalseMap(ChildSnapshot.val().two_attending)
          })
        }
        if (ChildSnapshot.val().three_name !== undefined) {
          self.items.push({
            party: partyMap(ChildSnapshot.val().one_name),
            name: ChildSnapshot.val().three_name,
            attending: trueFalseMap(ChildSnapshot.val().three_attending)
          })
        }
        if (ChildSnapshot.val().four_name !== undefined) {
          self.items.push({
            party: partyMap(ChildSnapshot.val().one_name),
            name: ChildSnapshot.val().four_name,
            attending: trueFalseMap(ChildSnapshot.val().four_attending)
          })
        }
        if (ChildSnapshot.val().five_name !== undefined) {
          self.items.push({
            party: partyMap(ChildSnapshot.val().one_name),
            name: ChildSnapshot.val().five_name,
            attending: trueFalseMap(ChildSnapshot.val().five_attending)
          })
        }
      })
    })
  },
  computed: {
    totalCount () {
      let result = 0
      console.log('mounted')
      let guestArr = this.items
      for (let i = 0; i < guestArr.length; i++) {
        if (guestArr[i].attending === 'Yes') {
          console.log('count', guestArr[i])
          result++
        }
      }
      return result
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
</style>
