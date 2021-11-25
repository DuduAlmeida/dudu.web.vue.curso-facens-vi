<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
  >
    <v-btn
      href
      router
      to="/"
    >
      <span>HOME</span>

      <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
    </v-btn>

    <v-btn
      href
      router
      to="/about"
    >
      <span>About</span>

      <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
    </v-btn>

    <v-btn
      href
      router
      to="/pokemon"
    >
      <span>Pokemon</span>

      <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
    </v-btn>

    <v-btn
      href
      router
      to="/listpokemon"
    >
      <span>ListPokemon</span>

      <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: 'recent',
  }),
}
</script>