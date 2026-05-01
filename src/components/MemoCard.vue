<template>
  <div class="memo-card" :class="{ pinned: memo.isPinned }">
    <div v-if="memo.isPinned" class="pin-indicator">
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path fill="#1da1f2" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"/>
      </svg>
      <span>ピン留め</span>
    </div>

    <template v-for="(item, index) in threadItems" :key="item.id">
      <div class="memo-item">
        <div class="avatar-col">
          <UserAvatar :name="profile.name" :color="profile.avatarColor" :size="48" />
          <div
            v-if="index < threadItems.length - 1 || replyingToId === item.id"
            class="thread-line"
          ></div>
        </div>
        <div class="memo-content">
          <div class="memo-info">
            <span class="username">{{ profile.name }}</span>
            <span class="user-id">@{{ profile.userId }}</span>
            <span class="timestamp">{{ formatDate(item.createdAt) }}</span>
          </div>
          <p class="memo-text">{{ item.content }}</p>
          <div class="memo-actions">
            <button
              class="action-button reply-button"
              :class="{ active: replyingToId === item.id }"
              @click="toggleReplyForm(item.id)"
              title="リプライ"
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path fill="currentColor" d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.515 5.176z"/>
              </svg>
              <span class="action-count">{{ replyCountFor(item.id) > 0 ? replyCountFor(item.id) : '' }}</span>
            </button>

            <button
              class="action-button like-button"
              :class="{ liked: item.isLiked }"
              @click="toggleLike(item.id)"
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  :fill="item.isLiked ? '#e0245e' : 'currentColor'"
                  d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"
                />
              </svg>
              <span class="action-count">{{ item.likes }}</span>
            </button>

            <button
              v-if="index === 0"
              class="action-button pin-button"
              :class="{ pinned: item.isPinned }"
              @click="togglePin(item.id)"
              :title="item.isPinned ? 'ピン留めを解除' : 'ピン留め'"
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  :fill="item.isPinned ? '#1da1f2' : 'currentColor'"
                  d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"
                />
              </svg>
            </button>
            <div v-else class="action-button pin-placeholder" aria-hidden="true"></div>

            <button
              class="action-button delete-button"
              @click="deleteMemo(item.id)"
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

      <Transition name="reply-form">
        <div v-if="replyingToId === item.id" class="reply-form-container">
          <div class="reply-form">
            <UserAvatar :name="profile.name" :color="profile.avatarColor" :size="32" />
            <textarea
              :ref="el => { if (el) activeTextarea = el }"
              v-model="replyContent"
              placeholder="リプライを入力..."
              class="reply-input"
              @keydown.ctrl.enter="submitReply"
              @keydown.meta.enter="submitReply"
            ></textarea>
          </div>
          <div class="reply-form-footer">
            <span class="reply-char-count" :class="replyCharCountClass">
              {{ replyContent.length }}/280
            </span>
            <button class="cancel-button" @click="cancelReply">キャンセル</button>
            <button
              class="submit-reply-button"
              @click="submitReply"
              :disabled="!replyContent.trim() || replyContent.length > 280"
            >
              リプライ
            </button>
          </div>
        </div>
      </Transition>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useProfile } from '../composables/useProfile.js'
import { useMemos } from '../composables/useMemos.js'
import UserAvatar from './UserAvatar.vue'

const props = defineProps({
  memo: {
    type: Object,
    required: true
  }
})

const { profile } = useProfile()
const { addMemo, deleteMemo, toggleLike, togglePin, getReplies } = useMemos()

const replyingToId = ref(null)
const replyContent = ref('')
const activeTextarea = ref(null)

const getDescendants = (memoId) => {
  const directReplies = getReplies(memoId)
  return directReplies.flatMap(reply => [reply, ...getDescendants(reply.id)])
}

const threadItems = computed(() => [props.memo, ...getDescendants(props.memo.id)])

const replyCountFor = (memoId) => getReplies(memoId).length

const replyCharCountClass = computed(() => {
  const len = replyContent.value.length
  if (len >= 280) return 'over'
  if (len >= 260) return 'caution'
  return ''
})

const TIME_CONSTANTS = {
  MINUTES_PER_HOUR: 60,
  HOURS_PER_DAY: 24,
  DAYS_PER_WEEK: 7
}

const formatDate = (createdAt) => {
  const date = new Date(createdAt)
  const now = new Date()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'たった今'
  if (diffMins < TIME_CONSTANTS.MINUTES_PER_HOUR) return `${diffMins}分前`
  if (diffHours < TIME_CONSTANTS.HOURS_PER_DAY) return `${diffHours}時間前`
  if (diffDays < TIME_CONSTANTS.DAYS_PER_WEEK) return `${diffDays}日前`

  return date.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric' })
}

const toggleReplyForm = async (itemId) => {
  if (replyingToId.value === itemId) {
    replyingToId.value = null
    replyContent.value = ''
    return
  }
  replyingToId.value = itemId
  replyContent.value = ''
  await nextTick()
  activeTextarea.value?.focus()
}

const cancelReply = () => {
  replyingToId.value = null
  replyContent.value = ''
}

const submitReply = () => {
  if (replyContent.value.trim() && replyContent.value.length <= 280 && replyingToId.value) {
    addMemo(replyContent.value, replyingToId.value)
    replyContent.value = ''
    replyingToId.value = null
  }
}
</script>

<style scoped>
.memo-card {
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
  padding: 12px 16px 0 76px;
}

.memo-item {
  display: flex;
  gap: 12px;
  padding: 12px 16px 0;
}

.avatar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.thread-line {
  width: 2px;
  flex: 1;
  min-height: 12px;
  background-color: #cfd9de;
  margin-top: 4px;
}

.memo-content {
  flex: 1;
  min-width: 0;
  padding-bottom: 12px;
}

.memo-info {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.username {
  font-weight: 700;
  font-size: 15px;
  color: #14171a;
}

.user-id {
  font-size: 13px;
  color: #657786;
}

.timestamp {
  font-size: 13px;
  color: #657786;
}

.timestamp::before {
  content: '·';
  margin-right: 6px;
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
  justify-content: space-between;
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
  flex: 1;
  justify-content: center;
}

.action-count {
  display: inline-block;
  min-width: 1.5em;
  text-align: left;
}

.pin-placeholder {
  flex: 1;
  pointer-events: none;
  cursor: default;
}

.action-button:hover {
  background-color: rgba(29, 161, 242, 0.1);
  color: #1da1f2;
}

.reply-button.active {
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

/* Reply form */
.reply-form-container {
  margin-left: 76px;
  margin-right: 16px;
  margin-bottom: 12px;
  border: 1px solid #e1e8ed;
  border-radius: 12px;
  padding: 12px;
  background-color: #fff;
}

.reply-form {
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
}

.reply-input {
  flex: 1;
  border: none;
  resize: none;
  font-size: 15px;
  padding: 4px 0;
  min-height: 60px;
  overflow: hidden;
  line-height: 1.5;
}

.reply-input:focus {
  outline: none;
}

.reply-form-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.reply-char-count {
  font-size: 12px;
  color: #657786;
  margin-right: auto;
}

.reply-char-count.caution {
  color: #f4900c;
  font-weight: 600;
}

.reply-char-count.over {
  color: #e0245e;
  font-weight: 600;
}

.cancel-button {
  background: none;
  color: #657786;
  font-size: 14px;
  padding: 4px 12px;
  border-radius: 9999px;
  border: 1px solid #cfd9de;
  transition: background-color 0.2s;
}

.cancel-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
  opacity: 1;
}

.submit-reply-button {
  background-color: #1da1f2;
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 16px;
  border-radius: 9999px;
  transition: background-color 0.2s;
}

.submit-reply-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-reply-button:not(:disabled):hover {
  background-color: #1a91da;
  opacity: 1;
}

.reply-form-enter-active,
.reply-form-leave-active {
  transition: all 0.2s ease;
}

.reply-form-enter-from,
.reply-form-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
