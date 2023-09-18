<template>
  <div class="library-wrapper">
    <Slider @change="updateValue" class="testi" v-model="value" max="100" :pt="{
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
          scale: 0.6,

         }
      }
    }"/>
    <p>current value: {{ value }}</p>
  </div>
</template>

<script setup>
import Slider from 'primevue/slider';

const props = defineProps({
  name: String,
  initialValue: Number
})

const value = ref(props.initialValue)

const emit = defineEmits(["value-updated"])

function updateValue() {
  const obj = {
    value: value.value,
    name: props.name
  }

  emit("value-updated", obj)
}

</script>

<style lang="scss">
  .p-slider .p-slider-handle:focus {
    box-shadow: 0 0 0 0.2rem #b6b6b6 !important;
  }
</style>
