<template>
  <div class="wrapper">
    <p>
      {{ contactInformation.fetchedData.attributes.contactInformationText }}
    </p>
    <div>
      <a>
        {{ contactInformation.fetchedData.attributes.email }}
      </a>
      <a>
        {{ contactInformation.fetchedData.attributes.instagram }}
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
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