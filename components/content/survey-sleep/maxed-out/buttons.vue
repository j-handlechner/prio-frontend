<template>
  <div class="selectbuttonwrapper">
    <Button @buttonclicked="currentViewName = 'personal'">
      <p>zurück</p>
    </Button>

    <Button @buttonclicked="currentViewName = 'sliders'">
      <p>weiter</p>
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

  }

  & > div {
    width: 50%;
  }
}
</style>