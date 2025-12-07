<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <home />
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, type GlobalThemeOverrides } from 'naive-ui'
import Home from './pages/home-page.vue'

const themeOverrides: GlobalThemeOverrides = {
  Tabs: {
    tabBorderRadius: '50px',
    tabPaddingMediumSegment: '4px 0',
    tabFontSizeMedium: '12px',
  }
}
</script>
