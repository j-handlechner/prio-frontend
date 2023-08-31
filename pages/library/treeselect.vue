<template>
  <n-tree-select
      :options="options"
      default-value="Drive My Car"
      @update:value="handleUpdateValue"
  />
</template>

<script>
export default defineComponent({
  setup() {
    return {
      handleUpdateValue(value, option) {
        console.log(value, option);
      },
      options: [
        {
          label: "Rubber Soul",
          key: "Rubber Soul",
        },
        {
          label: "Let It Be",
          key: "Let It Be Album"
        }
      ]
    };
  }
});
</script>