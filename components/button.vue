<template>
  <div>
      <button @click="() => buttonClicked()" :disabled="isDisabled ? true : null" :class="`${isDisabled ? 'disabled' : ''}`">
        <slot></slot>
        <div class="prio-chart__corner top-right"></div>
        <div class="prio-chart__corner top-left"></div>
        <div class="prio-chart__corner bottom-right"></div>
        <div class="prio-chart__corner bottom-left"></div>
      </button>
  </div>
</template>

<script setup>
const emit = defineEmits(["buttonclicked"])
const props = defineProps(["disabled"])

const isDisabled = computed(() => props.disabled)

function buttonClicked() {
  emit("buttonclicked", 1)
}

</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";

button {
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  @media screen and (max-width: 1300px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 950px) {
    font-size: clamp(2rem, 8vw, 2.75rem);
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  flex-grow: 1;
  width: 100%;
  transition: 0.35s ease-in-out;
  display: flex;
  justify-content: start;

  @include cirkaLight();
  font-family: "Cirka";
  font-weight: 200;

  position: relative;

  border-left: .5px solid black;
  border-right: .5px solid black;

  &.disabled {
    opacity: .5;
    // pointer-events: none;

    cursor: auto;


    &:hover {
      background-color: white;
      color: black;
    }
  }

  &:hover {
    background-color: black;
    color: white;
  }
}

</style>