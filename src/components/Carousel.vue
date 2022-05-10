<template>

<div v-on:wheel="scrollHorizontally()" id="carousel" class="carousel carousel-center space-x-4 bg-white ">
  <div v-for="image in $portfolio" :key="image" class="carousel-item">
    <router-link :to="image.url">
      <img :src="image.img" class="object-fit max-w-screen max-h-screen">
    </router-link>
  </div>
</div>

</template>

<script>

function scrollHorizontally(ev)
{
  ev = window.event || ev;
  ev.preventDefault();

  var delta = Math.min(Math.max(-20, ev.wheelDelta), 20);
  var el = document.getElementById('carousel');
  
  el.scrollLeft -= (delta * 40);
}

export default {
  setup() {
    return {
      scrollHorizontally
    }
  },
}
</script>

<style scoped>
::-webkit-scrollbar {display:none;}
</style>