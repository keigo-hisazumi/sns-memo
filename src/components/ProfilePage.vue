<template>
  <div class="profile-page">
    <div class="profile-header">
      <div class="profile-top">
        <UserAvatar :name="profile.name" :color="profile.avatarColor" :size="72" />
        <button class="edit-button" @click="editOpen = true">編集</button>
      </div>
      <div class="profile-info">
        <span class="profile-name">{{ profile.name }}</span>
        <span class="profile-id">@{{ profile.userId }}</span>
        <p v-if="profile.bio" class="profile-bio">{{ profile.bio }}</p>
      </div>
      <div class="profile-stats">
        <span class="stat"><strong>{{ allMemos.length }}</strong> 投稿</span>
      </div>
    </div>

    <div class="posts-header">投稿</div>

    <div v-if="allMemos.length === 0" class="empty-state">
      <p class="empty-message">まだ投稿がありません</p>
      <p class="empty-hint">ホーム画面から最初のメモを投稿してみましょう！</p>
    </div>
    <template v-else>
      <MemoCard
        v-for="memo in allMemos"
        :key="memo.id"
        :memo="memo"
        @toggle-like="toggleLike"
        @delete="deleteMemo"
        @toggle-pin="togglePin"
      />
    </template>

    <ProfileEditModal v-if="editOpen" @close="editOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProfile } from '../composables/useProfile.js'
import { useMemos } from '../composables/useMemos.js'
import UserAvatar from './UserAvatar.vue'
import MemoCard from './MemoCard.vue'
import ProfileEditModal from './ProfileEditModal.vue'

const { profile } = useProfile()
const { allMemos, deleteMemo, toggleLike, togglePin } = useMemos()

const editOpen = ref(false)
</script>

<style scoped>
.profile-page {
  background-color: #fff;
}

.profile-header {
  padding: 20px 16px 0;
  border-bottom: 1px solid #e1e8ed;
}

.profile-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
}

.edit-button {
  background: none;
  border: 1px solid #cfd9de;
  color: #14171a;
  padding: 6px 18px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 9999px;
  transition: background-color 0.2s;
}

.edit-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
  opacity: 1;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 12px;
}

.profile-name {
  font-size: 20px;
  font-weight: 700;
  color: #14171a;
}

.profile-id {
  font-size: 15px;
  color: #657786;
}

.profile-bio {
  font-size: 15px;
  color: #14171a;
  margin-top: 8px;
  white-space: pre-wrap;
  line-height: 1.5;
}

.profile-stats {
  display: flex;
  gap: 20px;
  padding: 12px 0;
}

.stat {
  font-size: 14px;
  color: #657786;
}

.stat strong {
  color: #14171a;
}

.posts-header {
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 700;
  color: #14171a;
  border-bottom: 1px solid #e1e8ed;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
}

.empty-message {
  font-size: 20px;
  font-weight: 700;
  color: #14171a;
  margin-bottom: 8px;
}

.empty-hint {
  font-size: 14px;
  color: #657786;
}
</style>
