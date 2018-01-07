<template lang="html">
  <div>
    <agile>
        <div class="slide slide--1"><h3>slide 1</h3></div>
        <div class="slide slide--2"><h3>slide 2</h3></div>
        <div class="slide slide--3"><h3>slide 3</h3></div>
        <div class="slide slide--4"><h3>slide 4</h3></div>
        <div class="slide slide--5"><h3>slide 5</h3></div>
        <div class="slide slide--6"><h3>slide 6</h3></div>
    </agile>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)
</script>

<style>
.slide {
    color: #fff;
    height: 300px;
    position: relative;
    &--1 {
        background-color: #f1c40f;
    }
    h3 {
        font-size: 32px;
        font-weight: 300;
        left: 50%;
        margin: 0;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
