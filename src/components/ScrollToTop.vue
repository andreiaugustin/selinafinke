<template>
  <button @click="scroll_to_top()" id="scroll_to_top" title="Go to top" type="button" class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-zinc-800 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
    <!-- <ArrowUpIcon class="h-6 w-6" aria-hidden="true" /> -->
  </button>
</template>

<script>


window.onscroll = function() { scroll_sink() };

function scroll_sink() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    var scroll_to_top_button = document.getElementById("scroll_to_top");
    scroll_to_top_button.style.display = "block";
  } else {
    var scroll_to_top_button = document.getElementById("scroll_to_top");
    scroll_to_top_button.style.display = "none";
  }
}

function scroll_to_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export default {
  setup() {
    return {
      scroll_to_top,
    }
  },
}
</script>

<style>

#scroll_to_top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
}

</style>