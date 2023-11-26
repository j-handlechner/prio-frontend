<template>
  <div>
    <p class="identificationnum">01*</p>
    <p class="text-bottom">identifikations&shy;nummer</p>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 950px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid black;
  }

  p {
    &.identificationnum {
      font-family: Cirka;
      font-size: 3.5rem;
      text-align: center;
      padding: 1rem;

      @media screen and (max-width: 950px) {
        font-size: 1.25rem;
        padding: .25rem 1rem;
      }
    }

    &.text-bottom {
      font-size: 0.75rem;
      padding: 1rem;
    }
  }
}
</style>