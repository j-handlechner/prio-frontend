<template>
  <div class="library-wrapper">
    <n-slider v-model:value="value" :step="1">
      <template #thumb>
        <SliderThumb />
      </template>
    </n-slider>

    <p>current value: {{ value }}</p>
  </div>
</template>


<script setup>
import { ref } from "vue";
import SliderThumb from "./sliderThumb.vue";
import { NSlider } from 'naive-ui'

const value = ref(50)
</script>