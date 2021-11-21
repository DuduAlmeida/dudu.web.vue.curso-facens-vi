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
    momentToString: (moment) => {
      if (`${moment}`.length == 2)
        return '' + moment;

      return '0' + moment;
    }
  },
  mounted() {
    this.timeFormatted = `${this.momentToString(this.time.getHours())}:${this.momentToString(this.time.getMinutes())}`;
  }
}
</script>