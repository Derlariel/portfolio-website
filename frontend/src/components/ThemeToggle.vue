<script setup>
import { useTheme} from '../store/useTheme.js'; // กำหนด useTheme มาจาก store

const { theme , toggleTheme} = useTheme(); // ได้ค่า theme จาก useTheme
</script>
 
<template>
<div class="fixed top-0 right-0 flex justify-end p-4 m-4 rounded-lg dark:bg-slate-800">
  <input
  @change="toggleTheme"
  :checked="theme === 'synthwave'"
  type="checkbox"
  value="synthwave"
  class="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]" />
</div>
</template>
 
<style scoped>

</style>