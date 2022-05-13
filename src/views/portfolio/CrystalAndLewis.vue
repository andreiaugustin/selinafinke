<template>
  
  <div class="p-4 bg-white">
    <ScrollToTop />
    <NewNavigationBar />
    <div v-for="(group, index) in $gallery.CrystalAndLewis" :key="index" class="bg-white">
      <div v-if="group.length == 3" class="container mx-auto p-4 space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        <img v-for="(image, index) in group" :key="index" :src="image.filepath" class="w-full rounded" alt="wedding_image"/>
      </div>
      <div v-else-if="group.length == 2" class="container mx-auto p-4 space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-2">
        <img v-for="(image, index) in group" :key="index" :src="image.filepath" class="w-full rounded" alt="wedding_image"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import ScrollToTop from "../../components/ScrollToTop.vue";
import NewNavigationBar from "../../components/NewNavigationBar.vue";
import Footer from "../../components/Footer.vue";
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
</script>

