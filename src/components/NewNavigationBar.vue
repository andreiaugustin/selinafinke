<script setup>
  import Logo from "./LogoBlack.vue";
  import NavBar from "./ThinContactBarBlack.vue";
</script>

<template>

  <div class="flex flex-col justify-between items-center bg-white">

    <router-link to="/portfolio">
      <Logo />
    </router-link>
    <NavBar class="py-3" />
    
  </div>
</template>
