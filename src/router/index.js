import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/HomeSection'
import Wedding from '@/components/Wedding/WeddingSection'
import Registery from '@/components/Registery/RegisterySection'
import Rsvp from '@/components/RSVP/RsvpSection'
import Party from '@/components/Party/PartySection'
import Travel from '@/components/Travel/TravelSection'

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
      path: '/party',
      name: 'Party',
      component: Party
    },
    {
      path: '/wedding',
      name: 'Wedding',
      component: Wedding
    },
    {
      path: '/travel',
      name: 'Travel',
      component: Travel
    }
  ]
})
