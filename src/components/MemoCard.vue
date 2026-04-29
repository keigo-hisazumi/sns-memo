<template>
  <div class="memo-card" :class="{ pinned: memo.isPinned }">
    <div v-if="memo.isPinned" class="pin-indicator">
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path fill="#1da1f2" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"/>
      </svg>
      <span>ピン留め</span>
    </div>
    <div class="memo-header">
      <div class="user-avatar">
        <svg viewBox="0 0 24 24" width="48" height="48">
          <path fill="#1da1f2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
      <div class="memo-content">
        <div class="memo-info">
          <span class="username">あなた</span>
          <span class="timestamp">{{ formattedDate }}</span>
        </div>
        <p class="memo-text">{{ memo.content }}</p>
        
        <div class="memo-actions">
          <button
            class="action-button pin-button"
            :class="{ pinned: memo.isPinned }"
            @click="$emit('toggle-pin', memo.id)"
            :title="memo.isPinned ? 'ピン留めを解除' : 'ピン留め'"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                :fill="memo.isPinned ? '#1da1f2' : 'currentColor'"
                d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"
              />
            </svg>
          </button>

          <button
            class="action-button like-button"
            :class="{ liked: memo.isLiked }"
            @click="$emit('toggle-like', memo.id)"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                :fill="memo.isLiked ? '#e0245e' : 'currentColor'"
                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"
              />
            </svg>
            <span>{{ memo.likes }}</span>
          </button>

          <button
            class="action-button delete-button"
            @click="$emit('delete', memo.id)"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  memo: {
    type: Object,
    required: true
  }
})

defineEmits(['toggle-like', 'delete', 'toggle-pin'])

// 時間表示の定数
const TIME_CONSTANTS = {
  MINUTES_PER_HOUR: 60,
  HOURS_PER_DAY: 24,
  DAYS_PER_WEEK: 7
}

// 日時を相対的な表記に変換
const formattedDate = computed(() => {
  const date = new Date(props.memo.createdAt)
  const now = new Date()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'たった今'
  if (diffMins < TIME_CONSTANTS.MINUTES_PER_HOUR) return `${diffMins}分前`
  if (diffHours < TIME_CONSTANTS.HOURS_PER_DAY) return `${diffHours}時間前`
  if (diffDays < TIME_CONSTANTS.DAYS_PER_WEEK) return `${diffDays}日前`
  
  return date.toLocaleDateString('ja-JP', { 
    month: 'short', 
    day: 'numeric' 
  })
})
</script>

<style scoped>
.memo-card {
  padding: 16px;
  border-bottom: 1px solid #e1e8ed;
  border-left: 3px solid transparent;
  transition: background-color 0.2s, border-left-color 0.2s;
}

.memo-card:hover {
  background-color: #f7f9fa;
}

.memo-card.pinned {
  background-color: #f0f8ff;
  border-left-color: #1da1f2;
}

.memo-card.pinned:hover {
  background-color: #e8f4fd;
}

.pin-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #1da1f2;
  font-weight: 600;
  margin-bottom: 8px;
}

.memo-header {
  display: flex;
  gap: 12px;
}

.user-avatar {
  flex-shrink: 0;
}

.user-avatar svg {
  border-radius: 50%;
  background-color: #f7f9fa;
}

.memo-content {
  flex: 1;
  min-width: 0;
}

.memo-info {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.username {
  font-weight: 700;
  font-size: 15px;
  color: #14171a;
}

.timestamp {
  font-size: 13px;
  color: #657786;
}

.memo-text {
  font-size: 15px;
  line-height: 1.5;
  color: #14171a;
  word-wrap: break-word;
  white-space: pre-wrap;
  margin-bottom: 12px;
}

.memo-actions {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  color: #657786;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 13px;
  transition: all 0.2s;
}

.action-button:hover {
  background-color: rgba(29, 161, 242, 0.1);
  color: #1da1f2;
}

.like-button.liked {
  color: #e0245e;
}

.like-button:hover {
  background-color: rgba(224, 36, 94, 0.1);
  color: #e0245e;
}

.pin-button.pinned {
  color: #1da1f2;
}

.pin-button:hover {
  background-color: rgba(29, 161, 242, 0.1);
  color: #1da1f2;
}

.delete-button:hover {
  background-color: rgba(224, 36, 94, 0.1);
  color: #e0245e;
}

.action-button svg {
  transition: transform 0.2s;
}

.action-button:active svg {
  transform: scale(0.9);
}
</style>
