<template>
  <div class="placeholder-grid">
    <Transition mode="out-in">
      <img :src="currentSource" v-if="currentType == 'img'"/>
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
      src: '/Prio_AnimatedPosters_Screen1.mp4',
      type: 'video'
    },
    {
      src: '/Prio_Poster_4Sujets.jpg',
      type: 'img'
    },
    {
      src: '/Prio_AnimatedPosters_Screen3.mp4',
      type: 'video'
    }
]

useHead({
  title: 'PRIO',
  description: 'With the help of the project "PRIO", we want to highlight the negative effects of everyday stress in order to point out that reality is not the same as normality.',
  link: [
    {
      rel: 'preload',
      href: '/prio-pic1.png',
      as: 'image'
    },
    {
      rel: 'preload',
      href: '/Prio_AnimatedPosters_Screen1.mp4',
      as: 'video'
    },
    {
      rel: 'preload',
      href: '/Prio_Poster_4Sujets.jpg',
      as: 'image'
    },
    {
      rel: 'preload',
      href: '/Prio_AnimatedPosters_Screen3.mp4',
      as: 'video'
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
  }

  img, video {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    width: 35vw;
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
  }

  .textwrapper {
    display: flex;
    grid-column: 1 / span 2;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
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