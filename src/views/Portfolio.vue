
<script setup>
import Footer from "../components/Footer.vue"
import Logo from "../components/LogoBlack.vue";
import NavBar from "../components/ThinContactBarBlack.vue"
</script>

<template>
  <main class="p-4 flex-grow bg-white scroll-smooth">
    <router-link to="/">
      <Logo />
    </router-link>
    <NavBar class="py-3" />
    <div class="grid grid-flow-row lg:grid-cols-4 gap-4 justify-items-center">

      <div v-for="image in $portfolio" :key="image" class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg my-4">
        <router-link :to="image.url">
          <img class="w-128 h-128 our_card rounded-t-lg" :src="image.img" :alt="image.title">
          <div class="px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">{{ image.title }}</h4>
          </div>
        </router-link>
      </div>

    </div>
    
    <Footer />

  </main>
  
</template>

<style>
.our_card { 
  transition: transform .3s ease-in-out; 
}
.our_card:hover {
  transform: scale(0.8)
}
</style>
