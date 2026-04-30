<template>
  <div class="memo-form">
    <div class="form-header">
      <UserAvatar :name="profile.name" :color="profile.avatarColor" :size="40" />
      <textarea
        ref="textareaRef"
        v-model="content"
        placeholder="今何してる？"
        class="memo-input"
        @keydown.ctrl.enter="submitMemo"
        @keydown.meta.enter="submitMemo"
      ></textarea>
    </div>

    <div class="form-footer">
      <span class="char-count" :class="charCountClass">
        {{ content.length }} / {{ MAX_CHARS }}
      </span>
      <button
        class="submit-button"
        @click="submitMemo"
        :disabled="!content.trim() || content.length > MAX_CHARS"
      >
        投稿
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useProfile } from '../composables/useProfile.js'
import UserAvatar from './UserAvatar.vue'

const emit = defineEmits(['submit'])
const { profile } = useProfile()
const content = ref('')
const textareaRef = ref(null)

const MAX_CHARS = 280
const YELLOW_THRESHOLD = 260

const charCountClass = computed(() => {
  const len = content.value.length
  if (len >= MAX_CHARS) return 'over'
  if (len >= YELLOW_THRESHOLD) return 'caution'
  return ''
})

const adjustHeight = async () => {
  await nextTick()
  if (!textareaRef.value) return
  textareaRef.value.style.height = 'auto'
  textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
}

watch(content, adjustHeight)

const submitMemo = () => {
  if (content.value.trim() && content.value.length <= MAX_CHARS) {
    emit('submit', content.value)
    content.value = ''
    if (textareaRef.value) {
      textareaRef.value.style.height = 'auto'
    }
  }
}
</script>

<style scoped>
.memo-form {
  padding: 16px;
  border-bottom: 1px solid #e1e8ed;
  background-color: #ffffff;
}

.form-header {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.memo-input {
  flex: 1;
  border: none;
  resize: none;
  font-size: 16px;
  padding: 8px;
  min-height: 80px;
  overflow: hidden;
}

.memo-input:focus {
  outline: none;
  border: none;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 52px;
}

.char-count {
  font-size: 13px;
  color: #657786;
}

.char-count.caution {
  color: #f4900c;
  font-weight: 600;
}

.char-count.over {
  color: #e0245e;
  font-weight: 600;
}

.submit-button {
  background-color: #1da1f2;
  color: white;
  padding: 8px 24px;
  font-size: 15px;
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-button:not(:disabled):hover {
  background-color: #1a91da;
}
</style>
