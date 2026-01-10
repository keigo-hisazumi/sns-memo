<template>
  <div class="memo-form">
    <div class="form-header">
      <div class="user-avatar">
        <svg viewBox="0 0 24 24" width="40" height="40">
          <path fill="#1da1f2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
      <textarea
        v-model="content"
        placeholder="今何してる？"
        class="memo-input"
        rows="3"
        maxlength="280"
        @keydown.ctrl.enter="submitMemo"
        @keydown.meta.enter="submitMemo"
      ></textarea>
    </div>
    
    <div class="form-footer">
      <span class="char-count" :class="{ warning: content.length > 260 }">
        {{ content.length }} / 280
      </span>
      <button 
        class="submit-button"
        @click="submitMemo"
        :disabled="!content.trim()"
      >
        投稿
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])
const content = ref('')

const submitMemo = () => {
  if (content.value.trim()) {
    emit('submit', content.value)
    content.value = ''
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

.user-avatar {
  flex-shrink: 0;
}

.user-avatar svg {
  border-radius: 50%;
  background-color: #f7f9fa;
}

.memo-input {
  flex: 1;
  border: none;
  resize: none;
  font-size: 16px;
  padding: 8px;
  min-height: 80px;
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

.char-count.warning {
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
