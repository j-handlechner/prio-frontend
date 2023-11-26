<template>
    <div class="selectbuttonwrapper">
      <Button @buttonclicked="currentViewName = 'end-no'">
        <p>Nein</p>
      </Button>
  
      <Button @buttonclicked="currentViewName = 'end-yes'">
        <p>Ja</p>
      </Button>
    </div>
  
  </template>
  
  <script setup>
  // import {usePersonalInfoSteps} from "/composables/state";
  import {useCurrentViewName, useSlidersSteps} from "/composables/state"; // -> because using another state variable in this step (see centersquarefile)

  const currentSlidersStep = useSlidersSteps()
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