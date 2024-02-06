<!-- maxed out survey layout usage -->

<template>
  <div id="">
    <NuxtLayout name="imprint"> <!-- for some reason, setting the layout with definepagemeta doesnt work with multiple named slots -->
      <h1>Technische Umsetzung</h1>
      <p class="flex gap-2 items-center">
        <span class="flex gap-1 items-center">
          <span class="text-sm">©</span>
          <small class="text-xs">(code)</small>
        </span>

        <span><u><nuxt-link external to="https://www.linkedin.com/in/johannes-handlechner/" target="_blank">Johannes Handlechner</nuxt-link></u> & <u><nuxt-link external target="_blank" to="https://www.linkedin.com/in/tanjanicole/">Tanja Gruber</nuxt-link></u></span></p>
      <br />
      <Transition v-if="dataFetched">
        <div v-html="apiresponse.fetchedData"></div>
      </Transition>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
const { find } = useStrapi()
const apiresponse = reactive({fetchedData: null});
const dataFetched = ref(false)

onBeforeMount(async () => {
  try {
    const { data } = await find('custom-content')
    apiresponse.fetchedData = data?.attributes['imprint-html']
    dataFetched.value = true
    console.log(apiresponse)
  } catch (err) {
    console.error('Error fetching data:', err)
  }
});

definePageMeta({
  layout: false
})

useHead({
  title: 'PRIO - Wem gehörst du? - Kollektiv Schlaflos',
  meta: [
    {
      name: 'description',
      content: 'Realität ≠ Normalität. Wem gehörst du wirklich? Teil dein leben durch vier! Nimm jetzt an dem Datenexperiment teil!',
    },
    {
      name: 'keywords',
      content: 'Datenvisualisierung; Zeitverteilung; Zeitmanagement; Prioritätsblöcke; Priorität; Bedrängnis Lebensbereiche; Lebenszeit; Realität; Normalität; Lebensbereiche; Fremdbestimmung; Vier Blöcke; Leben; Schlaflos: Kollektiv Schlaflos; Arbeit; Ich; Andere; Anderes; Anspannung; Stress; FOMO;',
    },
  ]
})
</script>
