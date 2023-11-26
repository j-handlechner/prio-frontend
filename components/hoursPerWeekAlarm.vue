<template>
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" modal header="Keine Stunden mehr verfügbar!" :style="{ width: 'clamp(300px, 35vw, 35vw)' }">
      <p>
        Du kannst nur {{ 24 * 7 - weeklySleep }} Stunden verplanen (Eine ganze Woche hat {{ 24 * 7 }}h, du schläfst davon {{ weeklySleep }}h)
      </p>
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