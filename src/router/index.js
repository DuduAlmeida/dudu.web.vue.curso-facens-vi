import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import StatusBar from '@/components/StatusBar.vue'
import BottomNavBar from '@/components/BottomNavBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      NavBar,
      Footer,
      BottomNavBar,
      StatusBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: {
      NavBar,
      Footer,
      StatusBar,
      BottomNavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/list-pokemon',
    name: 'ListPokemon',
    component: {
      NavBar,
      Footer,
      StatusBar,
      BottomNavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/ListPokemon.vue')
    }
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: {
      NavBar,
      Footer,
      StatusBar,
      BottomNavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Pokemon.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
