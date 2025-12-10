<template>
  <header class="flex justify-between items-center gap-10px max-w-1000px mx-auto relative z-10">
    <div class="flex-1 flex items-center gap-10px">
      <a href="https://cfop.bener.cc" rel="noopener noreferrer"
        class="flex items-center gap-8px text-lg hover:op-90 active:op-80">
        <i-cfop-logo /> CFOP
      </a>
    </div>

    <n-tabs type="segment" animated class="w-130px select-none" v-model:value="store.cubeSize">
      <n-tab :name="Size.small" tab="Small"></n-tab>
      <n-tab :name="Size.large" tab="Large"></n-tab>
    </n-tabs>

    <div class="flex-1 flex justify-between items-center gap-10px">
      <i-mingcute-question-fill @click="store.toggleTutorial()"
        class="text-gray p-3px box-content cursor-pointer hover:text-gray-300 active:text-gray-400" />

      <div class="flex items-center gap-10px text-16px">
        <a href="https://x.com/BenerHero" class="hover:op-90 active:op-80" target="_blank" rel="noopener noreferrer">
          <i-mingcute-twitter-line />
        </a>
        <a href="https://github.com/heroor/cfop" class="hover:op-90 active:op-80" target="_blank"
          rel="noopener noreferrer">
          <i-mingcute-github-line />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useStore, Size } from '@/stores/global'
const store = useStore()

</script>
