<script setup>
import { ref, onMounted, computed } from "vue";
import { useTheme } from "@/store/useTheme.js";
import { useTypewriter } from "@/components/lib/useTypewriter.js";

import IconLink from "@/components/IconLink.vue";
import AirrowBtn from "@/components/button/Airrow-down.vue";

// Theme
const { theme } = useTheme();

// Typewriter effect
const { displayedText, isFinished } = useTypewriter("Building Ideas into Reality", 100);

// Refs for icons
const githubLight = ref(null);
const githubDark = ref(null);
const instagramLight = ref(null);
const instagramDark = ref(null);
const linkedinLight = ref(null);
const linkedinDark = ref(null);

// Load assets once
onMounted(async () => {
  githubLight.value = (await import("@/assets/github-black.svg")).default;
  githubDark.value = (await import("@/assets/github-white.svg")).default;
  instagramLight.value = (await import("@/assets/instagram-black.svg")).default;
  instagramDark.value = (await import("@/assets/instagram-white.svg")).default;
  linkedinLight.value = (await import("@/assets/linkedin-black.svg")).default;
  linkedinDark.value = (await import("@/assets/linkedin-white.svg")).default;
});

// Computed icons based on theme
const icons = computed(() => [
  {
    link: "https://github.com/Derlariel",
    icon: theme.value === "light" ? githubLight.value : githubDark.value,
    alt: "GitHub",
  },
  {
    link: "https://www.instagram.com/kp.sax/",
    icon: theme.value === "light" ? instagramLight.value : instagramDark.value,
    alt: "Instagram",
  },
  {
    link: "https://www.linkedin.com/in/kongphob-kongsan-819749330/",
    icon: theme.value === "light" ? linkedinLight.value : linkedinDark.value,
    alt: "LinkedIn",
  },
]);
</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden space-y-10">
    <!-- Icon Links -->
    <div class="flex items-center justify-center gap-4">
      <IconLink v-if="isFinished"
        v-for="(item, index) in icons"
        :key="index"
        :icon="item.icon"
        :link="item.link"
        :alt="item.alt"
      />
    </div>

    <!-- Headline -->
    <div class="space-y-6 text-center">
      <h1 class="font-extrabold text-8xl">
        {{ displayedText }}
      </h1>
      <p
        v-if="isFinished"
        class="text-3xl italic font-bold transition-opacity duration-1000 opacity-100"
      >
        Discover my tech stack, real-world projects, and the journey behind every line of code.
      </p>
    </div>

    <!-- Scroll Down Arrow -->
    <div v-if="isFinished" class=" cursor-pointer">
     <AirrowBtn />
    </div>
   
  </div>
</template>

<style scoped></style>
