<template>
  <div>
    <h1>Ist es das Leben, welches du wolltest?</h1>
  </div>
</template>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  h1 {
    font-family: Cirka;
    font-size: 4.4rem;
    @media screen and (max-width: 1250px) {
      font-size: 4vw;
    }
    @media screen and (max-width: 950px) {
      font-size: 14vw;
    }
    line-height: 115%;
  }

  p, h1 {
    padding: 1rem;
  }

  p {
    font-size: 0.75rem;
  }
</style>