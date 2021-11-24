import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: {
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/listpokemon',
    name: 'ListPokemon',
    component: {
      default: () => import(/* webpackChunkName: "about" */ '../views/ListPokemon.vue')
    }
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: {
      default: () => import(/* webpackChunkName: "about" */ '../views/Pokemon.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
