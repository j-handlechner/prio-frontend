<!-- maxed out step 1 (todo: add transitions/animations to show input after input) -->

<template>
    <div>
      <NuxtLayout name="survey"> <!-- for some reason, setting the layout with definepagemeta doesnt work with multiple named slots -->
        <template #centersquare>
          <CenterSquare />
        </template>
  
        <template #buttons>
            <Buttons />
        </template>
  
        <template #contact>
          <Contact />
        </template>
  
        <template #right-bar>
          <RightBarContent />
        </template>
  
        <template #right-square>
          <RightSquareContent />
        </template>
  
  
          <template #layoutright>
            <Chart
                :topleft="priochartDataTopLeft"
                :topright="priochartDataBottomLeft"
                :bottomleft="priochartDataTopRight"
                :bottomright="priochartDataBottomRight"
                :totalvalue="200">
            </Chart>
          </template>
      </NuxtLayout>
    </div>
  </template>
  
  <script setup>
  import CenterSquare from "/components/content/survey-slider/center-square.vue";
  import Buttons from "/components/content/survey-slider/buttons.vue";
  import RightSquareContent from "/components/content/survey-welcome/right-square-content.vue";
  import RightBarContent from "/components/content/survey-welcome/right-bar-content.vue";
  import Contact from "/components/content/survey-welcome/contact.vue";

  import Chart from "/components/prioChart"

  import { usePriochartBottomLeft } from "/composables/state";
  import { usePriochartTopLeft } from "/composables/state";
  import { usePriochartTopRight } from "/composables/state";
  import { usePriochartBottomRight } from "/composables/state";

  const priochartDataTopLeft = usePriochartTopLeft()
  const priochartDataBottomLeft = usePriochartBottomLeft()
  const priochartDataTopRight = usePriochartTopRight()
  const priochartDataBottomRight = usePriochartBottomRight()

  definePageMeta({
    layout: false
  });
  </script>