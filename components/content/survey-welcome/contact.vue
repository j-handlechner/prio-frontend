<template>
  <div class="wrapper">
    <p v-if="dataFetched">
      {{ contactInformation.fetchedData.attributes.contactInformationText }}
    </p>
    <p v-else>Loading...</p>

    <div class="inner-wrapper">
      <div v-if="dataFetched">
        <a v-if="contactInformation.fetchedData.attributes.email" :href="'mailto:' + contactInformation.fetchedData.attributes.email">
          {{ contactInformation.fetchedData.attributes.email }}
        </a>
        <a v-if="contactInformation.fetchedData.attributes.instagram" :href="'https://www.instagram.com/' + contactInformation.fetchedData.attributes.instagram" target="_blank">
          {{ contactInformation.fetchedData.attributes.instagram }}
        </a>
      </div>
      <p v-else>Loading...</p>

      <a href="/impressum">Impressum</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.inner-wrapper {
  display: flex;
  justify-content: space-between;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-size: 0.75rem;

  a {
    color: black;
    text-decoration: underline;
    display: block;
  }
}
</style>

<script setup>
import { onBeforeMount } from 'vue';
const { find } = useStrapi()
const contactInformation = reactive({fetchedData: null});
const dataFetched = ref(false)

onBeforeMount(async () => {
  try {
    const { data } = await find('custom-content')
    contactInformation.fetchedData = data
    dataFetched.value = true
    console.log(contactInformation.fetchedData.attributes)
  } catch (err) {
    console.error('Error fetching contact information :', err)
  }
});
</script>