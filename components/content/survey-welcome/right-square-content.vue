<template>
  <div>
    <p>Um mehr informationen zu erhalten, schiebe die Visualisierung nach oben</p>
    <p>→</p>
  </div>

</template>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;

  p {
    font-size: max(.75rem, .75vw);
    &:last-of-type {
      font-size: 5rem;
      font-family: Cirka;
      line-height: 50%;
    }
  }
}
</style>