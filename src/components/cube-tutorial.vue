<template>
  <div class="overflow-hidden transition-height transition-duration-300"
    :style="{ height: store.showTutorial ? `${store.tutorialHeight}px` : '0' }">
    <div ref="containerRef" class="tutorial pt-60px mx-auto" :class="{ expanded: store.showTutorial }"
      :style="{ marginTop: `-${store.tutorialHeight}px` }">
      <div
        class="grid justify-center sm:grid-cols-[repeat(auto-fill,114px)] grid-cols-[repeat(auto-fill,100px)] select-none">
        <div class="flex flex-col items-center pb-14px" v-for="(item, i) in cubeJSON.tutorial" :key="i"
          :style="getTutorialStyle(item)" @mouseenter="currentF = item.d" @mouseleave="currentF = defaultDescription">
          <div class="tutorial-cube-formula">{{ item.f }}</div>
          <cube-tutorial-svg class="max-w-80px z-1"></cube-tutorial-svg>
        </div>
      </div>
      <div class="w-full text-center text-17px mt-20px">{{ currentF }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/global'
import cubeJSON from '@/data/cube.json'
import cubeTutorialSvg from '@/assets/images/cube-tutorial.svg'

const defaultDescription = 'Hover a cube to see its notation...'
const store = useStore()
const currentF = ref(defaultDescription)
const containerRef = ref<HTMLElement | null>(null)

const resizeObserver = new ResizeObserver(() => {
  store.tutorialHeight = containerRef.value?.offsetHeight || 0
})

onMounted(() => {
  resizeObserver.observe(containerRef.value!)
})

onUnmounted(() => {
  resizeObserver.disconnect()
})

function getTutorialStyle(item: Tutorial) {
  const style: Record<string, string> = {}
  item.c.forEach((c, index) => {
    c.split('').forEach((posi) => {
      style[`--${index + 1}-${posi}`] = `var(--cube-blue)`
    })
  })

  item.a.forEach((a) => {
    const [i, ...arrow] = a.split('')
    style[`--${i}-${arrow.join('')}`] = `var(--cube-white)`
  })

  return style
}
</script>

<style scoped>
.tutorial {
  opacity: 0;
  transform: translateY(0);
  transition: 0.3s ease;
  transition-property: opacity, transform;
}

.tutorial.expanded {
  opacity: 1;
  transform: translateY(100%);
}

@media screen and (min-width: 750px) {
  .tutorial {
    width: 700px;
  }
}

@media screen and (min-width: 1150px) {
  .tutorial {
    width: 1050px;
  }
}

.tutorial-cube-formula {
  line-height: 1;
  margin-bottom: -6px;
  font-size: 35px;
  font-family: bi;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, transparent);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
