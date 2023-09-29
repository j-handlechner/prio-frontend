<template>
    <div v-if="dataFetched" class="outerwrapper">
      <div class="inputgroup has-corners">
        <Slider @change="updateValue" v-model="value" max="100">
          <template #label>
            {{ questions[0].attributes.QuestionText }}
          </template>
        </Slider>
  
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
      </div>
  
      <div class="inputgroup has-corners">
        <Slider @change="updateValue" v-model="value" max="100">
          <template #label>
            {{ questions[1].attributes.QuestionText }}
          </template>
        </Slider>
  
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
      </div>
  
      <div class="inputgroup has-corners">
        <Slider @change="updateValue" v-model="value" max="100">
          <template #label>
            {{ questions[2].attributes.QuestionText }}
          </template>
        </Slider>
  
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
      </div>
  
      <div class="inputgroup has-corners">
        <Slider @change="updateValue" v-model="value" max="100">
          <template #label>
            {{ questions[3].attributes.QuestionText }}
          </template>
        </Slider>
  
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  
  import {useBirthdate} from "/composables/state";
  import {usePersonalInfoSteps} from "/composables/state";
  import { onBeforeMount } from 'vue'; 
  
  import Slider from "/components/slider";

  const { find } = useStrapi();
  let questions = ref(null);
  let dataFetched = false; 

  onBeforeMount(async () => {
  try {
    const { data } = await find('slider-questions');
    questions = data; // Initialize the value here or use a default value
    console.log(data);
    dataFetched = true;
  } catch (err) {
    console.error('Error fetching questions:', err);
  }
});

  
  const birthdate = useBirthdate()
  const currentPersonalInfoStep = usePersonalInfoSteps()
  const test = 2

  // Define the updateValue method
    const updateValue = (value) => {
    // Implement your logic here to handle value changes
    console.log('Value changed:', value);
};
  </script>
  
  <style lang="scss" scoped>
  
  .has-corners {
    position: relative;
  }
  
  .outerwrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 100%;
    overflow: hidden;
  
    //--heigtInputgroup: 25%;
  
  
    .inputgroup {
      --heightInputgroup: calc(100% / (1 + v-bind('currentPersonalInfoStep')));
  
      // padding: 2rem 4rem;
      border-bottom: black 1px solid;
      height: var(--heightInputgroup);
      transition: height 2s cubic-bezier(0.65, 0, 0.35, 1);
      width: 100%;
  
      display: flex;
      flex-direction: column;
      justify-content: center;
  
      &:last-child {
        border: none;
      }
    }
  }
  </style>
  