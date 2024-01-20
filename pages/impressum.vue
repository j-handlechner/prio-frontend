<!-- maxed out survey layout usage -->

<template>
  <div id="">
    <NuxtLayout name="imprint"> <!-- for some reason, setting the layout with definepagemeta doesnt work with multiple named slots -->
      <h1>Impressum & Datenschutz</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
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
