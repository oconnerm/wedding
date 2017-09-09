import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/HomeSection'
import Wedding from '@/components/Wedding/WeddingSection'
import Registry from '@/components/Registry/RegistrySection'
import Rsvp from '@/components/RSVP/RsvpSection'
import Party from '@/components/Party/PartySection'
import Photos from '@/components/Photos/PhotoSection'
import GuestList from '@/components/GuestList/GuestListSection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/saveDate'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/registry',
      name: 'Registry',
      component: Registry
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
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/guestlist',
      name: 'GuestList',
      component: GuestList
    },
    {
      path: '/saveDate',
      name: 'saveDate',
      component: Home
    }
  ]
})
