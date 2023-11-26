<!-- maxed out survey layout usage -->

<template>
  <div>
    <NuxtLayout name="survey"> <!-- for some reason, setting the layout with definepagemeta doesnt work with multiple named slots -->
      <template #centersquare>
        <Transition mode="out-in">
            <WelcomeCenterSquare v-if="currentViewName === 'welcome'" key="0"/>
            <PersonalCenterSquare v-else-if="currentViewName === 'personal'" key="1"/>
            <SleepCenterSquare v-else-if="currentViewName === 'sleep'" key="2"/>
            <SlidersCenterSquare v-else-if="currentViewName === 'sliders'" key="3"/>
            <ConfirmCenterSquare v-else-if="currentViewName === 'confirm' || currentViewName === 'end-yes' || currentViewName === 'end-no'" key="4" />
            <div v-else>nothing to show</div>
        </Transition>
      </template>

      <template #buttons>
            <ButtonWrapper @buttonclicked="() => handleButtonClick()" v-if="currentViewName == 'welcome'">
              <WelcomeButtons />
            </ButtonWrapper>

            <PersonalButtons v-else-if="currentViewName == 'personal'"/>
            <SleepButtons v-else-if="currentViewName == 'sleep'" />
            <SlidersButtons v-else-if="currentViewName == 'sliders'" />
            <ConfirmButtons v-else-if="currentViewName == 'confirm'" />
            <EndYesButtons v-else-if="currentViewName == 'end-yes'" />
            <EndNoButtons v-else-if="currentViewName == 'end-no'" />
      </template>

      <template #contact>
        <DefaultContact />
      </template>

      <template #right-bar>
        <DefaultRightBarContent />
      </template>

      <template #right-square>
        <DefaultRightSquareContent v-if="currentViewName == 'end'"/>
      </template>

      <template #layoutright>
        <Chart
            :topleft="priochartDataTopLeft"
            :topright="priochartDataBottomLeft"
            :bottomleft="priochartDataTopRight"
            :bottomright="priochartDataBottomRight"
            :totalvalue="7 * 24 - weeklySleepHours">
        </Chart>

        <div class="draggable">
          <Slider
            :max="100"
            v-model="endslidervalue"
            orientation="vertical"
            :pt="{
              range: {
                style: {
                  backgroundColor: 'red'
                }
              },
              handle: {
                style: {
                  backgroundColor: 'white',
                  borderRadius: 0,
                  borderWidth: 1,
                  rotate: '45deg',
                  borderColor: 'white',
                  scale: 2
                 }
              }
            }"
          />
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

import {
  usePriochartBottomLeft,
  usePriochartTopLeft,
  usePriochartTopRight,
  usePriochartBottomRight
} from "/composables/state";
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

// confirm
import ConfirmButtons from "/components/content/survey-confirm/buttons.vue";
import ConfirmCenterSquare from "/components/content/survey-confirm/center-square.vue";

const handleButtonClick = () => {
  if(currentViewName.value == 'welcome') {
    currentViewName.value = 'personal'
  }
  // sleep view gets set in the buttons of personal info view
  else if(currentViewName.value == 'sleep') {

  }
}

import EndYesButtons from "/components/content/survey-end/buttons-yes.vue";
import EndNoButtons from "/components/content/survey-end/buttons-no.vue";

import Slider from "primevue/slider";
import { useEndSliderValue } from "/composables/state.js";

const endslidervalue = useEndSliderValue()
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity .35s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.p-slider-vertical {
  height: 20vh;
}
</style>

<style scoped lang="scss">
.draggable {
  grid-column: 1 / span 1;
  grid-row: 2 / span 2;

  justify-self: center;
  align-self: end;
}
</style>