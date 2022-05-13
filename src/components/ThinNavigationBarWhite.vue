<template>
<div class="bg-transparent flex flex-row justify-between min-w-[80%] 2xl:min-w-[20%] xl:min-w-[25%] lg:min-w-[30%] md:min-w-[40%] sm:min-w-[50%]">
  <router-link to="/portfolio" class="border-2 p-2 border-white">
    <h2 class="nav-text text-black dark:text-white ">Portfolio</h2>
  </router-link>
  <a href="mailto:selinafinke@gmail.com" class="border-2 p-2 border-white"><h2 class="nav-text text-black dark:text-white ">Contact</h2></a>
</div>
</template>

<style>
  .nav-text {
    font-family: 'OpenSans';
    font-size: 24px;
    letter-spacing: 5px;
  }
</style>