<!-- maxed out survey layout usage -->

<template>
  <div>
    <NuxtLayout name="survey"> <!-- for some reason, setting the layout with definepagemeta doesnt work with multiple named slots -->
      <template #centersquare>
        <WelcomeCenterSquare v-if="currentViewName == 'welcome'"/>
        <PersonalCenterSquare v-if="currentViewName == 'personal'" />
        <SleepCenterSquare v-if="currentViewName == 'sleep'" />
        <SlidersCenterSquare v-if="currentViewName == 'sliders'" />
      </template>

      <template #buttons>
        <ButtonWrapper @buttonclicked="() => handleButtonClick()" v-if="currentViewName == 'welcome'">
          <WelcomeButtons />
        </ButtonWrapper>

        <PersonalButtons v-if="currentViewName == 'personal'"/>
        <SleepButtons v-if="currentViewName == 'sleep'" />
        <SlidersButtons v-if="currentViewName == 'sliders'" />
      </template>

      <template #contact>
        <DefaultRightSquareContent />
      </template>

      <template #right-bar>
        <DefaultRightBarContent />
      </template>

      <template #right-square>
        <DefaultContact />
        {{ 7 * 24 - weeklySleepHours}}
      </template>

      <template #layoutright>
        <Chart
            :topleft="priochartDataTopLeft"
            :topright="priochartDataBottomLeft"
            :bottomleft="priochartDataTopRight"
            :bottomright="priochartDataBottomRight"
            :totalvalue="7 * 24 - weeklySleepHours">
        </Chart>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

import { usePriochartBottomLeft, usePriochartTopLeft, usePriochartTopRight, usePriochartBottomRight } from "/composables/state";
import { useCurrentViewName, usePersonalInfoSteps, useWeeklySleepHours } from "/composables/state"

const currentViewName = useCurrentViewName()
const weeklySleepHours = useWeeklySleepHours()

// state across all pages
const priochartDataTopLeft = usePriochartTopLeft()
const priochartDataBottomLeft = usePriochartBottomLeft()
const priochartDataTopRight = usePriochartTopRight()
const priochartDataBottomRight = usePriochartBottomRight()

// default components (= shared components)
import DefaultRightSquareContent from "/components/content/survey-welcome/right-square-content.vue";
import DefaultRightBarContent from "/components/content/survey-welcome/right-bar-content.vue";
import DefaultContact from "/components/content/survey-welcome/contact.vue";
import ButtonWrapper from "/components/button.vue";

// welcome
import WelcomeCenterSquare from "/components/content/survey-welcome/center-square.vue";
import WelcomeButtons from "/components/content/survey-welcome/buttons.vue";

// personal info
import PersonalCenterSquare from "/components/content/survey-personal-info/maxed-out/center-square.vue";
import PersonalButtons from "/components/content/survey-personal-info/maxed-out/buttons.vue";

// sleep
import SleepCenterSquare from "/components/content/survey-sleep/maxed-out/center-square.vue";
import SleepButtons from "/components/content/survey-sleep/maxed-out/buttons.vue";

// sliders
import Chart from "/components/prioChart.vue"
import SlidersCenterSquare from "/components/content/survey-slider/center-square.vue";
import SlidersButtons from "/components/content/survey-slider/buttons.vue";


const handleButtonClick = () => {
  if(currentViewName.value == 'welcome') {
    currentViewName.value = 'personal'
  }
  // sleep view gets set in the buttons of personal info view
  else if(currentViewName.value == 'sleep') {

  }
}

</script>