<template>
  <div class="wrapper">
    <Transition>
      <p v-if="dataFetched">
        {{ contactInformation.fetchedData.attributes.contactInformationText }}
      </p>
    </Transition>

    <div class="inner-wrapper">
      <Transition>
        <div v-if="dataFetched">
          <a v-if="contactInformation.fetchedData.attributes.email" :href="'mailto:' + contactInformation.fetchedData.attributes.email">
            {{ contactInformation.fetchedData.attributes.email }}
          </a>
          <div class="flex gap-1 items-end">
            <a v-if="contactInformation.fetchedData.attributes.instagram" :href="'https://www.instagram.com/' + contactInformation.fetchedData.attributes.instagram" target="_blank">
              {{ contactInformation.fetchedData.attributes.instagram }}
            </a>
          </div>
        </div>
      </Transition>

      <Transition>
        <a href="/impressum" v-if="dataFetched">Impressum</a>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.inner-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-size: max(.75rem, .75vw);

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