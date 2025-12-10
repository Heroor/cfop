<template>
  <section class="transition-margin transition-duration-300"
    :style="{ marginTop: store.showTutorial ? `${store.tutorialHeight}px` : '0' }">
    <h1>
      F2L
      <p>(First 2 Layers)</p>
    </h1>
    <div class="cube-container">
      <div class="cube" v-for="(item, i) in cubeJSON.f2l" :key="i" :style="getF2LStyle(item)">
        <div class="cube-idx">{{ formatIndex(i) }}</div>
        <cube-f2l-svg class="cube-svg"></cube-f2l-svg>
        <div class="cube-formula">
          <div v-for="line in handleFormula(item.f)" :key="line">{{ line }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/global'
import cubeJSON from '@/data/cube.json'
import cubeF2lSvg from '@/assets/images/cube-f2l.svg'

const store = useStore()
const F2L_COLORS: Record<string, string> = {
  1: '--cube-white',
  2: '--cube-blue',
  3: '--cube-red',
}

function getF2LStyle(item: F2L) {
  return item.c.reduce<Record<string, string>>((res, c) => {
    const [posi, index, color] = c.split('')
    if (!posi || !index || !color) return res

    res[`--${posi}-${index}`] = `var(${F2L_COLORS[color]})`
    return res
  }, {})
}

function formatIndex(index: number) {
  return (index + 1).toString().padStart(2, '0')
}

function handleFormula(formula: string) {
  return formula.split('\n')
}
</script>
