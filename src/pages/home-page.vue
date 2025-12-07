<template>
  <main :class="store.cubeSize" class="p-30px">
    <head-bar></head-bar>
    <section>
      <h1>
        F2L
        <p>(First 2 Layers)</p>
      </h1>
      <div class="cube-container">
        <div class="cube" v-for="(item, i) in cubeJSON.f2l" :key="i" :style="getF2LStyle(item)">
          <div class="cube-idx">{{ formatIndex(i) }}</div>
          <cube-f2l class="cube-svg"></cube-f2l>
          <div class="cube-formula">
            <div v-for="line in handleFormula(item.f)" :key="line">{{ line }}</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h1>
        OLL
        <p>(Orientation of Last Layer)</p>
      </h1>
      <div class="cube-container">
        <div class="cube oll" v-for="(item, i) in cubeJSON.oll" :key="i" :style="getOLLStyle(item)">
          <div class="cube-idx">{{ formatIndex(i) }}</div>
          <cube-oll class="cube-svg"></cube-oll>
          <div class="cube-formula">
            <div v-for="line in handleFormula(item.f)" :key="line">{{ line }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/global'
import cubeJSON from '@/data/cube.json'
import cubeF2l from '@/assets/images/cube-f2l.svg'
import cubeOll from '@/assets/images/cube-oll.svg'

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

<style scoped>
main {
  --cube-gray: #292929;
  --cube-white: white;
  --cube-blue: #2F88FF;
  --cube-red: #FF0000;
  --cube-yellow: #d9cd3e;
}

section:not(:first-child) {
  margin-top: 80px;
}

h1 {
  font-size: 46px;
  font-family: bi;
  text-align: center;
  margin-bottom: 40px;
}

h1 p {
  margin: 0;
  font-size: 0.7em;
  color: #696969;
}

.cube-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 255px);
  justify-content: center;
  gap: 20px
}

.cube {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 36px 20px 20px;
  border-radius: 20px;
}

.cube-idx {
  position: absolute;
  top: 0px;
  left: 12px;
  line-height: 1;
  font-family: bi;
  font-weight: bold;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.25);
  user-select: none;
}

.cube-svg {
  max-width: 140px;
  z-index: 1;
}

.cube-formula {
  line-height: 1.3;
  margin-top: 16px;
  font-size: 18px;
  letter-spacing: 3px;
  word-break: break-word;
}

main.small .cube-container {
  grid-template-columns: repeat(auto-fill, 350px);
}

main.small .cube {
  flex-direction: row;
  padding: 20px 0 20px 24px;
  gap: 20px
}

main.small .cube-idx {
  top: -4px;
  left: -8px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 50%, transparent);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

main.small .cube.oll .cube-idx {
  top: -8px;
  left: -12px;
}

main.small .cube-formula {
  margin-top: 0;
}

main.small .cube-svg {
  max-width: 90px;
}
</style>
