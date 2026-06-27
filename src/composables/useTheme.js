import { ref } from 'vue';

export function useTheme() {
  const isDarkMode = ref(false);

  const initTheme = () => {
    isDarkMode.value = false;
    applyTheme();
  };

  const applyTheme = () => {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  const toggleDarkMode = () => {
    // Light mode only
  };

  return { isDarkMode, initTheme, toggleDarkMode };
}
