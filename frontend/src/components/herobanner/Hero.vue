<script setup>
import IconLink from "@/components/IconLink.vue";
import { useTheme } from "@/store/useTheme.js";
import { ref, onMounted, watch } from "vue";

const { theme } = useTheme();
const icons = ref([]);

const loadIcons = async () => {
  const githubLight = (await import("@/assets/github-black.svg")).default;
  const githubDark = (await import("@/assets/github-white.svg")).default;
  const instagramLight = (await import("@/assets/instagram-black.svg")).default;
  const instagramDark = (await import("@/assets/instagram-white.svg")).default;
  const linkedinLight = (await import("@/assets/linkedin-black.svg")).default;
  const linkedinDark = (await import("@/assets/linkedin-white.svg")).default;

  icons.value = [
    {
      link: "https://github.com/Derlariel",
      icon: theme.value === "light" ? githubLight : githubDark,
      alt: "GitHub",
    },
    {
      link: "https://www.instagram.com/kp.sax/",
      icon: theme.value === "light" ? instagramLight : instagramDark,
      alt: "Instagram",
    },
    {
      link: "https://www.linkedin.com/in/kongphob-kongsan-819749330/",
      icon: theme.value === "light" ? linkedinLight : linkedinDark,
      alt: "LinkedIn",
    },
  ];
};

onMounted(() => {
  loadIcons();
});

watch(theme, () => {
  loadIcons();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden">
    <div class="flex items-center justify-center gap-2">
      <IconLink
        v-for="(item, index) in icons"
        :key="index"
        :icon="item.icon"
        :link="item.link"
        :alt="item.alt"
      />
    </div>
    <div class="space-y-6 text-center">
        <h1 class="font-extrabold text-8xl">
        Building Ideas into Reality
        </h1>
        <p class="text-3xl italic font-bold wrap">Discover my tech stack, real-world projects, and the journey behind every line of code.</p>
    </div>
  </div>
</template>

<style scoped></style>
