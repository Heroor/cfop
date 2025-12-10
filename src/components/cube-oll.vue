<template>
  <section>
    <h1>
      OLL
      <p>(Orientation of Last Layer)</p>
    </h1>
    <div class="cube-container">
      <div class="cube oll" v-for="(item, i) in cubeJSON.oll" :key="i" :style="getOLLStyle(item)">
        <div class="cube-idx">{{ formatIndex(i) }}</div>
        <cube-oll-svg class="cube-svg"></cube-oll-svg>
        <div class="cube-formula">
          <div v-for="line in handleFormula(item.f)" :key="line">{{ line }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import cubeJSON from '@/data/cube.json'
import cubeOllSvg from '@/assets/images/cube-oll.svg'

function getOLLStyle(item: OLL) {
  return item.c.reduce<Record<string, string>>((res, c, index) => {
    c.split('').forEach((posi, i) => {
      res[`--${index * 3 + i + 1}-${posi}`] = `var(--cube-yellow)`
    })
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
