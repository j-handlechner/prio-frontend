<template>
  <SelectButton v-model="value" :options="options" :pt="{
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
        fontSize: '1.5rem'
      }
    }
  }"/>
</template>

<script setup>
import SelectButton from 'primevue/selectbutton';
const value = ref('Off');
const options = ref(['Studierender', 'Erwerbstätig']);
</script>

