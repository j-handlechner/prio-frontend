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
    "borderRadius": "0",
    "textColorDisabled": "rgba(0, 0, 0, 1)",
    "placeholderColor": "rgba(0, 0, 0, 1)",
    "textColor3": "rgba(0, 0, 0, 1)",
    "textColor2": "rgba(0, 0, 0, 1)",
    "textColor1": "rgba(0, 0, 0, 1)",
    "opacity1": "1",
    "opacity2": "1",
    "opacity3": "1",
    "opacity4": "1",
    "opacity5": "1",
    "borderColor": "rgba(0, 0, 0, 1)",
    "heightHuge": "4rem",
    "heightLarge": "3.5rem",
    "heightMedium": "3rem",
    "heightSmall": "2rem",
    "fontFamily": "Helvetica",
    "fontWeight": "400"
  },
  "DatePicker": {
    "iconColor": "rgba(255, 255, 255, 1)",
    "iconColorDisabled": "rgba(255, 255, 255, 1)",
    "calendarRightPaddingYearrange": "0"
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