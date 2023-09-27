<template>
  <div class="selectbutton-wrapper">
    <label for="selectbtn">
      <slot name="label"></slot>
    </label>

    <SelectButton id="selectbtn" v-model="value" :options="options" :pt="{
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
        fontFamily: 'Cirka',
        fontWeight: 200,
        fontSize: '1rem'
      }
    }
  }"/>
  </div>

</template>

<script setup>
import SelectButton from 'primevue/selectbutton';
const value = ref('Off');
const options = ref(['Studierender', 'Erwerbstätig']);
</script>

<style lang="scss" scoped>
.selectbutton-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

label {
  font-size: 1rem;
  font-family: Cirka;
  min-width: 13ch;
}
</style>

<style lang="scss">
.p-button.p-component {
  width: 50%;
}

.p-selectbutton.p-buttonset.p-component {
  width: 100%;
  display: flex;
}
</style>
