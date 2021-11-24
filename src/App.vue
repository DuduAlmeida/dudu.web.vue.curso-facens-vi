<template>
  <v-app>
    <StatusBar></StatusBar>
    <NavBar></NavBar>
    <v-content
      :class="{
        'content-bg': true
      }"
    >
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
    <BottomNavBar></BottomNavBar>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import StatusBar from '@/components/StatusBar.vue'
import BottomNavBar from '@/components/BottomNavBar.vue'

export default {
  name: 'App',
  components: {
      NavBar,
      Footer,
      BottomNavBar,
      StatusBar,
  },
}
</script>

<style lang="scss">
.content-bg {
  background-color: #f9f9f9;
}
.card {
  background: #f9f9f9 !important;
}
</style>
