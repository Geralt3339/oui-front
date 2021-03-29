import Vue from 'vue'
import Router from 'vue-router'

import errorComponent from '../layouts/error'
import index from '../pages/index'
import addLink from '../pages/addLink'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/oui-front/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/addLink',
      name: 'addLink',
      component: addLink
    },
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '*',
      name: '404',
      component: errorComponent
    }
  ]
})
