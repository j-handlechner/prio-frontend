<template>
  <div :class="`inputgroup has-corners mobileviewswitcher has-visible-border ${isVisualizationHighlightedCurrently ? 'visualizationHighlighted' : ''}`">
    <div class="selectbutton-wrapper">
      <SelectButton id="selectbtn" v-model="currentMobileView" :options="mobileViewSwitcherOptions" :pt="{
    root: {
      style: {
        borderRadius: 0,
        borderColor: 'black',
      }
    },
    button: ({ context }) => ({
      style: {
        backgroundColor: context.active ? 'black' : 'white',
        borderRadius: 0,
      }
    }),
    label: {
      style: {
        fontFamily: 'Helvetica',
        fontWeight: 300,
        fontSize: 'min(.875rem, 3vw)'
      }
    }
  }"/>
    </div>
  </div>
</template>

<script setup>
import SelectButton from 'primevue/selectbutton';
import { useCurrentMobileView } from "/composables/state.js";

const currentMobileView = useCurrentMobileView();
const mobileViewSwitcherOptions = ref(['Dateneingabe', 'Visualisierung']);

const props = defineProps(['isVisualisationHighlighted'])

const isVisualizationHighlightedCurrently = computed(() => {
  if(currentMobileView.value !== 'Visualisierung')  {
    return props.isVisualisationHighlighted
  } else {
    return false
  }
})


</script>

<style lang="scss" scoped>
.selectbutton-wrapper {
  display: block;
  margin: auto 0;
}

.inputgroup, .selectbutton-wrapper {
  height: 100%;
}

@media screen and (min-width: 950px) {
  .inputgroup {
    visibility: hidden;
    pointer-events: none;
  }
}
</style>

<style lang="scss">
.p-selectbutton {
  height: 100%;
}
</style>

<style lang="scss">
.mobileviewswitcher.visualizationHighlighted {
  .p-selectbutton .p-button:last-child {
    animation-name: buttonHighlighted;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 1s;
    animation-direction: alternate;
  }
}

@keyframes buttonHighlighted {
  from {
    background-color: white;
    color: black;
  }

  to {
    background-color: black;
    color: white;
  }
}
</style>
