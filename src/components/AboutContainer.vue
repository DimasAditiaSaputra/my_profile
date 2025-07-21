<!-- halaman About-->

<script setup>
import SidebarComponent from './sidebar/SidebarComponent.vue'
import NavbarComponent from './navbar/NavbarComponent.vue'
import AboutContent from './about/AboutContent.vue'
</script>

<template>
  <div class="container-about">
    <SidebarComponent />
    <div class="content-container-about">
      <NavbarComponent />
      <AboutContent />
    </div>
  </div>
</template>

<style scoped></style>
