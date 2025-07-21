// stores/toggle.js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToggle = defineStore(
  'toggle',
  () => {
    const isTrue = ref(false)

    function toggleFunction() {
      isTrue.value = !isTrue.value
    }

    return {
      isTrue,
      toggleFunction,
    }
  },
  {
    persist: true,
  },
)
