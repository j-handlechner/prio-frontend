<template>
    <div v-if="dataFetched" class="outerwrapper">
      <div class="inputgroup has-corners">
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
  
      <div class="inputgroup has-corners">
        <Slider :modelValue="priochartDataBottomLeft"
                @updateModelValue="newValue => priochartDataBottomLeft = newValue" initialValue="0">
          <template #label>
            {{ questions.fetchedData[1]?.attributes.QuestionText }}
          </template>
        </Slider>
  
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
      </div>
  
      <div class="inputgroup has-corners">
        <Slider :modelValue="priochartDataTopRight"
                @updateModelValue="newValue => priochartDataTopRight = newValue" initialValue="0" >
          <template #label>
            {{ questions.fetchedData[2]?.attributes.QuestionText }}
          </template>
        </Slider>
  
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
      </div>
  
      <div class="inputgroup has-corners">
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
    </div>
    <div v-else>
      loading...
    </div>

    <HoursPerWeekAlarm />
  </template>
  
  
  <script setup>
  import { onBeforeMount } from 'vue';
  import { useSlidersSteps } from "/composables/state";

  import { usePriochartTopLeft, usePriochartBottomLeft, usePriochartTopRight, usePriochartBottomRight } from "/composables/state";
  import HoursPerWeekAlarm from "/components/hoursPerWeekAlarm.vue";

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
  