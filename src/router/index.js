import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/listpokemon',
    name: 'ListPokemon',
    component: () => import(/* webpackChunkName: "listpokemon" */ '../views/ListPokemon.vue')
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: "pokemon" */ '../views/Pokemon.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
