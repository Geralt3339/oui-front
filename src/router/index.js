import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/index'
import addLink from '../views/addLink'
import errorComponent from '../layouts/error'

Vue.use(VueRouter)

const routes = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
