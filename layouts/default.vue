
<template>
  <div>
    <ul class="mt-8 ">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/library">Library</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/survey">survey</NuxtLink>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
    max-width: 75vw;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;

    margin-bottom: 7.5vh;
  }

  a.router-link-active.router-link-exact-active {
    font-weight: 600;
  }


</style>