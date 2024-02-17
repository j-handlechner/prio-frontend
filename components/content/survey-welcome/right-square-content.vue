<template>
  <div>
    <p class="flex flex-wrap flex-col">
      <span>
        (c) <u class="me-1 ms-1"><nuxt-link external to="https://prio.kollektivschlaflos.com" target="_blank">kollektiv schlaflos, </nuxt-link></u>
      </span>
      <span class="flex flex-wrap">
        <u class="me-1"><nuxt-link external to="https://www.linkedin.com/in/johannes-handlechner/" target="_blank">jo handlechner</nuxt-link></u> <span class="me-1">&</span>
        <u><nuxt-link external to="https://www.linkedin.com/in/tanjanicole/" target="_blank">tanja gruber</nuxt-link></u>
      </span>
    </p>
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
  }
}
</style>