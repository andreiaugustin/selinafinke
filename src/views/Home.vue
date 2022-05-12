
<script setup>
  import Logo from "../components/LogoWhite.vue";
  import NavBar from "../components/ThinNavigationBarWhite.vue";
</script>

<template>

<div class="flex-grow bg-white dark:bg-zinc-900">

  <div class="absolute flex flex-col w-screen flex min-h-screen justify-center items-center">

    <Logo />
    <NavBar class="py-3"/>
    
  </div>
  
  
  <img src="/img/portfolio/cake.jpg" class="object-cover h-screen w-screen" alt="background">
</div>

</template>
