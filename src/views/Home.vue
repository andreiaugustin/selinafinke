
<script setup>
  import Logo from "../components/LogoWhite.vue";
  import NavBar from "../components/ThinNavigationBarWhite.vue";
</script>

<template>

<div class="flex-grow bg-black">

  <div class="z-40 absolute flex flex-col w-screen flex min-h-screen justify-center items-center">

    <Logo />
    <NavBar class="py-3"/>
    
  </div>
  
  
  <div class="opacity-[.8]">
    <img  alt="background" v-lazy="'img/portfolio/cake.jpg'" class="z-0 object-cover h-screen w-screen" >
  </div>
  
</div>

</template>
