<!-- halaman Home -->

<script setup>
import SidebarComponent from './sidebar/SidebarComponent.vue'
import NavbarComponent from './navbar/NavbarComponent.vue'
import HomeContent from './home/HomeContent.vue'
</script>

<template>
  <div class="container-home">
    <SidebarComponent />
    <div class="content-container-home">
      <NavbarComponent />
      <HomeContent />
    </div>
  </div>
</template>

<style scoped></style>
