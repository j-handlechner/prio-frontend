<template>
  <div>
    <h1>Teil mal dein Leben durch vier!</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
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

    line-height: 115%;
  }

  p, h1 {
    padding: 1rem;
  }

  p {
    font-size: 0.75rem;
  }
</style>