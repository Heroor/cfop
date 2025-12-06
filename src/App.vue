<template>
  <main>
    <section>
      <h1>
        F2L
        <p>(First 2 Layers)</p>
      </h1>
      <div class="container">
        <div class="cube" v-for="(item, i) in cubeJSON.f2l as F2L[]" :key="i" :style="getF2LStyle(item)">
          <div class="cube-idx">{{ i + 1 }}</div>
          <cube-f2l class="cube-svg"></cube-f2l>
          <div class="cube-formula">{{ item.f }}</div>
        </div>
      </div>
    </section>

    <section>
      <h1>
        OLL
        <p>(Orientation of Last Layer)</p>
      </h1>
      <div class="container">
        <div class="cube" v-for="(item, i) in cubeJSON.oll as OLL[]" :key="i" :style="getOLLStyle(item)">
          <div class="cube-idx">{{ i + 1 }}</div>
          <cube-oll class="cube-svg"></cube-oll>
          <div class="cube-formula">{{ item.f }}</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import cubeJSON from '@/data/cube.json'
import cubeF2l from '@/assets/images/cube-f2l.svg'
import cubeOll from '@/assets/images/cube-oll.svg'

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
</script>

<style scoped>
main {
  margin: 10px;
  padding: 20px;
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
  opacity: 0.4;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 255px);
  justify-content: center;
  gap: 20px
}

.cube {
  display: flex;
  grid-template: 255px / auto;
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
  opacity: 0.25;
  user-select: none;
}

.cube-svg {
  max-width: 140px;
  z-index: 1;
}

.cube-formula {
  line-height: 1.3;
  margin-top: 16px;
  font-family: DINAlternate;
  font-size: 18px;
  letter-spacing: 3px;
  word-break: break-word;
}
</style>
