<template>
  <div class="placeholder-grid">
    <Transition mode="out-in">
      <img :src="currentSource" v-if="currentType == 'img'" :key="currentSource"/>
      <video :src="currentSource" v-else autoplay muted></video>
    </Transition>

    <div class="textwrapper">
      <h1>PRIO</h1>
      <p>With the help of the project "PRIO", we want to highlight the negative effects of everyday stress in order to point out that reality is not the same as normality. <br/><br/> <strong>PRIO will soon be yours - stay tuned!</strong></p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

const possibleSources = [
    {
      src: '/prio-pic1.png',
      type: 'img'
    },
    {
      src: '/prio-pic2.jpeg',
      type: 'img'
    },
    {
      src: '/Prio_Poster_4Sujets.jpg',
      type: 'img'
    },
    {
      src: '/prio-pic3.jpeg',
      type: 'img'
    },
    {
      src: '/prio-pic4.jpeg',
      type: 'img'
    }
]

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
  ],
  link: [
    {
      rel: 'preload',
      href: '/prio-pic1.png',
      as: 'image'
    },
    {
      rel: 'preload',
      href: '/Prio_Poster_4Sujets.jpg',
      as: 'image'
    },
    {
      rel: 'preload',
      href: '/prio-pic2.jpeg',
      as: 'image'
    },
    {
      rel: 'preload',
      href: '/prio-pic3.jpeg',
      as: 'image'
    },
    {
      rel: 'preload',
      href: '/prio-pic4.jpeg',
      as: 'image'
    }
  ]
})

const currentIndex = ref(0);
const currentSource = computed(() => (possibleSources[currentIndex.value].src))
const currentType = computed(() => (possibleSources[currentIndex.value].type))

setInterval(() => {
  if(currentIndex.value == possibleSources.length - 1) {
    currentIndex.value = 0
  } else {
    currentIndex.value += 1
  }
}, 5000)

</script>

<style lang="scss" scoped>
  .placeholder-grid {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    overflow: hidden;
    justify-content: center;
    align-items: center;

    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  p {
    max-width: 40ch;
    font-size: .85vw;
    grid-column: 2 / span 1;

    @media screen and (max-width: 768px) {
      font-size: max(2vw, .6rem);
      max-width: 35ch;
    }
  }

  img, video {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    width: max(40vw, 12rem);
    margin: 0 auto;
    align-self: end;
    box-sizing: border-box;
    height: 40vh;
    object-fit: cover;
  }

  h1 {
    font-family: "Helvetica Neue";
    font-size: 8vw;
    text-align: end;
    font-weight: 500;
    padding: 0;
    grid-column: 1 / span 1;
    margin: 0;
    letter-spacing: -0.25vw;

    @media screen and (max-width: 768px) {
      font-size: max(17vw, 5rem);
      line-height: 100%;
      margin-top: 2rem;
    }
  }

  .textwrapper {
    display: flex;
    grid-column: 1 / span 2;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.35s cubic-bezier(0.83, 0, 0.17, 1);
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>