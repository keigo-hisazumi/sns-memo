<template>
  <!-- PC: 左サイドバー -->
  <nav class="nav-sidebar">
    <ul class="nav-list">
      <li
        v-for="item in navItems"
        :key="item.id"
        class="nav-item"
        :class="{ active: currentPage === item.id }"
        @click="emit('navigate', item.id)"
      >
        <component :is="item.icon" class="nav-icon" />
        <span class="nav-label">{{ item.label }}</span>
      </li>
    </ul>
    <button class="theme-toggle-button" @click="toggleDarkMode" :title="isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'">
      <component :is="isDarkMode ? MoonIcon : SunIcon" class="nav-icon" />
      <span class="nav-label">{{ isDarkMode ? 'ダーク' : 'ライト' }}</span>
    </button>
  </nav>

  <!-- モバイル: 下部ナビゲーション -->
  <nav class="nav-bottom">
    <ul class="nav-bottom-list">
      <li
        v-for="item in navItems"
        :key="item.id"
        class="nav-bottom-item"
        :class="{ active: currentPage === item.id }"
        @click="emit('navigate', item.id)"
      >
        <component :is="item.icon" class="nav-icon" />
        <span class="nav-bottom-label">{{ item.label }}</span>
      </li>
      <li class="nav-bottom-item" @click="toggleDarkMode" :title="isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'">
        <component :is="isDarkMode ? MoonIcon : SunIcon" class="nav-icon" />
        <span class="nav-bottom-label">{{ isDarkMode ? 'ダーク' : 'ライト' }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { h } from 'vue'
import { useDarkMode } from '../composables/useDarkMode.js'

const props = defineProps({
  currentPage: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['navigate'])
const { isDarkMode, toggleDarkMode } = useDarkMode()

const HomeIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
    [
      h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
      h('polyline', { points: '9 22 9 12 15 12 15 22' }),
    ]
  )

const SearchIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
    [
      h('circle', { cx: '11', cy: '11', r: '8' }),
      h('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' }),
    ]
  )

const ProfileIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
    [
      h('path', { d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' }),
      h('circle', { cx: '12', cy: '7', r: '4' }),
    ]
  )

const MoonIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
    [
      h('path', { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' }),
    ]
  )

const SunIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
    [
      h('circle', { cx: '12', cy: '12', r: '5' }),
      h('line', { x1: '12', y1: '1', x2: '12', y2: '3' }),
      h('line', { x1: '12', y1: '21', x2: '12', y2: '23' }),
      h('line', { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' }),
      h('line', { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' }),
      h('line', { x1: '1', y1: '12', x2: '3', y2: '12' }),
      h('line', { x1: '21', y1: '12', x2: '23', y2: '12' }),
      h('line', { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' }),
      h('line', { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' }),
    ]
  )

const navItems = [
  { id: 'home', label: 'ホーム', icon: HomeIcon },
  { id: 'search', label: '検索', icon: SearchIcon },
  { id: 'profile', label: 'プロフィール', icon: ProfileIcon },
]
</script>

<style scoped>
/* ===== PC サイドバー ===== */
.nav-sidebar {
  display: none;
}

/* ===== モバイル 下部ナビ ===== */
.nav-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  z-index: 200;
  padding-bottom: env(safe-area-inset-bottom, 0);
}

.nav-bottom-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-bottom-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 8px 4px;
  cursor: pointer;
  color: var(--text-secondary);
  transition: color 0.2s;
  border-radius: 0;
  background: none;
  border: none;
}

.nav-bottom-item:hover {
  color: #1da1f2;
}

.nav-bottom-item.active {
  color: #1da1f2;
}

.nav-bottom-label {
  font-size: 10px;
  font-weight: 600;
}

.nav-icon {
  width: 24px;
  height: 24px;
}

/* ===== PC レイアウト ===== */
@media (min-width: 768px) {
  .nav-sidebar {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 53px;
    z-index: 10;
    height: calc(100vh - 53px);
    width: 240px;
    padding: 16px 12px;
    flex-shrink: 0;
    border-right: 1px solid var(--border-color);
    background-color: var(--bg-primary);
    overflow-y: auto;
  }

  .nav-bottom {
    display: none;
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    border-radius: 9999px;
    cursor: pointer;
    color: var(--text-primary);
    font-size: 17px;
    font-weight: 700;
    transition: background-color 0.2s, color 0.2s;
  }

  .nav-item:hover {
    background-color: var(--bg-tertiary);
    color: #1da1f2;
  }

  .nav-item.active {
    color: #1da1f2;
  }

  .nav-item.active .nav-icon {
    stroke: #1da1f2;
  }

  .nav-label {
    line-height: 1;
  }

  .nav-icon {
    width: 26px;
    height: 26px;
    flex-shrink: 0;
  }

  .theme-toggle-button {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    border-radius: 9999px;
    cursor: pointer;
    color: var(--text-primary);
    font-size: 17px;
    font-weight: 700;
    transition: background-color 0.2s, color 0.2s;
    background: none;
    border: none;
    margin-top: auto;
  }

  .theme-toggle-button:hover {
    background-color: var(--bg-tertiary);
    color: #1da1f2;
  }
}
</style>
