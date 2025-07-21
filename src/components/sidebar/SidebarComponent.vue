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
  <div
    class="sidebar"
    :style="{
      width: toggleStore.isTrue ? '300px' : '0%',
      border: toggleStore.isTrue ? '3px solid black' : 'none',
    }"
  >
    <!-- profile img -->
    <div class="profile-image" :style="{ display: isActive ? 'flex' : 'none' }">
      <div class="img">
        <img src="https://i.pinimg.com/736x/ed/05/69/ed05699577f1b78e81b2d940eea740ba.jpg" alt="" />
      </div>
      <h1>Dimas Aditia Saputra</h1>
    </div>
    <!-- navigation -->
    <div class="navigation" :style="{ display: isActive ? 'flex' : 'none' }">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/CV">CV</router-link></li>
      </ul>
    </div>
    <!-- icon media sosial -->
    <div class="media-sosial" :style="{ display: isActive ? 'flex' : 'none' }">
      <a href="https://www.facebook.com/share/163Q7AgNpx/" class="fa fa-facebook"></a>
      <a
        href="https://www.linkedin.com/in/dimas-aditia-saputra-361276338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
        class="fa fa-linkedin"
      ></a>
      <a
        href="https://www.instagram.com/dimas_aaditia?igsh=MTBidzQ4NXZ1em0zNQ=="
        class="fa fa-instagram"
      ></a>
    </div>
  </div>
  <div class="side-null" :style="{ width: isActive ? '393px' : '0%' }"></div>
  <div
    class="overlay"
    :style="{ display: isActive ? 'block' : 'none' }"
    @click="toggleNavbar"
  ></div>
</template>
