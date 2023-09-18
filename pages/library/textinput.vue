<template>
  <div>
    <label :for="props.uniqueName">Username</label>
    <InputText :id="props.uniqueName" type="text" v-model="value" :pt="{
    root: {
      style: {
        borderRadius: 0,
        borderColor: 'black'
      }
    }
  }"/>
  </div>

</template>

<script setup>
import InputText from 'primevue/inputtext'
const value = ref("");

const props = defineProps({
  uniqueName: String
})
</script>

<style scoped lang="scss">
div {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>