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
    font-size: max(4.4rem, 4vw);
    @media screen and (max-width: 1300px) {
      font-size: 4vw;
    }
    @media screen and (max-width: 950px) {
      font-size: min(14vw, 4rem);
    }
    line-height: 115%;
  }

  p, h1 {
    padding: 1rem;
  }

  p {
    font-size: max(.75rem, .75vw);
  }
</style>