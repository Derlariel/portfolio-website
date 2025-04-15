<script setup>
import airrowGif from '@/assets/button/airrowBtn.webm';

const scrollToSection = () => {
  const el = document.getElementById("main-content");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="cursor-pointer" @click="scrollToSection">
    <video
      :src="airrowGif"
      autoplay
      loop
      muted
      playsinline
      class="w-10 h-10 animate-bounce"
    />
  </div>
</template>
