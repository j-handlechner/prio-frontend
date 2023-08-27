<template>
  <div class="wrapper">
    <h1>:(</h1>
    <p class="mt-8 mb-4 text-2xl">an error occured</p>
    <p><strong>{{ error.statusCode }}</strong> - {{ error.message }}</p>

    <p></p>
  </div>
</template>

<script setup>
  defineProps(['error'])
</script>

<style lang="scss" scoped>
  .wrapper {
    margin: 0 auto;
    width: 75vw;
    display: grid;
    margin-top: 10vh;
    text-align: center;
  }

  h1 {
    font-size: 4rem;
  }
</style>