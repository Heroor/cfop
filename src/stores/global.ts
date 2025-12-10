import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const cubeSizeKey = 'cube_size'
const showOllGroupKey = 'show_oll_group'
export enum Size {
  small = 'small',
  large = 'large',
}

export const useStore = defineStore('global', () => {
  // Cube Size
  const cubeSize = ref(localStorage.getItem(cubeSizeKey) || Size.large)
  watch(cubeSize, value => {
    localStorage.setItem(cubeSizeKey, value)
  })
  function toggleCubeSize() {
    cubeSize.value = cubeSize.value === 'small' ? 'large' : 'small'
    localStorage.setItem(cubeSizeKey, cubeSize.value)
  }

  // Tutorial
  const showTutorial = ref(false)
  const tutorialHeight = ref(0)
  function toggleTutorial() {
    showTutorial.value = !showTutorial.value
  }

  // OLL Group
  const showOllGroup = ref(localStorage.getItem(showOllGroupKey) === 'true')
  watch(showOllGroup, value => {
    localStorage.setItem(showOllGroupKey, value.toString())
  })
  return { cubeSize, toggleCubeSize, showTutorial, toggleTutorial, tutorialHeight, showOllGroup }
})
