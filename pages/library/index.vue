<template>
  <div>
    <h1 class="mb-2">Component Library</h1>
    <p>A collection of all reusable components that are somewhere utilised in this project.</p>

    <p class="mt-8">Something to remember: if possible, we use an component library that we style to our preferences. In our case, we use <strong><a href="https://www.naiveui.com/en-US/light">Naive UI</a></strong></p>

    <h2>Components</h2>
    <div class="gridwrapper">
      <NuxtLink to="/library/chart">
        <div class="card">
          Button
        </div>
      </NuxtLink>

      <NuxtLink to="/library/textinput">
        <div class="card">
          Text Input
        </div>
      </NuxtLink>

      <NuxtLink to="/library/datepicker">
        <div class="card">
          Date Picker
        </div>
      </NuxtLink>

      <NuxtLink to="/library/slider">
        <div class="card">
          Slider
        </div>
      </NuxtLink>

      <NuxtLink to="/library/chart">
        <div class="card">
          Chart
        </div>
      </NuxtLink>
    </div>

    <h2>Custom Utility Classes</h2>
    <div class="gridwrapper">
      <NuxtLink to="/library/chart">
        <div class="card">
          Textreveal
        </div>
      </NuxtLink>

      <NuxtLink to="/library/textinput">
        <div class="card">
          ...
        </div>
      </NuxtLink>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  h1, p {
    text-align: center;
    max-width: 75ch;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    margin: 0 auto;
    width: 75vw;
    text-align: left;

    margin-top: 7.5vh;
    margin-bottom: 2.5vh;
    font-weight: 500;
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  .gridwrapper {
    margin: 0 auto;
    width: 75vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.25rem;

    &:last-child {
      margin-bottom: 20vh;
    }

    a {
      color: white;
      text-transform: uppercase;
      font-weight: 500;
      text-decoration: none;

      .card {
        background-color: #242424;
        border: 1px solid #242424;

        min-height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.25rem;
      }

      &:hover {
        color: #242424;

        .card {
          background-color: white;
        }
      }
    }
  }
</style>