<template>
  <div>
    <NuxtLayout>
      <n-config-provider :theme-overrides="themeOverrides">
        <n-theme-editor>
      <NuxtPage></NuxtPage>
        </n-theme-editor>
      </n-config-provider>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { NThemeEditor, NConfigProvider } from "naive-ui"

const themeOverrides = {
  "common": {
    "primaryColor": "#000000FF",
    "primaryColorHover": "#000000FF",
    "primaryColorPressed": "#000000FF",
    "primaryColorSuppl": "#000000FF",
    "borderRadius": 0
  }
}
</script>

<style lang="scss">

.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>