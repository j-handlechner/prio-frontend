<!-- this is all static, if you're searching the actual layout for survey, find it in /layouts/survey.vue -->

<template>
  <div class="layout-wrapper">
    <div class="layout__left">
      <div class="left__top">
        <div class="logo-left-spacer has-corners">
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
          <h1>Teil mal dein Leben durch vier!</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
          <div class="prio-chart__corner top-right"></div>
          <div class="prio-chart__corner top-left"></div>
          <div class="prio-chart__corner bottom-right"></div>
          <div class="prio-chart__corner bottom-left"></div>
        </div>
        <div class="center-right-bar has-corners">
          <p class="identificationnum">01 *</p>
          <p class="text-bottom">identifikationsnummer</p>
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
            <button><p>teilnehmen</p> <p>→</p>
            </button>

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
            <div class="prio-chart__corner bottom-right"></div>
            <div class="prio-chart__corner bottom-left"></div>
          </div>

          <div class="contactinfo has-corners">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
            <div>
              <a>@someone</a>
              <a>@something</a>
            </div>

            <div class="prio-chart__corner top-right"></div>
            <div class="prio-chart__corner top-left"></div>
          </div>
        </div>
        <div class="right has-corners">
          <div class="right-square-content">
            <p>Um mehr informationen zu erhalten, schiebe die Visualisierung nach oben</p>
            <p>→</p>
          </div>

          <div class="prio-chart__corner top-right"></div>
          <div class="prio-chart__corner top-left"></div>
        </div>
      </div>
    </div>
    <div class="layout__right">

    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
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
  min-height: 100vh;
}

.layout__left {
  display: grid;
  flex-direction: column;
  max-height: 100vh;

  grid-template-columns: 1fr;
  grid-template-rows: 10vh 60vh 30vh;

  @media screen and (max-width: 950px) {
    grid-template-rows: 10dvh 65dvh 25dvh;
  }
}

.left__top {
  min-height: $side-spacing;
  display: flex;
  border-bottom: 1px solid black;

  .logo-left-spacer {
    width: 100%;
  }

  .logo {
    min-width: $right-bar-width;
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    border-left: 1px solid black;
    border-right: 1px solid black;
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
}

.left-spacing-bar {
  width: $side-spacing;
}

.left__middle {
  display: flex;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: auto 1fr auto;
}

.left__bottom {
  display: flex;
  display: grid;
  grid-template-columns: auto 1fr 30vh;
  .left {
    display: flex;
    flex-direction: column;
    width: 100%;

    .buttons-wrapper {
      width: 100%;
      border: 1px solid black;
      border-top: none;
      border-right: none;

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

    display: flex;
    flex-direction: column;
    justify-content: end;

    padding: 1rem;

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
    width: 65vw !important;
    background-color: red;
  }

  .layout__right {
    width: 35vw;
  }
}

</style>
