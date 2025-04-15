<script setup>
import { useTheme } from "./store/useTheme"; // กำหนด useTheme มาจาก store
import ThemeToggle from "./components/ThemeToggle.vue";
import Hero from "@/components/herobanner/Hero.vue";
const { theme } = useTheme(); // ได้ค่า theme จาก useTheme
</script>

<template>
  <div
    :data-theme="theme"
    :class="[
      theme === 'dark'
        ? 'animate-gradient-x bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'
        : 'light' 
    ]"
  >
    <ThemeToggle />
    <Hero />
  </div>
</template>

