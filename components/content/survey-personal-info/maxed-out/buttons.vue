<template>
  <div class="selectbuttonwrapper">
    <Button @buttonclicked="currentViewName='welcome'">
      <p>zurück</p>
    </Button>

    <Button @buttonclicked="currentPersonalInfoStep < 3 ? currentPersonalInfoStep++ : currentViewName = 'sleep'" :disabled="currentPersonalInfoStep === 3 && (!birthdate || !occupation || !gender || !nationality)">
      <p>weiter</p>
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
    font-size: 2.5rem;
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