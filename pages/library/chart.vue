<template>
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
</template>

<script setup>
  const props = defineProps({
    data: Object,
    topleft: Number,
    topright: Number,
    bottomleft: Number,
    bottomright: Number,
    totalvalue: Number
  })

  const blockLeftUp = ref(null)
  const blockLeftDown = ref(null)
  const blockRightUp = ref(null)
  const blockRightDown = ref(null)
  const columnLeft = ref(null)
  const columnRight = ref(null)

  function sumWithoutItself(itself) {
    return props.bottomleft + props.topright + props.bottomright + props.topleft - itself
  }

  function getPositiveOrZero(expression) {
    if(expression < 0)
      return 0

    return expression
  }

  const baseValue = props.totalvalue / 4

  const valueLeftUp = computed(() => baseValue + (props.topleft - baseValue) - (props.bottomleft - baseValue) * 0.3333 - (props.topright - baseValue) * 0.3333 - (props.bottomright - baseValue) * 0.3333);  // get these values from props
  const valueLeftDown = computed(() => baseValue + (props.bottomleft - baseValue) - (props.topleft - baseValue) * 0.3333 - (props.topright - baseValue) * 0.3333 - (props.bottomright - baseValue) * 0.3333);
  const valueRightUp = computed(() => baseValue + (props.topright - baseValue) - (props.bottomright - baseValue) * 0.3333 - (props.bottomleft - baseValue) * 0.3333 - (props.topleft - baseValue) * 0.3333);
  const valueRightDown = computed(() => baseValue + (props.bottomright - baseValue) - (props.topright - baseValue) * 0.3333 - (props.bottomleft - baseValue) * 0.3333 - (props.topleft - baseValue) * 0.3333);


  const total = computed(() => valueLeftUp.value + valueLeftDown.value + valueRightUp.value + valueRightDown.value)
  const leftTotal = computed(() => valueLeftUp.value + valueLeftDown.value)
  const rightTotal = computed(() => valueRightUp.value + valueRightDown.value)

  const percentageLeft = computed(() => (leftTotal.value * 100) / total.value)

  const percentageLeftTop = computed(() => (valueLeftUp.value * 100) / leftTotal.value)
  const percentageRightTop = computed(() => (valueRightUp.value * 100) / rightTotal.value)
</script>

<style scoped lang="scss">
.library-wrapper {
  width: 100%;
  height: 100%;
  border: 0.75px solid black;
}

.prio-chart__wrapper {
  width: 100%;
  height: 100%;
  display: flex;

  --minheight: 75px;
}

.prio-chart__column {
  height: 100%;
  transition: 2s all ease;
  min-width: var(--minheight);
}

.prio-chart__block {
  width: 100%;
  border: 0.75px solid black;
  position: relative;

  transition: 2s all ease;

  min-height: var(--minheight);
  min-width: var(--minheight);

  max-height: calc(100% - var(--minheight));
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