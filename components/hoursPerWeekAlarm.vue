<template>
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" modal header="Alle Stunden verplant!" :style="{ width: 'clamp(300px, 35vw, 35vw)' }">
      <p>
        Du hast alle aktiven Stunden einer Woche verplant ({{ 24 * 7 - weeklySleep }}h)
      </p>
      <p><small>(Eine ganze Woche hat {{ 24 * 7 }}h, du schläfst davon {{ weeklySleep }}h)</small></p>
      <br/>
      <p><strong>Jetzt kannst du zum nächsten Schritt gehen.</strong></p>

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
  } else {
    visible.value = false
  }
})
</script>