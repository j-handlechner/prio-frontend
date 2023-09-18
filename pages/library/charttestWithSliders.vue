<template>
  <div class="outerwrapper">
    <div :style="{display: 'flex', flexDirection: 'column'}">
      <Slider @value-updated="doSomethingWithNewValue" name="topleft" initial-value="0" />
      <Slider @value-updated="doSomethingWithNewValue" name="bottomleft" initial-value="0"/>
      <Slider @value-updated="doSomethingWithNewValue" name="topright" initial-value="0"/>
      <Slider @value-updated="doSomethingWithNewValue" name="bottomright" initial-value="0"/>
    </div>

    <div class="chartwrapper">
      <Chart :topleft="topleftvalue" :topright="toprightvalue" :bottomleft="bottomleftvalue" :bottomright="bottomrightvalue" :totalvalue="200"></Chart>
    </div>
  </div>
</template>

<script setup>
import Chart from './chart.vue'
import Slider from './slider.vue'

  const data = ref({})

    const topleftvalue = ref(0)
    const toprightvalue = ref(0)
    const bottomleftvalue = ref(0)
    const bottomrightvalue = ref(0)

  const doSomethingWithNewValue = (newVal) => {
    console.log("parent received value: ", newVal)

    switch(newVal.name) {
      case "topleft":
        data.value.topleft = newVal.value

          topleftvalue.value = newVal.value
        break

      case "bottomleft":
        data.value.bottomleft = newVal.value
        bottomleftvalue.value = newVal.value
        break

      case "topright":
        data.value.topright = newVal.value
        toprightvalue.value = newVal.value

        break

      case "bottomright":
        data.value.bottomright = newVal.value
        bottomrightvalue.value = newVal.value
        break

      default:
        break
    }

    console.log("data: ", data.value)
  }
</script>


<style scoped lang="scss">
.outerwrapper {
  width: 80vw;
  height: 40vh;
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