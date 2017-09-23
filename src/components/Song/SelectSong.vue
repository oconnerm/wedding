<template lang="html">
  <div id="app" class="container">
    <div class="panel-headin">
      <h3>Request a song!</h3>
    </div>
    <div class="panel-body">
      <form id="form" class="form-inline" v-on:submit.prevent="addSong">
        <div class="form-group">
          <label for="songArtist">Artist:</label>
          <input type="text" id="songArtist" class="form-control" v-model="newSong.artist">
        </div>
        <div class="form-group">
          <label for="songTitle">Title:</label>
          <input type="text" id="songTitle" class="form-control" v-model="newSong.title">
        </div>
        <div class="form-group">
          <label for="songName">Your Name:</label>
          <input type="text" id="songName" class="form-control" v-model="newSong.name">
        </div>
        <input type="submit" class="btn btn-primary" value="Add Song"></input>
      </form>
    </div>
  <div class="panel-heading">
    <h3>Songs Requested</h3>
  </div>
  <div class="panel-body">
    <table class="tabel table-striped">
      <thead name="newSong">
        <tr>
          <th>
            Artist
          </th>
          <th>
            Title
          </th>
          <th>
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song in songs">
          <td>
            {{song.artist}}
          </td>
          <td>
            {{song.title}}
          </td>
          <td>
            {{song.name}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
    <!-- <button @click="getGuestsFunc" type="button" name="button">Get List</button>
    <div v-for="item in arr">
      <h3>{{item.artist}}</h3>
      <h3>{{item.title}}</h3>
      <h3>{{item.name}}</h3>
    </div> -->
  </div>
</template>

<script>

import Firebase from 'Firebase'

let songRef = Firebase.database().ref('songs')

export default {
  firebase: {
    songs: songRef
  },
  data () {
    return {
      newSong: {
        artist: '',
        title: '',
        name: ''
      }
    }
  },
  methods: {
    addSong: function () {
      if (this.newSong.title === '' || this.newSong.artist === '' || this.newSong.name === '') {
        alert('Please fill in all fields')
      } else {
        songRef.push(this.newSong)
        this.newSong.artist = ''
        this.newSong.title = ''
        this.newSong.name = ''
      }
    }
  }
}
</script>

<style lang="css">
</style>
