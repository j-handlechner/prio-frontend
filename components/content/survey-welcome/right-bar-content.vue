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

  p {
    &.identificationnum {
      font-family: Cirka;
      font-size: 3.5rem;
      text-align: center;
      padding: 1rem;
    }

    &.text-bottom {
      font-size: 0.75rem;
      padding: 1rem;
    }
  }
}
</style>