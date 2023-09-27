<template>
  <div class="outerwrapper">
    <div class="inputgroup has-corners">
      <Datepicker @updateModelValue="newValue => birthdate = newValue">
        <template #label>
          Geburtsdatum
        </template>
      </Datepicker>

      <div class="prio-chart__corner bottom-right"></div>
      <div class="prio-chart__corner bottom-left"></div>
      <div class="prio-chart__corner top-right"></div>
      <div class="prio-chart__corner top-left"></div>
    </div>

    <div class="inputgroup has-corners">
      <Select name="gender">
        <template #label>
          Geschlecht
        </template>
      </Select>

      <div class="prio-chart__corner bottom-right"></div>
      <div class="prio-chart__corner bottom-left"></div>
      <div class="prio-chart__corner top-right"></div>
      <div class="prio-chart__corner top-left"></div>
    </div>

    <div class="inputgroup has-corners">
      <Select name="nationality">
        <template #label>
          Nationalität
        </template>
      </Select>

      <div class="prio-chart__corner bottom-right"></div>
      <div class="prio-chart__corner bottom-left"></div>
      <div class="prio-chart__corner top-right"></div>
      <div class="prio-chart__corner top-left"></div>
    </div>

    <div class="inputgroup has-corners">
      <SelectButton>
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

import {useBirthdate} from "/composables/state";
import SelectButton from "/components/selectbutton";
const birthdate = useBirthdate()
</script>

<style lang="scss" scoped>

.has-corners {
  position: relative;
}

.outerwrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  --heigtInputgroup: 25%;

  .inputgroup {
    padding: 2rem;
    border-bottom: black 1px solid;
    height: var(--heigtInputgroup);

    &:last-child {
      border: none;
    }
  }
}
</style>
