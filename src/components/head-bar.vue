<template>
  <header class="flex justify-between items-center max-w-1000px mx-auto">
    <a href="https://cfop.bener.cc" class="flex items-center gap-8px text-lg" target="_blank" rel="noopener noreferrer">
      <i-cfop-logo /> CFOP
    </a>

    <div class="flex items-center">
      <n-tabs type="segment" animated class="w-130px" v-model:value="store.cubeSize">
        <n-tab :name="Size.small" tab="Small"></n-tab>
        <n-tab :name="Size.large" tab="Large"></n-tab>
      </n-tabs>

      <i-mingcute-question-fill @click="store.toggleTutorial()"
        class="text-gray absolute ml-140px outline-none cursor-pointer hover:text-gray-300 active:text-gray-400" />
    </div>

    <a href="https://github.com/heroor/cfop" class="text-16px" target="_blank" rel="noopener noreferrer">
      <i-mingcute-github-line />
    </a>
  </header>
</template>

<script setup lang="ts">
import { useStore, Size } from '@/stores/global'
const store = useStore()

</script>
