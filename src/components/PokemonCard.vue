
<template>
  <v-card class="pkm-card" pkm-name="PIKACHU">
    <div class="pkm-card__image">
      <img v-if="!pokemon" src="../assets/pikachu.png" alt="Pokémon">
      <img v-if="!!pokemon" :src="pokemon.pokemon.$attrs.pokemon.imageSrc" alt="Pokémon">
      <div v-if="!!pokemon" class="pkm-card__name">{{pokemon.pokemon.$attrs.pokemon.name}}</div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: (pokemon) => ({
    pokemon: pokemon,
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
  .pkm-card {
    position: relative;

    width: 90%;
    height: 5rem;
    min-width: 90%;
    min-height: 8rem;

    padding: 0.5rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: var(--card-shadow);

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .pkm-card .pokemon {
    cursor: pointer;
  }

  .pkm-card__image {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pkm-card__image img {
    max-width: 90%;
    max-height: 90%;
  }
</style>