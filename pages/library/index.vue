<template>
  <div>
    <h1 class="mb-2">Component Library</h1>
    <p>A collection of all reusable components that are somewhere utilised in this project.</p>

    <p class="mt-8">Something to remember: if possible, we use an component library that we style to our preferences. In our case, we use <strong><a href="https://www.naiveui.com/en-US/light">Naive UI</a></strong></p>

    <h2>Areas</h2>
    <div class="gridwrapper">
      <NuxtLink to="/library/areas/personalinfo">
        <div class="card">
          Personal Info
        </div>
      </NuxtLink>

      <NuxtLink to="/library/areas/timeasleep">
        <div class="card">
          Time asleep
        </div>
      </NuxtLink>

      <NuxtLink to="/library/areas/timesplit">
        <div class="card">
          Time split (with sliders)
        </div>
      </NuxtLink>
    </div>


    <h2>Components</h2>
    <div class="gridwrapper">
      <NuxtLink to="/library/button">
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

      <NuxtLink to="/library/select">
        <div class="card">
          Select
        </div>
      </NuxtLink>

      <NuxtLink to="/library/selectbutton">
        <div class="card">
          Selectbutton
        </div>
      </NuxtLink>
    </div>

    <h2>PRIO Specific Components</h2>
    <div class="gridwrapper">
      <NuxtLink to="/library/charttestWithSliders">
        <div class="card">
          Charttest with Sliders
        </div>
      </NuxtLink>

      <NuxtLink to="/library/chart">
        <div class="card">
          Chart (tightly linked to sliders)
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

        min-height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.25rem;

        text-align: center;
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