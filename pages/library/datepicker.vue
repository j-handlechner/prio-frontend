<template>
  <div class="library-wrapper">
    <n-date-picker v-model:value="timestamp" size="large" type="date" />
  </div>
</template>

<script setup>
import { NDatePicker } from 'naive-ui'
</script>

<style>
.n-date-panel-actions {
  display: none!important;
}

</style>