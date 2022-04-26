<template>
  <button @click="scroll_to_top()" id="scroll_to_top" title="Go to top" type="button" class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-zinc-800 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
    <ArrowUpIcon class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script>

import { ArrowUpIcon } from '@heroicons/vue/outline'

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
  components: {
    ArrowUpIcon,
  }
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