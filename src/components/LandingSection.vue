<template>
  <div class="main">
    <router-link to="home">
      <button type="button" name="button">HOME</button>
    </router-link>
    <router-link to="about">
      <button type="button" name="button">ABOUT</button>
    </router-link>
    <router-link to="location">
      <button type="button" name="button">LOCATION</button>
    </router-link>
    <router-link to="rsvp">
      <button type="button" name="button">RSVP</button>
    </router-link>
    <router-link to="Register">
      <button type="button" name="button">REGISTER</button>
    </router-link>
    <!--

    <a class="buttons" href="#register">REGISTER</a> -->
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
