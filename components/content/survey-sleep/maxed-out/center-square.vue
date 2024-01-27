<template>
  <div class="outerwrapper">
    <div class="inputgroup has-corners">
      <Slider :modelValue="sleepHoursPerNight"
              @updateModelValue="newValue => handleValueChange(newValue)" initialValue="0" :max="15">
        <template #label>
          {{ 'Wie viele Stunden schläfst du ⌀ pro Nacht?' }}
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
import {useWeeklySleepHours} from "/composables/state";

import SelectButton from "/components/selectbutton";


const sleepHoursPerWeek = useWeeklySleepHours()
const sleepHoursPerNight = ref(0)

const handleValueChange = (newValue) => {
  sleepHoursPerNight.value = newValue;
  sleepHoursPerWeek.value = sleepHoursPerNight.value * 7
}
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
    padding: 2rem;
    border-bottom: black 1px solid;
    height: 100%;
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
