<template>
  <div>
    <label :for="props.name"><slot name="label"></slot></label>
<!--    <TreeSelect :id="props.name" v-model="selectedValue" :options="nodes" placeholder="Select Item" class="select" :pt="{-->
<!--      root: {-->
<!--        style: {-->
<!--          borderRadius: 0,-->
<!--          borderColor: 'black',-->
<!--          fontFamily: 'Cirka',-->
<!--          fontWeight: 200,-->
<!--          fontSize: '1.25rem'-->
<!--        }-->
<!--      }-->
<!--    }" />-->
      <Dropdown v-model="selectedValue" :options="selectOptions" optionLabel="name" placeholder="Select an option" class="w-full md:w-14rem" :pt="{
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
      />
  </div>
</template>

<script setup>
import TreeSelect from 'primevue/treeselect';
import Dropdown from 'primevue/dropdown';
import { countries } from './countries.js';

const props = defineProps({
  name: String
})

const selectedValue = ref(null)
let selectOptions = ref([]);

const genderOptions = [
  { name: 'Weiblich', value: 'weiblich' },
  { name: 'Männlich', value: 'männlich' },
  { name: 'Nicht-binär/nicht-konform', value: 'nicht-binär' },
  { name: 'Keine Angabe', value: 'keine' }
]

watchEffect(() => {
  if (props.name == 'gender') {
    selectOptions.value = genderOptions;
  } else if (props.name == 'nationality') {
    selectOptions.value = countries;
  }
});

const nodes = ref([
  {
    key: "opt1",
    label: "hello1",
    data: "hello1value"
  },
  {
    key: "opt2",
    label: "hello2",
    data: "hello2value"
  }
])
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