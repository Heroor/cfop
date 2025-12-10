<template>
  <main :class="store.cubeSize" class="p-40px">
    <head-bar></head-bar>
    <cube-tutorial></cube-tutorial>
    <cube-f2l></cube-f2l>
    <cube-oll></cube-oll>
  </main>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/global'
const store = useStore()
</script>

<style scoped>
main {
  --cube-gray: #292929;
  --cube-white: white;
  --cube-blue: #2F88FF;
  --cube-red: #FF0000;
  --cube-yellow: #e9dc41;
}
</style>
