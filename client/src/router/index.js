import Vue from 'vue'
import VueRouter from 'vue-router'
import e1000 from '../components/e1000.vue'
import about from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/e1000',
    name: 'e1000',
    component: e1000
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
