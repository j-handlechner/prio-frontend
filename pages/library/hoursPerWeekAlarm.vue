<template>
  <p>hours per week alarm here</p>
  <p>total hours: {{ priochartDataTopLeft + priochartDataBottomLeft + priochartDataTopRight + priochartDataBottomRight}}</p>
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
      <p>
        hey! you ran out of hours!
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

const visible = ref(false);
const priochartDataTopLeft = usePriochartTopLeft()
const priochartDataBottomLeft = usePriochartBottomLeft()
const priochartDataTopRight = usePriochartTopRight()
const priochartDataBottomRight = usePriochartBottomRight()

watchEffect(() => {
  if(priochartDataTopLeft.value + priochartDataBottomLeft.value + priochartDataTopRight.value + priochartDataBottomRight.value >= 200) {
    visible.value = true
    console.log("hello! over 200!")
  }
})
</script>
