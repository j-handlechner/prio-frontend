<template>
  <div class="prio-chart__wrapper" id="">
        <div class="prio-chart__column" ref="columnLeft"
             :style="{
                width: `${percentageLeft}%`
              }">
          <div class="prio-chart__block" ref="blockLeftUp"
               :style="{
                height: `${percentageLeftTopVisualization}%`,
                fontSize: `${isForPrint ? 2.5 + 4.5 * (percentageLeftTop) / 100 + 'rem' : 'max(' + (1 + (2 * (percentageLeftTop) / 100)) + 'rem, ' + (1 + (8 * (percentageLeftTop) / 100)) + 'vw)' }`,
                backgroundColor: `${currentViewName == 'end-yes' ? successColors.topLeft : 'black'}`,
                color: `${currentViewName == 'end-yes' ? 'black' : 'white'}`

              }">
            <Transition>
              <p class="prio-chart__percentage"  v-if="currentViewName == 'confirm' || currentViewName == 'end-yes' || currentViewName == 'end-no'">{{ (percentageLeftTop).toFixed(0) }}%</p>
            </Transition>

            <Transition>
              <p class="prio-chart__label"  v-if="currentViewName == 'confirm' || currentViewName == 'end-yes' || currentViewName == 'end-no'"
                 :style="{
                fontSize: `${isForPrint ? 1 + 2 * (percentageLeftTop) / 100 + 'rem' : 'max(' + (1 + (2 * (percentageLeftTop) / 100)) + 'rem, ' + (1 + (8 * (percentageLeftTop) / 100)) + 'vw)' }`
              }"

              >{{ 'Arbeit' }}</p>
            </Transition>

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>
          <div class="prio-chart__block" ref="blockLeftDown"
               :style="{
                height: `${100 - percentageLeftTopVisualization}%`,
                fontSize: `${isForPrint ? 2.5 + 4.5 * (percentageLeftBottom) / 100 + 'rem' : 'max(' + (1 + (2 * (percentageLeftBottom) / 100)) + 'rem, ' + (1 + (8 * (percentageLeftBottom) / 100)) + 'vw)' }`,
                backgroundColor: `${currentViewName == 'end-yes' ? successColors.bottomLeft : 'black'}`,
                color: `${currentViewName == 'end-yes' ? 'black' : 'white'}`
              }">
            <Transition>
              <p class="prio-chart__percentage" v-if="currentViewName == 'confirm' || currentViewName == 'end-yes' || currentViewName == 'end-no'">{{(percentageLeftBottom).toFixed(0) }}%</p>
            </Transition>

            <Transition>
              <p class="prio-chart__label"  v-if="currentViewName == 'confirm' || currentViewName == 'end-yes' || currentViewName == 'end-no'"
                 :style="{
                fontSize: `${isForPrint ? 1 + 2 * (percentageLeftBottom) / 100 + 'rem' : 'max(' + (1 + (2 * (percentageLeftBottom) / 100)) + 'rem, ' + (1 + (8 * (percentageLeftBottom) / 100)) + 'vw)' }`

              }"
              >{{ 'Andere' }}</p>
            </Transition>

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
                fontSize: `${isForPrint ? 2.5 + 4.5 * (percentageRightTop) / 100 + 'rem' : 'max(' + (1 + (2 * (percentageRightTop) / 100)) + 'rem, ' + (1 + (8 * (percentageRightTop) / 100)) + 'vw)' }`,
                backgroundColor: `${currentViewName == 'end-yes' ? successColors.topRight : 'black'}`,
                color: `${currentViewName == 'end-yes' ? 'black' : 'white'}`
              }">
            <Transition>
              <p class="prio-chart__percentage"  v-if="currentViewName == 'confirm' || currentViewName == 'end-yes' || currentViewName == 'end-no'">{{ (percentageRightTop).toFixed(0) }}%</p>
            </Transition>

            <Transition>
              <p class="prio-chart__label"  v-if="currentViewName == 'confirm' || currentViewName == 'end-yes' || currentViewName == 'end-no'"
                 :style="{
                    fontSize: `${isForPrint ? 1 + 2 * (percentageRightTop) / 100 + 'rem' : 'max(' + (1 + (2 * (percentageRightTop) / 100)) + 'rem, ' + (1 + (8 * (percentageRightTop) / 100)) + 'vw)' }`
              }"
              >{{ 'Anderes' }}</p>
            </Transition>

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>
          <div class="prio-chart__block" ref="blockRightDown"
               :style="{
                height: `${100 - percentageRightTopVisualization}%`,
                fontSize: `${isForPrint ? 2.5 + 4.5 * (percentageRightBottom) / 100 + 'rem' : 'max(' + (1 + (2 * (percentageRightBottom) / 100)) + 'rem, ' + (1 + (8 * (percentageRightBottom) / 100)) + 'vw)' }`,
                backgroundColor: `${currentViewName == 'end-yes' ? successColors.bottomRight : 'black'}`,
                color: `${currentViewName == 'end-yes' ? 'black' : 'white'}`
              }">
            <Transition>
              <p class="prio-chart__percentage"  v-if="currentViewName == 'confirm' || currentViewName == 'end-yes' || currentViewName == 'end-no'">{{ (percentageRightBottom).toFixed(0) }}%</p>
            </Transition>

            <Transition>
              <p class="prio-chart__label"  v-if="currentViewName == 'confirm' || currentViewName == 'end-yes' || currentViewName == 'end-no'" :style="{
                fontSize: `${isForPrint ? 1 + 2 * (percentageRightBottom) / 100 + 'rem' : 'max(' + (1 + (2 * (percentageRightBottom) / 100)) + 'rem, ' + (1 + (8 * (percentageRightBottom) / 100)) + 'vw)' }`
              }">{{ 'Ich' }}</p>
            </Transition>

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>
        </div>
      </div>
</template>

<script setup>
import {
  useCurrentViewName,
  visualizationPercentLeftTop,
  visualizationPercentLeftBottom,
  visualizationPercentRightBottom,
  visualizationPercentRightTop, bottomBarRightBottomPercent, bottomBarRightTopPercent, bottomBarLeftBottomPercent, bottomBarLeftTopPercent
} from "/composables/state";
const currentViewName = useCurrentViewName()

  const props = defineProps({
    data: Object,
    topleft: Number,
    topright: Number,
    bottomleft: Number,
    bottomright: Number,
    totalvalue: Number,
    isForPrint: {
      type: Boolean,
      default: true
    }
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

  // const priochartBottomRight = usePriochartBottomRight()
  // priochartBottomRight.value = valueRightBottom;

  // get the total percentages
  const percentageLeft = computed(() => (valueLeftUp.value + valueLeftBottom.value) / (props.totalvalue) * 100)
  const percentageLeftTop = computed(() => {
    const newval = valueLeftUp.value / props.totalvalue * 100
    bottomBarLeftTopPercent().value = newval
    return newval
  })
  const percentageLeftBottom = computed(() => {
    const newval = valueLeftBottom.value / props.totalvalue * 100
    bottomBarLeftBottomPercent().value = newval
    return newval;
  })

  const percentageRight = computed(() => 100 - percentageLeft.value)
  const percentageRightTop = computed(() => {
    const newval = valueRightUp.value / props.totalvalue * 100
    bottomBarRightTopPercent().value = newval
    return newval
  })
  const percentageRightBottom = computed(() => {
    const newval = valueRightBottom.value / props.totalvalue * 100
    bottomBarRightBottomPercent().value = newval
    return newval
  })

  // get the special visualization percentages
  const percentageLeftTopVisualization = computed(() => {
    const newval = valueLeftUp.value / (valueLeftUp.value + valueLeftBottom.value) * 100
    visualizationPercentLeftTop().value = newval
    visualizationPercentLeftBottom().value = 100 - newval
    return newval
  })

  const percentageRightTopVisualization = computed(() => {
    const newval = valueRightUp.value / (valueRightUp.value + valueRightBottom.value) * 100
    visualizationPercentRightTop().value = newval
    visualizationPercentRightBottom().value = 100 - newval
    return newval
  })

  const successColors = {
    topLeft: '#FF5527',
    bottomLeft: '#08AA47',
    topRight: '#7D28F9',
    bottomRight: '#FFA633'
  }
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
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
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

.prio-chart__percentage, .prio-chart__label {
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

.prio-chart__label {
  top: 0;
  left: 0;
  right: unset;
  bottom: unset;

  padding: .5rem 0 0 1rem;
}
</style>