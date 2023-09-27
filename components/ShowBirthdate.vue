<template>
  <p>current picked birthdate: {{ birthdate }}</p>

  <p>current step in form {{ currentPersonalInfoStep }}</p>
</template>

<script setup>
  import {useBirthdate} from "/composables/state";
  import { usePersonalInfoSteps } from "/composables/state";

  const birthdate = useBirthdate()
  const currentPersonalInfoStep = usePersonalInfoSteps()
</script>