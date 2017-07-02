<template>
  <div class="main">
    <a class="buttons" href="#home">HOME</a>
    <a class="buttons" href="#about">ABOUT</a>
    <a class="buttons" href="#location">LOCATION</a>
    <a class="buttons" href="#rsvp">RSVP</a>
    <a class="buttons" href="#register">REGISTER</a>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: "Hello welcome to Becca and Ryan's Wedding page!!!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.buttons {
  border: none;
  display: inline-block;
  outline: 0;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
}
</style>
