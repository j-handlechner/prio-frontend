<template>
  <div>
    <h1>Teil mal dein Leben durch vier!</h1>
    <p v-if="dataFetched">
      {{ welcomeText.fetchedData.attributes.welcomeText }}
    </p>
    <p v-else>Loading...</p>
  </div>
</template>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  h1 {
    font-family: Cirka;
    font-size: 4.4rem;
    @media screen and (max-width: 1250px) {
      font-size: 4vw;
    }
    @media screen and (max-width: 950px) {
      font-size: min(14vw, 4rem);
    }

    line-height: 115%;
  }

  p, h1 {
    padding: 1rem;
  }

  p {
    font-size: 0.75rem;
  }
</style>

<script setup>
import { onBeforeMount } from 'vue';
const { find } = useStrapi()
const welcomeText = reactive({fetchedData: null});
const dataFetched = ref(false)

onBeforeMount(async () => {
  try {
    const { data } = await find('custom-content')
    welcomeText.fetchedData = data
    dataFetched.value = true
  } catch (err) {
    console.error('Error fetching questions:', err)
  }
});
</script>