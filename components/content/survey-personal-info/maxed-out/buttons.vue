<template>
  <div class="selectbuttonwrapper">
    <Button>
      <p>zurück</p>
    </Button>

    <Button>
      <p>weiter</p>
    </Button>
  </div>

</template>

<style lang="scss" scoped>
.selectbuttonwrapper {
  display: flex;
  gap: 0rem;

  p {
    font-size: 2rem;
    font-family: Cirka;
    font-size: 2.5rem;
    line-height: 125%;
  }
}
</style>

<style lang="scss">
.selectbuttonwrapper {
  width: 100%;
  button {
    padding-top: calc(1.5rem + 0.625rem);
    padding-bottom: calc(1.5rem + 0.625rem);
    width: 100%;
    justify-content: center;

  }

  & > div {
    width: 50%;
  }
}
</style>