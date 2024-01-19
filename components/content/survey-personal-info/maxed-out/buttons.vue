<template>
  <div class="selectbuttonwrapper">
    <Button @buttonclicked="currentViewName='welcome'">
      <p>Zurück</p>
    </Button>

    <Button @buttonclicked="currentPersonalInfoStep < 3 ? currentPersonalInfoStep++ : currentViewName = 'sleep'" :disabled="currentPersonalInfoStep === 3 && (!birthdate || !occupation || !gender || !nationality)">
      <p v-tooltip.top="!birthdate || !occupation || !gender || !nationality ? 'Bitte alle Felder befüllen' : null">Weiter</p>
    </Button>
  </div>

</template>

<script setup>
import {usePersonalInfoSteps, useCurrentViewName} from "/composables/state";

const currentPersonalInfoStep = usePersonalInfoSteps()
const currentViewName = useCurrentViewName()
import {useBirthdate, useOccupation, useGender, useNationality} from "/composables/state";

const birthdate = useBirthdate()
const occupation = useOccupation()
const gender = useGender()
const nationality = useNationality()
</script>

<style lang="scss" scoped>
.selectbuttonwrapper {
  display: flex;
  gap: 0rem;

  p {
    font-size: 2rem;
    font-family: Cirka;
    font-size: max(2.5rem, 2vw);
    @media screen and (max-width: 1300px) {
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