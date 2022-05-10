
<script setup>
  import Logo from "../components/Logo.vue";

</script>

<template>

<div class="flex-grow bg-white dark:bg-zinc-900">
  
  <router-link to="/portfolio" class="absolute w-screen flex min-h-screen justify-center items-center">
    <Logo class="" />
  </router-link>
  
  <img src="/img/portfolio/cake.jpg" class="object-cover h-screen w-screen">
</div>

</template>
