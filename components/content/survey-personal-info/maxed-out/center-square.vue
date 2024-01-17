<template>
  <div class="outerwrapper">
    <div class="inputgroup has-corners" :class="currentPersonalInfoStep > 0 && 'has-visible-border'">
      <Datepicker :model-value="birthdate" @updateModelValue="newValue => birthdate = newValue">
        <template #label>
          Geburts&shy;datum
        </template>
      </Datepicker>

      <div class="prio-chart__corner bottom-right"></div>
      <div class="prio-chart__corner bottom-left"></div>
      <div class="prio-chart__corner top-right"></div>
      <div class="prio-chart__corner top-left"></div>
    </div>

    <div class="inputgroup has-corners" :class="currentPersonalInfoStep > 1 && 'has-visible-border'">
      <Select name="gender" :modelValue="gender" @updateModelValue="newValue => gender = newValue">
        <template #label>
          Geschlecht
        </template>
      </Select>

      <div class="prio-chart__corner bottom-right"></div>
      <div class="prio-chart__corner bottom-left"></div>
      <div class="prio-chart__corner top-right"></div>
      <div class="prio-chart__corner top-left"></div>
    </div>

    <div class="inputgroup has-corners" :class="currentPersonalInfoStep > 2 && 'has-visible-border'">
      <Select name="nationality" :modelValue="nationality" @updateModelValue="newValue => nationality = newValue">
        <template #label>
          Nationalität
        </template>
      </Select>

      <div class="prio-chart__corner bottom-right"></div>
      <div class="prio-chart__corner bottom-left"></div>
      <div class="prio-chart__corner top-right"></div>
      <div class="prio-chart__corner top-left"></div>
    </div>

    <div class="inputgroup has-corners" :class="currentPersonalInfoStep > 3 && 'has-visible-border'">
      <SelectButton :modelValue="occupation" @updateModelValue="newValue => occupation = newValue">
        <template #label>
          Tätigkeit
        </template>
      </SelectButton>

      <div class="prio-chart__corner bottom-right"></div>
      <div class="prio-chart__corner bottom-left"></div>
      <div class="prio-chart__corner top-right"></div>
      <div class="prio-chart__corner top-left"></div>
    </div>
  </div>
</template>

<script setup>

import {useBirthdate, useOccupation, useGender, useNationality} from "/composables/state";
import {usePersonalInfoSteps} from "/composables/state";

import SelectButton from "/components/selectbutton";

const birthdate = useBirthdate()
const occupation = useOccupation()
const gender = useGender()
const nationality = useNationality()

const currentPersonalInfoStep = usePersonalInfoSteps()
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

    padding: 2rem;
    border-bottom: transparent 1px solid;

    &.has-visible-border {
      border-bottom-color: black;
    }
    transition: height .7s cubic-bezier(0.65, 0, 0.35, 1), border-bottom-color .2s ease-in-out;

    height: var(--heightInputgroup);
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
