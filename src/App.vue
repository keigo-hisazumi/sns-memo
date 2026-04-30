<template>
  <header class="app-header">
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <path
        fill="#1da1f2"
        d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
      />
    </svg>
    <span class="app-title">SNS Memo</span>
  </header>

  <div class="app-wrapper">
    <Navigation :current-page="currentPage" @navigate="currentPage = $event" />

    <div class="app-container">
      <main class="app-main">
        <ProfilePage v-if="currentPage === 'profile'" />
        <template v-else-if="currentPage === 'search'">
          <SearchBar v-model="searchQuery" autofocus />
          <div v-if="!searchQuery" class="search-prompt">
            <svg viewBox="0 0 24 24" width="64" height="64">
              <path
                fill="#657786"
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              />
            </svg>
            <p class="search-prompt-message">キーワードを入力して検索</p>
            <p class="search-prompt-hint">メモの内容で検索できます</p>
          </div>
          <MemoList
            v-else
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
            :memos="allMemos"
            :search-query="''"
            @toggle-like="toggleLike"
            @delete="deleteMemo"
            @toggle-pin="togglePin"
          />
        </template>
      </main>

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

const { memos, allMemos, searchQuery, addMemo, deleteMemo, toggleLike, togglePin } = useMemos()
const currentPage = ref('home')
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e1e8ed;
  /* 全幅表示のため width を指定しない（ブロック要素デフォルト） */
}

.app-title {
  font-size: 18px;
  font-weight: 700;
  color: #14171a;
}

.app-wrapper {
  display: flex;
  min-height: calc(100vh - 53px);
  align-items: flex-start;
}

.app-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 53px);
  padding-bottom: calc(60px + env(safe-area-inset-bottom, 0px));
}

.app-main {
  flex: 1;
}

.search-prompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
}

.search-prompt svg {
  margin-bottom: 16px;
  opacity: 0.5;
}

.search-prompt-message {
  font-size: 24px;
  font-weight: 700;
  color: #14171a;
  margin-bottom: 8px;
}

.search-prompt-hint {
  font-size: 15px;
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
