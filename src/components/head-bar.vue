<template>
  <header class="flex justify-between items-center max-w-1000px mx-auto">
    <a href="https://cfop.bener.cc" class="text-lg" target="_blank" rel="noopener noreferrer">
      <i-cfop-logo />
    </a>
    <n-tabs type="segment" animated class="w-150px" v-model:value="store.cubeSize">
      <n-tab :name="Size.small" tab="Small"></n-tab>
      <n-tab :name="Size.large" tab="Large"></n-tab>
    </n-tabs>
    <a href="https://github.com/heroor/cfop" class="text-md" target="_blank" rel="noopener noreferrer">
      <i-mingcute-github-line />
    </a>
  </header>
</template>

<script setup lang="ts">
import { useStore, Size } from '@/stores/global'
const store = useStore()

</script>
