import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { useDarkMode } from './composables/useDarkMode.js'

const { loadTheme } = useDarkMode()
loadTheme()

createApp(App).mount('#app')
