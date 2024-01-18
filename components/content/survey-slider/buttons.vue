<template>
    <div class="selectbuttonwrapper">
      <Button @buttonclicked="currentViewName = 'sleep'">
        <p>Zurück</p>
      </Button>
  
      <Button v-if="currentSlidersStep < 3" @buttonclicked="currentSlidersStep < 3 ? currentSlidersStep++ : currentViewName = 'confirm'">
        <p>Weiter</p>
      </Button>
      <Button v-else @buttonclicked="currentSlidersStep < 3 ? currentSlidersStep++ : currentViewName = 'confirm'" :class="allHoursPlanned && allSlidersFilled ? '' : 'disabled'">
        <p>Ergebnis</p>
      </Button>
    </div>
  </template>
  
  <script setup>
  // import {usePersonalInfoSteps} from "/composables/state";
  import {
    useCurrentViewName,
    usePriochartBottomLeft, usePriochartBottomRight,
    usePriochartTopLeft, usePriochartTopRight,
    useSlidersSteps,
    useWeeklySleepHours
  } from "/composables/state"; // -> because using another state variable in this step (see centersquarefile)

  const currentSlidersStep = useSlidersSteps()
  const currentViewName = useCurrentViewName()


  const weeklySleepHours = useWeeklySleepHours()

  const priochartDataTopLeft = usePriochartTopLeft()
  const priochartDataBottomLeft = usePriochartBottomLeft()
  const priochartDataTopRight = usePriochartTopRight()
  const priochartDataBottomRight = usePriochartBottomRight()

  const allSlidersFilled = computed(() => {
    return priochartDataTopLeft.value !== 0 && priochartDataBottomLeft.value !== 0 && priochartDataTopRight.value !== 0 && priochartDataBottomRight.value !== 0
  })

  const allHoursPlanned = computed(() => {
    return priochartDataTopLeft.value + priochartDataBottomLeft.value + priochartDataTopRight.value + priochartDataBottomRight.value + weeklySleepHours.value == 24 * 7
  })

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
        font-size: clamp(2rem, 8vw, 2.75rem);      }
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

      @media screen and (max-width: 950px) {
        padding: 1rem 0;
      }

      width: 100%;
      justify-content: center;
      padding-left: 0;
      padding-right: 0;
  
    }
  
    & > div {
      width: 50%;
    }
  }
  </style>

<style lang="scss">
.disabled {
  opacity: .5;
  pointer-events: none;
}
</style>