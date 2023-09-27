<template>
  <div>
      <button><slot></slot></button>
  </div>
</template>

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

  &:hover {
    background-color: black;
    color: white;
  }
}

</style>