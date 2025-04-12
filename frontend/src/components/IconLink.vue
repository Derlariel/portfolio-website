<script setup>

defineProps({
  icon: String,
  link: String,
  alt: {
    type: String,
    default: 'icon',
  },
})
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: 40 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
  >
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <img
        :src="icon"
        :alt="alt"
        class="w-8 h-8 transition-transform hover:scale-110"
      />
    </a>
  </Motion>
</template>

<style scoped></style>
