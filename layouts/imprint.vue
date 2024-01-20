<template>
  <div class="layout-wrapper">
    <div class="layout__left" v-if="!isCurrentlyMobile || currentMobileView == 'Dateneingabe'">
      <div class="left__top">
        <div class="logo-left-spacer has-corners">
          <div class="prio-chart__corner bottom-right"></div>
        </div>

        <div class="logo has-corners">
          <nuxt-link class="logolink" to="/">PRIO</nuxt-link>
          <div class="prio-chart__corner bottom-right"></div>
          <div class="prio-chart__corner bottom-left"></div>
        </div>
      </div>
    </div>

    <div :class="`layout__right ${ currentViewName == 'end-yes' ||currentViewName=='end-no' ? ' animate-grid-bottombar' : '' }`" id="" v-if="!isCurrentlyMobile || currentMobileView == 'Visualisierung'" >
      <div class="right__top">
        <div class="logo-right has-corners">
          prio
          <div class="prio-chart__corner bottom-right"></div>
          <div class="prio-chart__corner bottom-left"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="content">
    <slot></slot>
  </div>
</template>

<script setup>
import {useCurrentMobileView } from "/composables/state.js";
const currentMobileView = useCurrentMobileView();

watchEffect(() => {
  console.log("currentMobileview: ", currentMobileView.value)
})

const isMobile = () => {
  return window.matchMedia("(max-width: 950px)").matches
}

const isCurrentlyMobile = ref(isMobile())
window.addEventListener('resize', () => {
  isCurrentlyMobile.value = isMobile()
})

import { useEndSliderValue, useCurrentViewName } from "/composables/state.js";

const currentViewName = useCurrentViewName()
const endslidervalue = useEndSliderValue()

</script>

<style lang="scss">
.logolink {
  font-weight: 400;
}
</style>

<style lang="scss" scoped>
$side-spacing: 4vw;
$right-bar-width: 12.5vw;

.content {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 7.5rem;
  padding: 0 2rem;
  padding-bottom: 7.5rem;

  :deep(p), :deep(h1), :deep(h2), :deep(h3), :deep(h4) {
    margin-bottom: .75rem;
  }
}

.layout-wrapper {
  display: flex;
  flex-wrap: nowrap;
}

.layout__left, .layout__right {
  width: 50vw;
}

.layout__left {
  display: grid;
  flex-direction: column;

  grid-template-columns: 1fr;
  grid-template-rows: 10vh 60% 30%;
  @media screen and (max-width: 950px) {
    grid-template-rows: 10dvh 65% 25%;
  }
}

.layout__right {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 1fr 0;

  &.animate-grid-bottombar {
    grid-template-rows: 10vh 1fr 22dvh;

    @media screen and (min-width: 2000px) {
      grid-template-rows: 10vh 1fr min(22dvh, 9vmax);

    }
  }

  @media screen and (max-width: 950px) {
    grid-template-rows: 10dvh 1fr 0;

  }

  transition: grid-template-rows 1s ease-in-out;

  overflow: hidden;
  &.has-bottom-bar {
    grid-template-rows: 10vh 1fr 20vh;
  }
}

.left__top, .right__top {
  min-height: $side-spacing;
  display: flex;
  border-bottom: 1px solid black;

  .logo-left-spacer, .logo-right-spacer {
    width: 100%;
  }

  .logo, .logo-right {
    min-width: $right-bar-width;
    text-align: center;
    text-transform: uppercase;
    font-size: max(2.25rem, 2vw);
    border-left: 1px solid black;
    border-right: 1px solid black;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.center-square {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid black;

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

}

.center-right-bar {
  width: $right-bar-width;
  height: 100%;
  border-right: 1px black solid;
  border-left: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    &.identificationnum {
      font-family: Cirka;
      font-size: 5rem;
      text-align: center;
      padding: 1rem;
    }

    &.text-bottom {
      font-size: max(.75rem, .75vw);
      padding: 1rem;
    }
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    flex-direction: row;
  }
}

.left-spacing-bar {
  width: $side-spacing;

  @media screen and (max-width: 1300px) {
    width: 0;
  }

  @media screen and (max-width: 1250px) {
    width: 0;
  }

  @media screen and (max-aspect-ratio: 1404/1009) {
    width: 0;
  }
}

.left__middle {
  display: flex;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: auto 1fr auto;

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0px 1fr auto;
  }
}

.left__bottom {
  display: flex;
  display: grid;
  grid-template-columns: auto 1fr 30vh;

  @media screen and (max-width: 950px) {
    grid-template-columns: 0px 1fr 0px;
  }

  .left {
    display: flex;
    flex-direction: column;
    width: 100%;

    .buttons-wrapper {
      width: 100%;
      border: 1px solid black;
      border-top: none;
      border-right: none;
      border-left-width: .5px;
      border-right-width: .5px;

      button {
        font-size: 2rem;
        font-family: Cirka;
        font-size: max(3.5rem, 2.75vw);
        text-transform: capitalize;
        text-align: left;
        padding: 0.75rem 1rem 0.5rem;
        display: flex;
        justify-content: start;
        gap: 1.5rem;
        align-items: center;
        width: 100%;

        p {
          font-size: 2rem;
          font-family: Cirka;
          font-size: max(3.5rem, 2.75vw);
          line-height: 125%;
        }

        p:last-of-type {
          scale: 1.25;
        }

        &:hover {
          background: black;

          p {
            color: white;
          }
        }
      }
    }

    .contactinfo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-left: 1px solid black;
      height: 100%;
      padding: 1rem;
      font-size: max(.75rem, .75vw);
      border-right: .5px solid black;

      a {
        color: black;
        text-decoration: underline;
        display: block;
      }
    }
  }

  .right {
    width: 100%;
    height: 100%;

    border: 1px solid black;
    border-top: none;
    border-bottom: none;
    border-left-width: .5px;

    display: flex;
    flex-direction: column;
    justify-content: end;

    padding: 1rem;

    @media screen and (max-width: 950px) {
      display: none;
    }

    .right-square-content {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 1rem;

      p {
        font-size: max(.75rem, .75vw);
        &:last-of-type {
          font-size: 5rem;
          font-family: Cirka;
          line-height: 50%;
        }
      }
    }
  }
}


.has-corners {
  position: relative;
}



.prio-chart__corner {
  --dimension: 5px;
  position: absolute;
  width: var(--dimension);
  height: var(--dimension);
  position: absolute;

  &.top-left {
    border-top: var(--dimension) solid black;
    border-right: var(--dimension) solid transparent;
    top: 0;
    left: 0;
  }

  &.top-right {
    border-top: var(--dimension) solid black;
    border-left: var(--dimension) solid transparent;
    top: 0;
    right: 0;
  }

  &.bottom-left {
    border-bottom: var(--dimension) solid black;
    border-right: var(--dimension) solid transparent;
    bottom: 0;
    left: 0;
  }

  &.bottom-right {
    border-bottom: var(--dimension) solid black;
    border-left: var(--dimension) solid transparent;
    bottom: 0;
    right: 0;
  }
}

@media screen and (max-width: 1300px) {
  .layout__left {
    width: 60vw;
  }

  .layout__right {
    width: 40vw;
  }
}

@media screen and (min-width: 950px) {
  .logo-right, .logo-right-spacer {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    .prio-chart__corner {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }
}

@media screen and (max-width: 950px) {
  .layout__left {
    width: 100vw;
  }

  .layout__right {
    width: 100vw;
  }

  .logo, .logo-right {
    min-width: 40vw !important;
  }
}
</style>

