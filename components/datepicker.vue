<template>
  <div>
    <label for="calendar"><slot name="label"></slot></label>
    <Calendar id="calendar"
              :modelValue="props.modelValue"
              @update:modelValue="newValue => updateModelValue(newValue)"/>
  </div>
</template>

<script setup>
  import Calendar from 'primevue/calendar'
  const date = ref(null)
  const props = defineProps(["modelValue"])
  const emit = defineEmits(["updateModelValue"])

  function updateModelValue(newValue) {
    emit("updateModelValue", newValue)
  }
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

.p-calendar .p-inputtext {
  font-family: Helvetica;
  font-weight: 300;
  font-size: .875rem;
}

.p-datepicker table th,
.p-datepicker table td {
  font-size: .75rem;
  padding: 0.2rem;
}

.p-datepicker table td > span {
  width: 1.5rem;
  height: 1.5rem;
}
</style>