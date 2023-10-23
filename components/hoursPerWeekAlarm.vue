<template>
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
      <p>
        hey! you ran out of hours!
        you only have {{ 24 * 7 - weeklySleep }} hours to spend (one week has {{ 24 * 7 }} hours, you sleep {{ weeklySleep }} hours of them)
      </p>
      <template #footer>
        <Button label="No" icon="pi pi-times" @click="visible = false" text />
        <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import Dialog from 'primevue/dialog';
import { usePriochartTopLeft, usePriochartBottomLeft, usePriochartTopRight, usePriochartBottomRight } from "/composables/state";
import { useWeeklySleepHours } from "/composables/state";

const visible = ref(false);
const priochartDataTopLeft = usePriochartTopLeft()
const priochartDataBottomLeft = usePriochartBottomLeft()
const priochartDataTopRight = usePriochartTopRight()
const priochartDataBottomRight = usePriochartBottomRight()

const weeklySleep = useWeeklySleepHours()

watchEffect(() => {
  if(priochartDataTopLeft.value + priochartDataBottomLeft.value + priochartDataTopRight.value + priochartDataBottomRight.value >= 24 * 7 - weeklySleep.value) {
    visible.value = true
    console.log("hello! over 200!")
  }
})
</script>
