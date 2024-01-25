<template>
    <div v-if="dataFetched" class="outerwrapper">
      <div class="inputgroup has-corners" :class="currentSlidersStep > 0 && 'has-visible-border'">
          <Slider :modelValue="priochartDataTopLeft"
                  @updateModelValue="newValue => priochartDataTopLeft = newValue" initialValue="0">
          <template #label>
           {{ questions.fetchedData[0].attributes.QuestionText }}
          </template>
        </Slider>
  
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
      </div>
  
      <div class="inputgroup has-corners" :class="currentSlidersStep > 1 && 'has-visible-border'">
        <Slider :modelValue="priochartDataTopRight"
                @updateModelValue="newValue => priochartDataTopRight = newValue" initialValue="0">
          <template #label>
            {{ questions.fetchedData[1]?.attributes.QuestionText }}
          </template>
        </Slider>
  
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
      </div>
  
      <div class="inputgroup has-corners" :class="currentSlidersStep > 2 && 'has-visible-border'">
        <Slider :modelValue="priochartDataBottomLeft"
                @updateModelValue="newValue => priochartDataBottomLeft = newValue" initialValue="0" >
          <template #label>
            {{ questions.fetchedData[2]?.attributes.QuestionText }}
          </template>
        </Slider>
  
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
      </div>
  
      <div class="inputgroup has-corners" :class="currentSlidersStep > 3 && 'has-visible-border'">
        <Slider :modelValue="priochartDataBottomRight"
                @updateModelValue="newValue => priochartDataBottomRight = newValue" initialValue="0">
          <template #label>
            {{ questions.fetchedData[3]?.attributes.QuestionText }}
          </template>
        </Slider>
  
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
      </div>
      <div>
        <HoursPerWeekAlarm />
      </div>
    </div>
    <div v-else>
      <div class="loadingrectangle"></div>
    </div>
  </template>
  
  
  <script setup>
  import { onBeforeMount } from 'vue';
  import { useSlidersSteps } from "/composables/state";

  import { usePriochartTopLeft, usePriochartBottomLeft, usePriochartTopRight, usePriochartBottomRight } from "/composables/state";

  const priochartTopLeft = usePriochartTopLeft()
  const priochartTopRight = usePriochartTopRight()
  const priochartBottomLeft = usePriochartBottomLeft()
  const priochartBottomRight = usePriochartBottomRight()

  const priochartDataTopLeft = usePriochartTopLeft()
  const priochartDataBottomLeft = usePriochartBottomLeft()
  const priochartDataTopRight = usePriochartTopRight()
  const priochartDataBottomRight = usePriochartBottomRight()

  const { find } = useStrapi();
  const questions = reactive({fetchedData: null}); // state is always const

  const dataFetched = ref(false)
  const currentSlidersStep = useSlidersSteps()

  onBeforeMount(async () => {
  try {
    const { data } = await find('slider-questions');

    // questions state can only be accessed by <state>.value = .... (<state> is a constant variable)
    questions.fetchedData = data; // Initialize the value here or use a default value
    console.log(data);
    dataFetched.value = true;
    // if something in the template should change based on this value, either make it a computed property or just also declare it as state
    // -> why? if the fetching takes some time (even if this is in the beforeMount hook), the template could be rendered with dataFetched=false
    // since this is just a normal variable, the template will not update based on a value change
    // -> updates only for computed properties or state
  } catch (err) {
    console.error('Error fetching questions:', err);
  }
});

  
  // const birthdate = useBirthdate()
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
      --heightInputgroup: calc(100% / (1 + v-bind('currentSlidersStep')));
  
      // padding: 2rem 4rem;
      border-bottom: transparent 1px solid;

      &.has-visible-border {
        border-bottom-color: black;
      }
      height: var(--heightInputgroup);
      transition: height .7s cubic-bezier(0.65, 0, 0.35, 1), border-bottom-color .2s ease-in-out;
      width: 100%;
  
      display: flex;
      flex-direction: column;
      justify-content: center;
  
      &:last-child {
        border: none;
      }
    }
  }

  .loadingrectangle {
    width: 1rem;
    height: 1rem;
    background-color: black;
    animation-name: loadingspinner;
    animation-duration: 1s;
    animation-delay: 1s;
    opacity: 0;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    margin: auto;
    transition: 0.25s opacity ease-in-out;
  }

  @keyframes loadingspinner {
    0% {
      rotate: 45deg;
      opacity: 1;
    }

    50% {
      rotate: 135deg;
      opacity: 1;
    }

    100% {
      rotate: 135.000001deg;
      opacity: 1;
    }
  }
  </style>
  