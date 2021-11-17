
<template>
  <div class="pkm-card" pkm-name="PIKACHU">
    <div class="pkm-card__image">
      <img src="../assets/pikachu.png" alt="Foto do Pikachu">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
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