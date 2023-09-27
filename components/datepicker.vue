<template>
  <div>
    <label for="calendar"><slot name="label"></slot></label>
    <Calendar id="calendar" v-model="date" />
  </div>
</template>

<script setup>
  import Calendar from 'primevue/calendar'
  const date = ref(null)
</script>

<style lang="scss" scoped>
div {
  display: flex;
  font-family: Cirka;

  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  label {
    font-size: 1rem;
  }
}

</style>

<!-- the following styles are unscoped on purpose! -->
<style lang="scss">
span.p-calendar {
  display: block;
  width: 100%;

  input {
    width: 100% !important;
    border-radius: 0px;
    border: 1px solid black;
  }
}
</style>