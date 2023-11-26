<template>
  <div class="selectbutton-wrapper">
    <label for="selectbtn">
      <slot name="label"></slot>
    </label>

    <SelectButton id="selectbtn" v-model="props.modelValue" :options="options" :pt="{
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
        fontSize: '.875rem'
      }
    }
  }"
                  @update:modelValue="newValue => updateModelValue(newValue)"
    />
  </div>

</template>

<script setup>
import SelectButton from 'primevue/selectbutton';
const value = ref('Off');
const options = ref(['Studierender', 'Erwerbstätig']);

const props = defineProps(['modelValue'])
const emit = defineEmits(["updateModelValue"])

function updateModelValue(newValue) {
  emit("updateModelValue", newValue)
}
</script>

<style lang="scss" scoped>
.selectbutton-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

label {
  font-size: 1rem;
  font-family: Cirka;
  min-width: 13ch;
  @media screen and (max-width: 1250px) {
    min-width: 0;
    min-width: 10ch;
  }
  padding-right: 2rem;
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
