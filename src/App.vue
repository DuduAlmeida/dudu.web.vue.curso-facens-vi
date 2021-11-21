<template>
  <v-app>
    <router-view name="StatusBar"></router-view>
    <router-view name="NavBar"></router-view>
    <v-content
      :class="{
        'content-bg': true
      }"
    >
      <router-view></router-view>
    </v-content>
    <router-view name="Footer"></router-view>
    <router-view name="BottomNavBar"></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App'
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
