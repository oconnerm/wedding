<template lang="html">
  <div id="app" class="wedding-container">
    <form id="form" class="form-inline" v-on:submit.prevent="addSong">
      <div class="form-group">
        <input type="text" placeholder="Artist" id="songArtist" class="form-control" v-model="newSong.artist">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Title" id="songTitle" class="form-control" v-model="newSong.title">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Your Name" id="songName" class="form-control" v-model="newSong.name">
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-primary button" value="Request Song"></input>
      </div>
    </form>
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
.wedding-container hr{
  width: 100%;
  max-width:1400px;
}
.wedding-container {
  width: 100%;
  text-align:center;
  position: relative;
  display: inline-block;
}
.form-group {
  padding: 5px;
  margin: 5px;
  display: inline-block !important;
}
.form-inline {
  display: inline-block;
}
</style>
