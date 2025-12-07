import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const cubeSizeKey = 'cube_size'
export enum Size {
  small = 'small',
  large = 'large',
}

export const useStore = defineStore('global', () => {
  const cubeSize = ref(localStorage.getItem(cubeSizeKey) || Size.large)

  watch(cubeSize, value => {
    localStorage.setItem(cubeSizeKey, value)
  })

  function toggleCubeSize() {
    cubeSize.value = cubeSize.value === 'small' ? 'large' : 'small'
    localStorage.setItem(cubeSizeKey, cubeSize.value)
  }

  return { cubeSize, toggleCubeSize }
})
