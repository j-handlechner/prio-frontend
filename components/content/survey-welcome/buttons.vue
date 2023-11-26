<template>
  <div class="wrapper">
    <p>teilnehmen</p> <p >→</p>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
div {
  p {
    font-size: 2rem;
    font-family: Cirka;
    font-size: 3.5rem;

    @media screen and (max-width: 1250px) {
      font-size: 3vw;
    }
    @media screen and (max-width: 950px) {
      font-size: clamp(2rem, 8vw, 2.75rem);    }
    line-height: 125%;
  }

  p:last-of-type {
    scale: 1.25;
  }
}


</style>