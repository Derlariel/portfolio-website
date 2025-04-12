<script setup>
import { useTheme } from "./store/useTheme"; // กำหนด useTheme มาจาก store
import ThemeToggle from "./components/ThemeToggle.vue";
import Hero from "@/components/herobanner/Hero.vue";
const { theme } = useTheme(); // ได้ค่า theme จาก useTheme
</script>

<template>
  <div :data-theme="theme">
    <ThemeToggle />
    <Hero/>
  </div>
</template>
