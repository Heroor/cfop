<template>
  <section>
    <h1>
      OLL
      <span title="Toggle OLL Group View">
        <i-mingcute-refresh-4-line class="text-xl inline mr--xl text-gray hover:text-gray-300 cursor-pointer"
          @click="store.showOllGroup = !store.showOllGroup"></i-mingcute-refresh-4-line>
      </span>
      <p>
        (Orientation of Last Layer)
      </p>
    </h1>

    <template v-if="store.showOllGroup">
      <div v-for="(group, idx) in ollMap" :key="idx" class="mb-80px">
        <div class="cube-container mb-20px">
          <div class="flex gap-1 ml-lg">
            <span class="w-12px h-12px rounded-[2px] bg-[--cube-yellow]" :class="{ 'm-r-8px': i == 4 }"
              v-for="i in (idx + 1)" :key="i"></span>
          </div>
        </div>
        <div class="cube-container">
          <template v-for="(oll, i) in group" :key="i">
            <div class="cube oll" v-for="(item, i) in oll" :key="i" :style="getOLLStyle(item)">
              <div class="cube-idx">{{ formatIndex(item.i) }}</div>
              <cube-oll-svg class="cube-svg"></cube-oll-svg>
              <div class="cube-formula">
                <div v-for="line in handleFormula(item.f)" :key="line">{{ line }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="cube-container">
        <div class="cube oll" v-for="(item, i) in cubeJSON.oll" :key="i" :style="getOLLStyle(item)">
          <div class="cube-idx">{{ formatIndex(i) }}</div>
          <cube-oll-svg class="cube-svg"></cube-oll-svg>
          <div class="cube-formula">
            <div v-for="line in handleFormula(item.f)" :key="line">{{ line }}</div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/global'
import cubeJSON from '@/data/cube.json'
import cubeOllSvg from '@/assets/images/cube-oll.svg'

const store = useStore()

const ollMap = reactive<Array<OLL[][]>>([])
onMounted(() => {
  cubeJSON.oll.forEach((item) => {
    const [groupId, tagId] = item.t.split('-')
    if (!groupId || !tagId) return
    const newGroupId = Number(groupId) - 1

    let group = ollMap[newGroupId]
    if (!group) {
      group = []
      ollMap[newGroupId] = group
    }
    const newTagId = Number(tagId) - 1
    group[newTagId] = group[newTagId] || []
    group[newTagId].push(item)
  })
  console.log(ollMap)
})

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
