<template>
  <div>
    <div class="library-wrapper">
      <button>helo button</button>
    </div>

    <div class="library-wrapper mt-8">
      <p>two buttons side by side growing in grid container</p>
      <div class="buttoncontainer">
        <button>Ja</button>
        <button>Nein</button>
      </div>
    </div>
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

.library-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttoncontainer {
  width: 100%;

  display: flex;

  display: grid;
  grid-template-columns: 50% 50%;
  border-radius: 1px solid red;

  button {
    border-left-width: 0.5px;
    border-right-width: 0.5px;

    &:first-child {
      border-left-width: 1px;
    }

    &:last-child {
      border-right-width: 1px;
    }
  }
}

</style>