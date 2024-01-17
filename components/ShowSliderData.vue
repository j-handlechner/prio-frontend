<template>
  <p>top left: {{ priochartTopLeft }}</p>
  <p>bottom left: {{ priochartBottomLeft }}</p>
  <p>top right: {{ priochartTopRight }}</p>
  <p>bottom right: {{ priochartBottomRight }}</p>
</template>

<script setup>

import { usePriochartTopLeft, usePriochartBottomLeft, usePriochartTopRight, usePriochartBottomRight } from "/composables/state";

const priochartTopLeft = usePriochartTopLeft()
const priochartTopRight = usePriochartTopRight()
const priochartBottomLeft = usePriochartBottomLeft()
const priochartBottomRight = usePriochartBottomRight()

</script>