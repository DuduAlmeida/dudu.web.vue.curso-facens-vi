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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
