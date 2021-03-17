import Vue from 'vue'
import VueRouter from 'vue-router'
import e1000 from '../components/E1000.vue'
import addElement from '../components/AddElement.vue'
import element from '../components/Element.vue'
import elements from '../components/Elements.vue'
import about from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/e1000',
    name: 'e1000',
    component: e1000
  },
  {
    path: '/addElement',
    name: 'addElement',
    component: addElement
  },

  {
    path: '/element/:elementId',
    name: 'element',
    component: element
  },

  {
    path: '/elements',
    name: 'elements',
    component: elements
  },

  {
    path: '/about',
    name: 'About',
    component: about
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
