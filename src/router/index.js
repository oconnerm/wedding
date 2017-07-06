import Vue from 'vue'
import Router from 'vue-router'
// import Landing from '@/components/LandingSection'
import Home from '@/components/Home/HomeSection'
import About from '@/components/About/AboutSection'
import Locations from '@/components/Location/LocationSection'
import Registery from '@/components/Registery/RegisterySection'
import Rsvp from '@/components/RSVP/RsvpSection'
import WeddingParty from '@/components/WeddingParty/WeddingPartySection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/location',
      name: 'Location',
      component: Locations
    },
    {
      path: '/registery',
      name: 'Registery',
      component: Registery
    },
    {
      path: '/rsvp',
      name: 'RSVP',
      component: Rsvp
    },
    {
      path: '/WeddingParty',
      name: 'WeddingParty',
      component: WeddingParty
    }
  ]
})
