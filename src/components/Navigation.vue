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
    </ul>
  </nav>
</template>

<script setup>
import { h } from 'vue'

const props = defineProps({
  currentPage: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['navigate'])

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
  background-color: #ffffff;
  border-top: 1px solid #e1e8ed;
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
  color: #657786;
  transition: color 0.2s;
  border-radius: 0;
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
    height: calc(100vh - 53px);
    width: 240px;
    padding: 16px 12px;
    flex-shrink: 0;
    border-right: 1px solid #e1e8ed;
    background-color: #ffffff;
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
    color: #14171a;
    font-size: 17px;
    font-weight: 500;
    transition: background-color 0.2s, color 0.2s;
  }

  .nav-item:hover {
    background-color: #e8f5fd;
    color: #1da1f2;
  }

  .nav-item.active {
    color: #1da1f2;
    font-weight: 700;
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
}
</style>
