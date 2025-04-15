import { ref, onMounted } from 'vue';

export function useTypewriter(text, speed = 100) {
  const displayedText = ref("");
  const isFinished = ref(false);

  onMounted(() => {
    let i = 0;
    const interval = setInterval(() => {
      displayedText.value += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        isFinished.value = true;
      }
    }, speed);
  });

  return { displayedText, isFinished };
}