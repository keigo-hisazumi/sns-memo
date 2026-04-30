<template>
  <div class="app-container">
    <header class="app-header">
      <template v-if="currentPage === 'home'">
        <h1 class="app-title">
          <svg viewBox="0 0 24 24" width="28" height="28">
            <path
              fill="#1da1f2"
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
            />
          </svg>
          <span>SNS Memo</span>
        </h1>
        <button class="profile-nav-button" @click="currentPage = 'profile'" title="プロフィール編集">
          <UserAvatar :name="profile.name" :color="profile.avatarColor" :size="32" />
        </button>
      </template>
      <template v-else>
        <button class="back-button" @click="currentPage = 'home'">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          戻る
        </button>
        <h2 class="profile-page-title">プロフィール編集</h2>
        <button class="save-button" :disabled="!profilePageRef?.canSave" @click="profilePageRef?.save()">
          保存
        </button>
      </template>
    </header>

    <main class="app-main">
      <ProfilePage v-if="currentPage === 'profile'" ref="profilePageRef" @saved="currentPage = 'home'" />
      <template v-else>
        <SearchBar v-model="searchQuery" @focus="searchFocused = true" @blur="searchFocused = false" />
        <Transition name="form-hide">
          <MemoForm v-if="!searchFocused && !searchQuery" @submit="addMemo" />
        </Transition>
        <MemoList
          :memos="memos"
          :search-query="searchQuery"
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
</template>

<script setup>
import { ref } from 'vue'
import { useMemos } from './composables/useMemos.js'
import { useProfile } from './composables/useProfile.js'
import MemoForm from './components/MemoForm.vue'
import MemoList from './components/MemoList.vue'
import SearchBar from './components/SearchBar.vue'
import ProfilePage from './components/ProfilePage.vue'
import UserAvatar from './components/UserAvatar.vue'

const { memos, searchQuery, addMemo, deleteMemo, toggleLike, togglePin } = useMemos()
const { profile } = useProfile()
const searchFocused = ref(false)
const currentPage = ref('home')
const profilePageRef = ref(null)
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e1e8ed;
  padding: 12px 16px;
  z-index: 100;
}

.app-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 700;
  color: #14171a;
}

.profile-nav-button {
  background: none;
  padding: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
}

.profile-nav-button:hover {
  opacity: 0.8;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  color: #1da1f2;
  font-size: 14px;
  padding: 6px 10px;
  border-radius: 9999px;
}

.back-button:hover {
  background-color: rgba(29, 161, 242, 0.1);
}

.profile-page-title {
  font-size: 17px;
  font-weight: 700;
  color: #14171a;
}

.save-button {
  background-color: #14171a;
  color: white;
  padding: 6px 20px;
  font-size: 14px;
  border-radius: 9999px;
}

.save-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.save-button:not(:disabled):hover {
  background-color: #2d3748;
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

.form-hide-enter-active,
.form-hide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease, max-height 0.25s ease;
  max-height: 300px;
  overflow: hidden;
}

.form-hide-enter-from,
.form-hide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
}

@media (max-width: 600px) {
  .app-title {
    font-size: 18px;
  }

  .app-title svg {
    width: 24px;
    height: 24px;
  }
}
</style>
