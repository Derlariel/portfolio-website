import { ref, watch } from 'vue';

const theme = ref(localStorage.getItem('theme') || 'light');

watch(theme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

document.documentElement.setAttribute('data-theme', theme.value);

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'synthwave' : 'light';
};

export function useTheme() {
  return { theme, toggleTheme };
}
