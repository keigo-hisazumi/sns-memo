<template>
  <div class="app-wrapper">
    <Navigation :current-page="currentPage" @navigate="currentPage = $event" />

    <div class="app-container">
      <main class="app-main">
        <ProfilePage v-if="currentPage === 'profile'" />
        <template v-else-if="currentPage === 'search'">
          <SearchBar v-model="searchQuery" autofocus />
          <MemoList
            :memos="memos"
            :search-query="searchQuery"
            @toggle-like="toggleLike"
            @delete="deleteMemo"
            @toggle-pin="togglePin"
          />
        </template>
        <template v-else>
          <MemoForm @submit="addMemo" />
          <MemoList
            :memos="memos"
            :search-query="''"
            @toggle-like="toggleLike"
            @delete="deleteMemo"
            @toggle-pin="togglePin"
          />
        </template>
      </main>

      <footer class="app-footer">
        <p>&copy; 2026 SNS Memo. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMemos } from './composables/useMemos.js'
import Navigation from './components/Navigation.vue'
import MemoForm from './components/MemoForm.vue'
import MemoList from './components/MemoList.vue'
import SearchBar from './components/SearchBar.vue'
import ProfilePage from './components/ProfilePage.vue'

const { memos, searchQuery, addMemo, deleteMemo, toggleLike, togglePin } = useMemos()
const currentPage = ref('home')
</script>

<style scoped>
.app-wrapper {
  display: flex;
  min-height: 100vh;
  align-items: flex-start;
}

.app-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* モバイル: 下部ナビ分の余白 */
  padding-bottom: 60px;
}

.app-main {
  flex: 1;
}

.app-footer {
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e1e8ed;
  background-color: #f7f9fa;
  font-size: 13px;
  color: #657786;
}

@media (min-width: 768px) {
  .app-container {
    padding-bottom: 0;
    max-width: 600px;
    border-right: 1px solid #e1e8ed;
  }
}
</style>
