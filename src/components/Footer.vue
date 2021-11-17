<template>
  <footer>
    {{text}}
  </footer>
</template>

<script>
export default {
  data: () => ({
    text: 'Este é o Footer',
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  footer {
    width: 100%;
    color: #f5f5f5;
    padding: 1rem 0;
    background: #333;
    text-align: center;
  }
</style>
