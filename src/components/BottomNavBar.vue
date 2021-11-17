<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
  >
    <v-btn>
      <span>Primeiro</span>

      <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
    </v-btn>

    <v-btn>
      <span>Segundo</span>

      <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
    </v-btn>

    <v-btn>
      <span>Terceiro</span>

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