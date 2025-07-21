<script setup>
import SidebarComponent from './sidebar/SidebarComponent.vue'
import NavbarComponent from './navbar/NavbarComponent.vue'
import CVContent from './CV/CVContent.vue'
</script>

<template>
  <div class="container-cv">
    <SidebarComponent />
    <div class="content-container-cv">
      <NavbarComponent />
      <CVContent />
    </div>
  </div>
</template>

<style scoped></style>
