<template>
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" modal header="Alle Stunden verplant!" :style="{ width: 'clamp(300px, 35vw, 35vw)' }">
      <p v-if="!allHoursPlanned"><strong >Bitte verteile deine Prioritäten anders. Es müssen alle verfügbaren Stunden auf alle vier Teilbereiche verteilt werden.</strong><br/><br/></p>
      <p>
        Du hast alle aktiven Stunden einer Woche verplant ({{ 24 * 7 - weeklySleep }}h)
      </p>
      <p><small>(Eine ganze Woche hat {{ 24 * 7 }}h, du schläfst davon {{ weeklySleep }}h)</small></p>

      <p v-if="allHoursPlanned"><br/><strong >Jetzt kannst du zum nächsten Schritt gehen.</strong></p>
    </Dialog>
  </div>
</template>

<script setup>
import Dialog from 'primevue/dialog';
import {
  usePriochartTopLeft,
  usePriochartBottomLeft,
  usePriochartTopRight,
  usePriochartBottomRight,
  useSlidersSteps
} from "/composables/state";
import { useWeeklySleepHours } from "/composables/state";

const visible = ref(false);
const priochartDataTopLeft = usePriochartTopLeft()
const priochartDataBottomLeft = usePriochartBottomLeft()
const priochartDataTopRight = usePriochartTopRight()
const priochartDataBottomRight = usePriochartBottomRight()

const weeklySleep = useWeeklySleepHours()

const currentSlidersStep = useSlidersSteps()

const allHoursPlanned = computed(() => {
  return currentSlidersStep.value === 3 && priochartDataTopLeft.value !== 0 && priochartDataBottomLeft.value !== 0 && priochartDataBottomRight.value !== 0 && priochartDataTopRight.value !== 0 && priochartDataTopLeft.value + priochartDataBottomLeft.value + priochartDataTopRight.value + priochartDataBottomRight.value + weeklySleep.value == 24 * 7
})

watchEffect(() => {
  if(priochartDataTopLeft.value + priochartDataBottomLeft.value + priochartDataTopRight.value + priochartDataBottomRight.value >= 24 * 7 - weeklySleep.value) {
    visible.value = true
  } else {
    visible.value = false
  }
})
</script>