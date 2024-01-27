<template>
  <div class="selectbutton-wrapper">
    <label for="selectbtn" v-if="showLabel">
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
        fontFamily: 'PP Object Sans',
        fontWeight: 300,
        fontSize: 'max(.875rem, .7vw)'
      }
    }
  }"
  @update:modelValue="newValue => updateModelValue(newValue)"
    />
  </div>

</template>

<script setup>
import SelectButton from 'primevue/selectbutton';
const value = ref(null);
const defaultOptions = ref(['Studierend', 'Erwerbstätig']);
const props = defineProps(['modelValue', 'showlabel', 'options'])

const showLabel = computed(() => props.showlabel !== undefined ? props.showlabel : true);
const options = computed(() => props.options !== undefined ? props.options : defaultOptions.value);


const emit = defineEmits(["updateModelValue"])

function updateModelValue(newValue) {
  console.log("emitting event")
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
  font-size: max(1rem, .85vw);
  font-family: Cirka;
  min-width: 13ch;
  @media screen and (max-width: 1300px) {
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
