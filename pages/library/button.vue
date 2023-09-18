<template>
  <div>
      <button>helo button</button>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/mixins.scss";

button {
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  border: 1px black solid;
  flex-grow: 1;

  transition: 0.35s ease-in-out;

  @include cirkaLight();
  font-family: "Cirka";
  font-weight: 200;

  &:hover {
    background-color: black;
    color: white;
  }
}

</style>