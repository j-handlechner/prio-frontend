<template>
  <div class="library-wrapper">
    <n-tree-select
        :value="value"
        :options="optionsNew"
        default-value="Drive My Car"
        @update:value="handleUpdateValue"
    />

    <p>current value: {{ currentValue }}</p>
  </div>
</template>

<script setup>
const currentValue = ref(null)

const optionsNew = [
  {
    label: "Option 1",
    key: "op1",
  },
  {
    label: "Option 2",
    key: "op2"
  },
  {
    label: "Option 3",
    key: "op3",
  },
  {
    label: "Option 4",
    key: "op4"
  }
]

const handleUpdateValue = (value, option) => {
  console.log(value, option);
  console.log("option: ", option)
  console.log("option.label: ", option.label)
  currentValue.value = option.label
}

</script>