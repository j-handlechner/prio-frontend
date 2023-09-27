<template>
  <p>current picked birthdate: {{ birthdate }}</p>
</template>

<script setup>
  import {useBirthdate} from "/composables/state";

  const birthdate = useBirthdate()
</script>