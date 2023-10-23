<template>
  <div class="prio-chart__wrapper">
        <div class="prio-chart__column" ref="columnLeft"
             :style="{
                width: `${percentageLeft}%`
              }">
          <div class="prio-chart__block" ref="blockLeftUp"
               :style="{
                height: `${percentageLeftTopVisualization}%`,
                fontSize: `${2.5 + 4.5 * (percentageLeftTop) / 100}rem`

              }">
            <p class="prio-chart__percentage">{{ (percentageLeftTop).toFixed(0) }}%</p>

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>
          <div class="prio-chart__block" ref="blockLeftDown"
               :style="{
                height: `${100 - percentageLeftTopVisualization}%`,
                fontSize: `${2.5 + 4.5 * (percentageLeftBottom) / 100}rem`

              }">
            <p class="prio-chart__percentage">{{(percentageLeftBottom).toFixed(0) }}%</p>

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>
        </div>

        <div class="prio-chart__column" ref="columnRight"
             :style="{
               width: `${percentageRight}%`
             }">
          <div class="prio-chart__block" ref="blockRightUp"
               :style="{
                height: `${percentageRightTopVisualization}%`,
                fontSize: `${2.5 + 4.5 * (percentageRightTop) / 100}rem`
              }">
            <p class="prio-chart__percentage">{{ (percentageRightTop).toFixed(0) }}%</p>

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>
          <div class="prio-chart__block" ref="blockRightDown"
               :style="{
                height: `${100 - percentageRightTopVisualization}%`,
                fontSize: `${2.5 + 4.5 * (percentageRightBottom) / 100}rem`
              }">
            <p class="prio-chart__percentage">{{ (percentageRightBottom).toFixed(0) }}%</p>
            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
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


  const expectedPerField = computed(() => props.totalvalue / 4)

  // calculate all abweichungen
  const deviationLeftUp = computed(() => props.topleft - expectedPerField.value);
  const deviationLeftBottom = computed(() => props.bottomleft - expectedPerField.value);
  const deviationRightUp = computed(() => props.topright - expectedPerField.value);
  const deviationRightBottom = computed(() => props.bottomright - expectedPerField.value);

  // calculate all values with accounted deviations
  const valueLeftUp = computed(() => expectedPerField.value + deviationLeftUp.value - deviationLeftBottom.value / 4 - deviationRightUp.value / 4 - deviationRightBottom.value / 4 - deviationLeftUp.value / 4)
  const valueLeftBottom = computed(() => expectedPerField.value + deviationLeftBottom.value - deviationLeftUp.value / 4 - deviationRightUp.value / 4 - deviationRightBottom.value / 4 - deviationLeftBottom.value / 4)
  const valueRightUp = computed(() => expectedPerField.value + deviationRightUp.value - deviationLeftUp.value / 4 - deviationLeftBottom.value / 4 - deviationRightBottom.value / 4 - deviationRightUp.value / 4)
  const valueRightBottom = computed(() => expectedPerField.value + deviationRightBottom.value - deviationLeftUp.value / 4 - deviationLeftBottom.value / 4 - deviationRightUp.value / 4 - deviationRightBottom.value / 4)

  // get the total percentages
  const percentageLeft = computed(() => (valueLeftUp.value + valueLeftBottom.value) / (props.totalvalue) * 100)
  const percentageLeftTop = computed(() => valueLeftUp.value / props.totalvalue * 100)
  const percentageLeftBottom = computed(() => valueLeftBottom.value / props.totalvalue * 100)

  const percentageRight = computed(() => 100 - percentageLeft.value)
  const percentageRightTop = computed(() => valueRightUp.value / props.totalvalue * 100)
  const percentageRightBottom = computed(() => valueRightBottom.value / props.totalvalue * 100)

  // get the special visualization percentages
  const percentageLeftTopVisualization = computed(() => valueLeftUp.value / (valueLeftUp.value + valueLeftBottom.value) * 100)
  const percentageRightTopVisualization = computed(() => valueRightUp.value / (valueRightUp.value + valueRightBottom.value) * 100)
</script>

<style scoped lang="scss">
$primary: black;
$secondary: white;
.library-wrapper {
  width: 100%;
  height: 100%;
  border: 0.75px solid $secondary;
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
  min-width: calc(var(--minheight) * 2.5);
}

.prio-chart__block {
  width: 100%;
  border: 0.75px solid $secondary;
  position: relative;
  background: $primary;

  transition: 3s all cubic-bezier(0.65, 0, 0.35, 1);

  min-height: var(--minheight);
  min-width: calc(var(--minheight) * 2.5);

  max-height: calc(100% - var(--minheight));
}

.prio-chart__corner {
  --dimension: 5px;
  position: absolute;
  width: var(--dimension);
  height: var(--dimension);
  position: absolute;

  &.top-left {
    border-top: var(--dimension) solid $secondary;
    border-right: var(--dimension) solid transparent;
    top: 0;
    left: 0;
  }

  &.top-right {
    border-top: var(--dimension) solid $secondary;
    border-left: var(--dimension) solid transparent;
    top: 0;
    right: 0;
  }

  &.bottom-left {
    border-bottom: var(--dimension) solid $secondary;
    border-right: var(--dimension) solid transparent;
    bottom: 0;
    left: 0;
  }

  &.bottom-right {
    border-bottom: var(--dimension) solid $secondary;
    border-left: var(--dimension) solid transparent;
    bottom: 0;
    right: 0;
  }
}

.prio-chart__percentage {
  position: absolute;
  right: 0;
  bottom: 0;
  padding-right: 1rem;
  padding-bottom: 0rem;
  color: white;
  font-size: 4rem;
  font-size: inherit;
  font-family: "Cirka";
  font-weight: 200;
}
</style>