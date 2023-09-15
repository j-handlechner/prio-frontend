<template>
  <div>
    <p>computed property left up: {{ valueLeftUp }}</p>
    <div class="library-wrapper">
      <div class="prio-chart__wrapper">
        <div class="prio-chart__column" ref="columnLeft"
             :style="{
                width: `${percentageLeft}%`
              }">
          <div class="prio-chart__block" ref="blockLeftUp"
               :style="{
                height: `${percentageLeftTop}%`
              }">

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>
          <div class="prio-chart__block" ref="blockLeftDown"
               :style="{
                height: `${100 - percentageLeftTop}%`
              }">

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>
        </div>

        <div class="prio-chart__column" ref="columnRight"
             :style="{
               width: `${100 - percentageLeft}%`
             }">
          <div class="prio-chart__block" ref="blockRightUp"
               :style="{
                height: `${percentageRightTop}%`
              }">

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>
          <div class="prio-chart__block" ref="blockRightDown"
               :style="{
                height: `${100 - percentageRightTop}%`
              }">

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: Object,
    topleft: Number,
    topright: Number,
    bottomleft: Number,
    bottomright: Number
  })

  const blockLeftUp = ref(null)
  const blockLeftDown = ref(null)
  const blockRightUp = ref(null)
  const blockRightDown = ref(null)
  const columnLeft = ref(null)
  const columnRight = ref(null)

  // const valueLeftUp = ref(props.topleft) // get these values from props
  // const valueLeftDown = ref(props.bottomleft)
  // const valueRightUp = ref(props.topright)
  // const valueRightDown = ref(props.bottomright)

  const valueLeftUp = computed(() => props.topleft) // get these values from props
  const valueLeftDown = computed(() => props.bottomleft)
  const valueRightUp = computed(() => props.topright)
  const valueRightDown = computed(() => props.bottomright)

  const total = computed(() => valueLeftUp.value + valueLeftDown.value + valueRightUp.value + valueRightDown.value)
  const leftTotal = computed(() => valueLeftUp.value + valueLeftDown.value)
  const rightTotal = computed(() => valueRightUp.value + valueRightDown.value)

  const percentageLeft = computed(() => (leftTotal.value * 100) / total.value)

  const percentageLeftTop = computed(() => (valueLeftUp.value * 100) / leftTotal.value)
  const percentageRightTop = computed(() => (valueRightUp.value * 100) / rightTotal.value)

  // const percentageLeftTop = ref(20)
  // const percentageRightTop = ref(50)

  function doShit() {
    // calculate the widths of the columns
    // const total = valueLeftUp.value + valueLeftDown.value + valueRightDown.value + valueRightUp.value
    //
    // const leftTotal = valueLeftUp.value + valueLeftDown.value
    // const rightTotal = valueRightUp.value + valueRightDown.value

    // percentageLeft.value = (leftTotal / total) * 100

    // percentageLeftTop.value = (valueLeftUp.value / leftTotal) * 100
    // percentageRightTop.value = (valueRightUp.value / rightTotal) * 100
  }
  onMounted(() => {
    doShit()
  })
</script>

<script>
  console.log("helloooooo from chart")
</script>

<style scoped lang="scss">
.library-wrapper {
  width: 50vw;
  height: 75vh;
  border: 0.75px solid black;
}

.prio-chart__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

.prio-chart__column {
  height: 100%;
  transition: 2s all ease;

}

.prio-chart__block {
  width: 100%;
  border: 0.75px solid black;
  position: relative;

  transition: 2s all ease;
}

.prio-chart__corner {
  --dimension: 5px;
  position: absolute;
  width: var(--dimension);
  height: var(--dimension);
  position: absolute;

  &.top-left {
    border-top: var(--dimension) solid black;
    border-right: var(--dimension) solid transparent;
    top: 0;
    left: 0;
  }

  &.top-right {
    border-top: var(--dimension) solid black;
    border-left: var(--dimension) solid transparent;
    top: 0;
    right: 0;
  }

  &.bottom-left {
    border-bottom: var(--dimension) solid black;
    border-right: var(--dimension) solid transparent;
    bottom: 0;
    left: 0;
  }

  &.bottom-right {
    border-bottom: var(--dimension) solid black;
    border-left: var(--dimension) solid transparent;
    bottom: 0;
    right: 0;
  }

}
</style>