<template>
  <div class="library-wrapper">
    <Calendar
        v-model="date"
              />
    <p>current date: {{ date }}</p>
  </div>
</template>

<script setup>
  import Calendar from 'primevue/calendar'
  const date = ref(null)
</script>

<style lang="scss">
span.p-calendar {
  display: block;

  input {
    width: 100% !important;
    border-radius: 0px;
    border: 1px solid black;
  }
}
</style>