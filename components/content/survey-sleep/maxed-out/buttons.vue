<template>
  <div class="selectbuttonwrapper">
    <Button @buttonclicked="currentViewName = 'personal'">
      <p>Zurück</p>
    </Button>

    <Button @buttonclicked="currentViewName = 'sliders'">
      <p>Weiter</p>
    </Button>
  </div>

</template>

<script setup>
import {usePersonalInfoSteps, useCurrentViewName} from "/composables/state";

const currentPersonalInfoStep = usePersonalInfoSteps()
const currentViewName = useCurrentViewName()

</script>

<style lang="scss" scoped>
.selectbuttonwrapper {
  display: flex;
  gap: 0rem;

  p {
    font-size: 2rem;
    font-family: Cirka;
    font-size: 2.5rem;
    @media screen and (max-width: 1250px) {
      font-size: 3vw;
    }
    @media screen and (max-width: 950px) {
      font-size: clamp(2rem, 8vw, 2.75rem);    }

    line-height: 125%;
  }
}
</style>

<style lang="scss">
.selectbuttonwrapper {
  width: 100%;
  button {
    padding-top: calc(1.5rem + 0.625rem);
    padding-bottom: calc(1.5rem + 0.625rem);
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 950px) {
      padding: 1rem 0;
    }

  }

  & > div {
    width: 50%;
  }
}
</style>