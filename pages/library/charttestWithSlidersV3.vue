<template>
  <div class="outerwrapper">
    <div :style="{display: 'flex', flexDirection: 'column'}">
      <Slider :modelValue="priochartDataTopLeft"
              @updateModelValue="newValue => priochartDataTopLeft = newValue" initialValue="0" />
      <Slider :modelValue="priochartDataBottomLeft"
              @updateModelValue="newValue => priochartDataBottomLeft = newValue" initialValue="0" />
      <Slider :modelValue="priochartDataTopRight"
              @updateModelValue="newValue => priochartDataTopRight = newValue" initialValue="0" />
      <Slider :modelValue="priochartDataBottomRight"
              @updateModelValue="newValue => priochartDataBottomRight = newValue" initialValue="0" />

    </div>

    <div class="chartwrapper">
      <Chart :topleft="priochartDataTopLeft" :topright="priochartDataBottomLeft" :bottomleft="priochartDataTopRight" :bottomright="priochartDataBottomRight" :totalvalue="200"></Chart>

      priochartDataTopleft {{ priochartDataTopLeft }}
      priochartDataBottomLeft {{ priochartDataBottomLeft }}
      priochartDataTopRight {{ priochartDataTopRight }}
      priochartDataBottomRight {{ priochartDataBottomRight }}

    </div>
  </div>

  <HoursPerWeekAlarm />
</template>

<script setup>
import Chart from './chartV2.vue'
import Slider from './sliderV2.vue'
import HoursPerWeekAlarm from "/components/hoursPerWeekAlarm.vue";

  const priochartDataTopLeft = usePriochartTopLeft()
  const priochartDataBottomLeft = usePriochartBottomLeft()
  const priochartDataTopRight = usePriochartTopRight()
  const priochartDataBottomRight = usePriochartBottomRight()

</script>


<style scoped lang="scss">
.outerwrapper {
  width: 80vw;
  height: 80vh;
  display: flex;
  gap: 10vw;
  margin: 0 auto;
  justify-content: space-between;
}

.chartwrapper {
  width: 50%;
  height: 100%;
}

</style>