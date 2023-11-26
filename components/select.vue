<template>
  <div>
    <label :for="props.name"><slot name="label"></slot></label>
      <Dropdown v-model="props.modelValue" :options="selectOptions" optionLabel="name" placeholder="Select an option" class="w-full md:w-14rem" :pt="{
        root: {
          style: {
            borderRadius: 0,
            borderColor: 'black',
            fontFamily: 'Cirka',
            fontWeight: 200,
            fontSize: '1rem'
          }
        }
      }"
                @update:modelValue="newValue => updateModelValue(newValue)"
      />
  </div>
</template>

<script setup>
import TreeSelect from 'primevue/treeselect';
import Dropdown from 'primevue/dropdown';
import { countries, countriesGerman } from './countries.js';

const props = defineProps({
  name: String,
  modelValue: String
})

let selectOptions = ref([]);

const genderOptions = [
  { name: 'Weiblich', value: 'weiblich' },
  { name: 'Männlich', value: 'männlich' },
  { name: 'Nicht-binär/nicht-konform', value: 'nicht-binär' },
  { name: 'Keine Angabe', value: 'keine' }
]

countriesGerman.sort((a, b) => {
  let nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

watchEffect(() => {
  if (props.name == 'gender') {
    selectOptions.value = genderOptions;
  } else if (props.name == 'nationality') {
    selectOptions.value = countriesGerman;
  }
});

const emit = defineEmits(["updateModelValue"])
function updateModelValue(newValue) {
  emit("updateModelValue", newValue)
}
</script>

<style scoped lang="scss">
  .select {
    width: 100%;
  }

  div {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
  }
</style>

<style lang="scss">
.p-treenode-label {
  font-family: "Cirka" !important;
  font-weight: 200 !important;
  font-size: 1.25rem;
}

.p-treenode-content {
  border-radius: 0 !important;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
  color: black;
  background-color: #f1f1f1;
}

label {
  font-family: Cirka;
  font-size: 1rem;
  min-width: 13ch;
}

</style>