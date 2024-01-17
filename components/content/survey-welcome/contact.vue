<template>
  <div class="wrapper">
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
    <div>
      <a>@someone</a>
      <a>@something</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-size: 0.75rem;

  a {
    color: black;
    text-decoration: underline;
    display: block;
  }
}
</style>