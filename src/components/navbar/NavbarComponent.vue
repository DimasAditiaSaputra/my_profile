<script setup>
import { useToggle } from '@/stores/toggle'
import { computed } from 'vue'

const toggleStore = useToggle()
const isActive = computed(() => toggleStore.isTrue)
const toggleNavbar = () => {
  toggleStore.toggleFunction()
}
</script>

<template>
  <div class="navbar">
    <div class="hamburger" :class="{ active: isActive }" @click="toggleNavbar">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </div>
  <div class="side-null-navbar"></div>
</template>
