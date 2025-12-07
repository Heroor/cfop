<template>
  <div ref="containerRef" class="absolute left-0 right-0 overflow-hidden">
    <div class="cube-tutorial relative pt-60px mx-auto" :class="{ expanded: store.showTutorial }">
      <div class="cube-container select-none">
        <div class="cube" v-for="(item, i) in cubeJSON.tutorial" :key="i" :style="getTutorialStyle(item)"
          @mouseenter="currentF = item.d" @mouseleave="currentF = defaultDescription">
          <div class="cube-formula">{{ item.f }}</div>
          <cube-tutorial-svg class="cube-svg"></cube-tutorial-svg>
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
.cube-tutorial {
  opacity: 0;
  transform: translateY(-100%);
  transition: 0.3s ease;
  transition-property: opacity, transform;
}

.cube-tutorial.expanded {
  opacity: 1;
  transform: translateY(0);
}

@media screen and (min-width: 750px) {
  .cube-tutorial {
    width: 700px;
  }
}

@media screen and (min-width: 1150px) {
  .cube-tutorial {
    width: 1050px;
  }
}

.cube-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 114px);
  justify-content: center;
}

.cube {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px 0;
}

.cube-svg {
  max-width: 80px;
  z-index: 1;
}

.cube-formula {
  line-height: 1;
  margin-bottom: -6px;
  font-size: 35px;
  font-family: bi;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, transparent);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
