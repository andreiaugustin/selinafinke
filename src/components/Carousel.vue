<template>

<div v-on:wheel="scrollHorizontally()" id="carousel" class="carousel carousel-center space-x-4">
  <div v-for="image in images" :key="image.name" class="carousel-item">
    <img :src="image.url" class="object-fit max-w-screen max-h-screen">
  </div>
</div>

</template>

<script>

const images = [
  { name: "IMG_0173.jpg", url: "/img/homepage/IMG_0173.jpg"},
  { name: "IMG_2412.jpg", url: "/img/homepage/IMG_2412.jpg"},
  { name: "IMG_3307.jpg", url: "/img/homepage/IMG_3307.jpg"},
  { name: "IMG_5264.jpg", url: "/img/homepage/IMG_5264.jpg"},
  { name: "IMG_5697.jpg", url: "/img/homepage/IMG_5697.jpg"},
  { name: "IMG_6567.jpg", url: "/img/homepage/IMG_6567.jpg"},
  { name: "IMG_8009.jpg", url: "/img/homepage/IMG_8009.jpg"},
  { name: "IMG_8149.jpg", url: "/img/homepage/IMG_8149.jpg"},
  { name: "IMG_0173.jpg", url: "/img/homepage/IMG_0173.jpg"},
  { name: "IMG_2412.jpg", url: "/img/homepage/IMG_2412.jpg"},
  { name: "IMG_3307.jpg", url: "/img/homepage/IMG_3307.jpg"},
  { name: "IMG_5264.jpg", url: "/img/homepage/IMG_5264.jpg"},
  { name: "IMG_5697.jpg", url: "/img/homepage/IMG_5697.jpg"},
  { name: "IMG_6567.jpg", url: "/img/homepage/IMG_6567.jpg"},
  { name: "IMG_8009.jpg", url: "/img/homepage/IMG_8009.jpg"},
  { name: "IMG_8149.jpg", url: "/img/homepage/IMG_8149.jpg"},
  { name: "IMG_0173.jpg", url: "/img/homepage/IMG_0173.jpg"},
  { name: "IMG_2412.jpg", url: "/img/homepage/IMG_2412.jpg"},
  { name: "IMG_3307.jpg", url: "/img/homepage/IMG_3307.jpg"},
  { name: "IMG_5264.jpg", url: "/img/homepage/IMG_5264.jpg"},
  { name: "IMG_5697.jpg", url: "/img/homepage/IMG_5697.jpg"},
  { name: "IMG_6567.jpg", url: "/img/homepage/IMG_6567.jpg"},
  { name: "IMG_8009.jpg", url: "/img/homepage/IMG_8009.jpg"},
  { name: "IMG_8149.jpg", url: "/img/homepage/IMG_8149.jpg"},
  { name: "IMG_0173.jpg", url: "/img/homepage/IMG_0173.jpg"},
  { name: "IMG_2412.jpg", url: "/img/homepage/IMG_2412.jpg"},
  { name: "IMG_3307.jpg", url: "/img/homepage/IMG_3307.jpg"},
  { name: "IMG_5264.jpg", url: "/img/homepage/IMG_5264.jpg"},
  { name: "IMG_5697.jpg", url: "/img/homepage/IMG_5697.jpg"},
  { name: "IMG_6567.jpg", url: "/img/homepage/IMG_6567.jpg"},
  { name: "IMG_8009.jpg", url: "/img/homepage/IMG_8009.jpg"},
  { name: "IMG_8149.jpg", url: "/img/homepage/IMG_8149.jpg"},
]

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
      images,
      scrollHorizontally
    }
  },
}
</script>

<style scoped>
::-webkit-scrollbar {display:none;}
</style>