<template>
  <div id="listpokemon" class="pa-4">
    <v-container fluid>
      <h3 class="headline font-weight-medium">Listagem Pokémons (STORE):</h3>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="i in loading ? 4 : listPokemon.length"
          :key="i"
          class="mx-xs-auto"
        >
          <v-skeleton-loader type="card-avatar" :loading="loading">
            <pokemonCard :pokemon="listPokemon[i]"></pokemonCard>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import pokemonCard from '@/components/PokemonCard'

export default {
  data: () => ({
    loading: true,
    countPokemonsToAddFromAPI: 20,
  }),
  components: {
    pokemonCard,
  },
  computed: mapState(['listPokemon']),
  methods: {
    ...mapActions(['addRandomPokemon']),
  },
  mounted() {
    let i = 0;

    while(i < this.countPokemonsToAddFromAPI){
      this.addRandomPokemon();
      i += 1;
    }

    setTimeout(() => {
      this.loading = false
    }, 5000)
  }
}
</script>

<style lang="scss">
.card {
  background: #f9f9f9 !important;
}
</style>
