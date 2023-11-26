<template>
  <div>
      <button @click="() => buttonClicked()" :disabled="isDisabled ? true : null" :class="`${isDisabled ? 'disabled' : ''}`"><slot></slot></button>
  </div>
</template>

<script setup>
const emit = defineEmits(["buttonclicked"])
const props = defineProps(["disabled"])

const isDisabled = computed(() => props.disabled)

function buttonClicked() {
  console.log('button (not component) clicked')
  emit("buttonclicked", 1)
}

</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";

button {
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  flex-grow: 1;
  width: 100%;
  transition: 0.35s ease-in-out;
  display: flex;
  gap: 2rem;
  justify-content: start;

  @include cirkaLight();
  font-family: "Cirka";
  font-weight: 200;

  &.disabled {
    opacity: .5;
    pointer-events: none;
  }

  &:hover {
    background-color: black;
    color: white;
  }
}

</style>