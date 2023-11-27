<template>
  <div class="layout-wrapper">
    <div class="layout__left" v-if="!isMobile() || currentMobileView == 'Dateneingabe'">
      <div class="left__top">
        <div class="logo-left-spacer has-corners">
          <MobileViewSwitcher />
          <div class="prio-chart__corner bottom-right"></div>
        </div>
        <div class="logo has-corners">
          prio
          <div class="prio-chart__corner bottom-right"></div>
          <div class="prio-chart__corner bottom-left"></div>
        </div>
      </div>

      <div class="left__middle">
        <div class="left-spacing-bar has-corners">
          <div class="prio-chart__corner top-right"></div>
          <div class="prio-chart__corner bottom-right"></div>
        </div>
        <div class="center-square has-corners">
            <slot name="centersquare" />

          <div class="prio-chart__corner top-right"></div>
          <div class="prio-chart__corner top-left"></div>
          <div class="prio-chart__corner bottom-right"></div>
          <div class="prio-chart__corner bottom-left"></div>
        </div>
        <div class="center-right-bar has-corners">
          <slot name="right-bar" />

          <div class="prio-chart__corner top-right"></div>
          <div class="prio-chart__corner top-left"></div>
          <div class="prio-chart__corner bottom-right"></div>
          <div class="prio-chart__corner bottom-left"></div>
        </div>
      </div>

      <div class="left__bottom">
        <div class="left-spacing-bar has-corners">
          <div class="prio-chart__corner top-right"></div>
        </div>
        <div class="left">
          <div class="buttons-wrapper has-corners">
            <slot name="buttons" />
          </div>

          <div class="contactinfo has-corners">
            <slot name="contact" />

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
          </div>
        </div>
        <div class="right has-corners">
          <div class="right-square-content">
            <slot name="right-square" />

          </div>

          <div class="prio-chart__corner top-right"></div>
          <div class="prio-chart__corner top-left"></div>
        </div>
      </div>
    </div>
    <div class="layout__right" v-if="!isMobile() || currentMobileView == 'Visualisierung'">
      <div class="right__top">
        <div class="logo-right-spacer has-corners">
          <MobileViewSwitcher />
          <div class="prio-chart__corner bottom-right"></div>
        </div>
        <div class="logo-right has-corners">
          prio
          <div class="prio-chart__corner bottom-right"></div>
          <div class="prio-chart__corner bottom-left"></div>
        </div>
      </div>

      <slot name="layoutright" />
      <slot name="rightbottombar" />
    </div >
  </div>
</template>

<script setup>
import {useCurrentMobileView} from "/composables/state.js";
const currentMobileView = useCurrentMobileView();

watchEffect(() => {
  console.log("currentMobileview: ", currentMobileView.value)
})

const isMobile = () => {
  return window.matchMedia("(max-width: 950px)").matches
}

import { useEndSliderValue } from "/composables/state.js";
const endslidervalue = useEndSliderValue()

</script>

<style lang="scss" scoped>
$side-spacing: 4vw;
$right-bar-width: 12.5vw;

.layout-wrapper {
  display: flex;
  flex-wrap: nowrap;
}

.layout__left, .layout__right {
  width: 50vw;
  min-height: 100dvh;
}

.layout__left {
  display: grid;
  flex-direction: column;
  min-height: 100vh;

  grid-template-columns: 1fr;
  grid-template-rows: 10% 60% 30%;
  @media screen and (max-width: 950px) {
    grid-template-rows: 10% 65% 25%;
  }
}

.layout__right {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 1fr calc(v-bind('endslidervalue') * 0.01 * 20%);

  @media screen and (max-width: 950px) {
    grid-template-rows: 10% 1fr calc(v-bind('endslidervalue') * 0.01 * 30%);
  }

  transition: grid-template-rows 0s ease-in-out;

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
    font-size: 2.25rem;
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
    font-size: 4.4rem;
    @media screen and (max-width: 1250px) {
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
    font-size: 0.75rem;
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
      font-size: 0.75rem;
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

  @media screen and (max-width: 1250px) {
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
        font-size: 3.5rem;
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
          font-size: 3.5rem;
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
      font-size: 0.75rem;
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
        font-size: 0.75rem;
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

@media screen and (max-width: 1250px) {
  .layout__left {
    width: 60vw;
  }

  .layout__right {
    width: 40vw;
  }
}

@media screen and (min-width: 950px) {
  .logo-right {
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
