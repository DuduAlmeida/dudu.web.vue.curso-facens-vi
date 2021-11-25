<template>
  <div id="home" class="pa-4">
    <v-container fluid>
      <h3 class="headline font-weight-medium">Listagem Pokémons (MOCKUP):</h3>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="i in loading ? 4 : 8"
          :key="i"
          class="mx-xs-auto"
        >
          <v-skeleton-loader type="card-avatar" :loading="loading">
            <pokemonCard></pokemonCard>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import pokemonCard from '@/components/PokemonCardMocked'

export default {
  name: 'Home',
  data: () => ({
    loading: true,    
  }),
  components: {
    pokemonCard,
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
</script>

<style lang="scss">
.card {
  background: #f9f9f9 !important;
}
</style>
