import { ref, watch } from 'vue'

const isDarkMode = ref(false)

const loadTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDarkMode.value = saved === 'dark'
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
}

const applyTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark-mode')
  } else {
    document.documentElement.classList.remove('dark-mode')
  }
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}

watch(isDarkMode, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
  applyTheme()
})

export const useDarkMode = () => {
  return {
    isDarkMode,
    toggleDarkMode,
    loadTheme
  }
}
