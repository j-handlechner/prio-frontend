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
        <Dropdown v-model="selectedGender" :options="gender" optionLabel="name" placeholder="Wähle dein Geschlecht" class="w-full md:w-14rem" :pt="{
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
  
  const selectedGender = ref();
  const gender = ref([
    { name: 'Weiblich', value: 'weiblich' },
    { name: 'Männlich', value: 'männlich' },
    { name: 'Transgender', value: 'transgender' },
    { name: 'Nicht-binär/nicht-konform', value: 'nicht-binär' },
    { name: 'Keine Angabe', value: 'keine' }
  ]);
  
  const props = defineProps({
    name: String
  })
//   const selectedValue = ref(null)
  
//   const nodes = ref([
//     {
//       key: "opt1",
//       label: "hello1",
//       data: "hello1value"
//     },
//     {
//       key: "opt2",
//       label: "hello2",
//       data: "hello2value"
//     }
//   ])
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