<template>
  <div>
    <v-system-bar
      dark
      color="indigo darken-2"
    >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>{{ timeFormatted }}</span>
    </v-system-bar>
  </div>
</template>


<script>
export default {
  data: () => ({
    time: new Date(),
    timeFormatted: '',
  }),
  methods: {
  },
  mounted() {
    this.timeFormatted = `${this.time.getHours()}:${this.time.getMinutes()}`;
  }
}
</script>