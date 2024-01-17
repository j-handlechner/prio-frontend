<template>
  <div class="slider-wrapper">
    <label>
      <slot name="label"></slot>
    </label>
    <div class="slider-value-wrapper">
      <Slider :disabled="isDisabled" :max="100"
              :modelValue="props.modelValue"
              @update:modelValue="newValue => updateModelValue(newValue)"
              :pt="{
      range: {
        style: {
          backgroundColor: 'black'
        }
      },
      handle: {
        style: {
          backgroundColor: 'black',
          borderRadius: 0,
          borderWidth: 1,
          borderColor: 'black',
          rotate: '45deg',
          scale: 0.6
         }
      }
    }"/>
      <p class="current-value">{{ props.modelValue }}h</p>
    </div>

  </div>
</template>

<script setup>
import Slider from 'primevue/slider';
import {useWeeklySleepHours} from "/composables/state";

const props = defineProps(["name", "initialValue", "modelValue", "max"])

const value = ref(props.initialValue || 0)
const emit = defineEmits(["value-updated", "updateModelValue"])


const priochartDataTopLeft = usePriochartTopLeft()
const priochartDataBottomLeft = usePriochartBottomLeft()
const priochartDataTopRight = usePriochartTopRight()
const priochartDataBottomRight = usePriochartBottomRight()

const isDisabled = ref(false)

const weeklySleepHours = useWeeklySleepHours()
let previousValue = 0

function updateModelValue(newValue) {
  console.log({
    topleft: priochartDataTopLeft.value,
    topright: priochartDataTopRight.value,
    bottomleft: priochartDataBottomLeft.value,
    bottomright: priochartDataBottomRight.value,
  })
  if(priochartDataTopLeft.value + priochartDataBottomLeft.value + priochartDataTopRight.value + priochartDataBottomRight.value - previousValue + newValue <= 24 * 7 - weeklySleepHours.value) {
    value.value = newValue < 0 ? 0 : newValue
    previousValue = value.value
    emit("updateModelValue", value.value)
  } else if(newValue < previousValue) {
    value.value = newValue < 0 ? 0 : newValue
    previousValue = value.value
    emit("updateModelValue", value.value)
  } else {
    let tooMuch = (priochartDataTopLeft.value + priochartDataBottomLeft.value + priochartDataTopRight.value + priochartDataBottomRight.value) - (24 * 7 - weeklySleepHours.value)
    // value.value = tooMuch > 0 ? value.value - tooMuch : value.value
    value.value = previousValue
    // previousValue = value.value
    emit("updateModelValue", value.value)
  }
}

function updateValue(newValue) {
  const obj = {
    value: value.value,
    name: props.name
  }

  emit("value-updated", obj)
}

</script>

<style lang="scss" scoped>
.slider-wrapper {
  margin: 0 3rem;


  label {
    line-height: 135%;
    margin-bottom: .75rem;
    display: block;
  }
}

.slider-value-wrapper {
  display: grid;
  gap: 1rem;
  align-items: center;
  width: 100%;
  grid-template-columns: 1fr auto;

  .current-value {
    font-size: max(1rem, .75vw);
  }
}


</style>

<style lang="scss">
  .p-slider .p-slider-handle:focus {
    box-shadow: 0 0 0 0.2rem #b6b6b6 !important;
  }
</style>
