import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/homefolder/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
