<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal">
      <div class="modal-header">
        <button class="close-button" @click="$emit('close')">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <h2 class="modal-title">プロフィール編集</h2>
        <button class="save-button" :disabled="!form.name.trim()" @click="save">
          保存
        </button>
      </div>

      <div class="modal-body">
        <div class="avatar-section">
          <UserAvatar :name="form.name || '?'" :color="form.avatarColor" :size="72" />
          <div class="color-picker">
            <p class="color-label">アイコンカラー</p>
            <div class="color-swatches">
              <button
                v-for="color in AVATAR_COLORS"
                :key="color"
                class="color-swatch"
                :class="{ selected: form.avatarColor === color }"
                :style="{ backgroundColor: color }"
                :title="color"
                @click="form.avatarColor = color"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="field-label">名前 <span class="required">*</span></label>
          <input
            v-model="form.name"
            type="text"
            maxlength="50"
            placeholder="あなたの名前"
            class="field-input"
          />
          <span class="field-count" :class="{ warn: form.name.length >= 45 }">
            {{ form.name.length }} / 50
          </span>
        </div>

        <div class="form-group">
          <label class="field-label">ユーザーID</label>
          <div class="id-input-wrap">
            <span class="at-sign">@</span>
            <input
              v-model="form.userId"
              type="text"
              maxlength="20"
              placeholder="user_id"
              class="field-input id-input"
              @input="sanitizeUserId"
            />
          </div>
          <span class="field-count" :class="{ warn: form.userId.length >= 18 }">
            {{ form.userId.length }} / 20
          </span>
        </div>

        <div class="form-group">
          <label class="field-label">自己紹介</label>
          <textarea
            v-model="form.bio"
            maxlength="160"
            placeholder="自己紹介を書いてください"
            class="field-input bio-input"
            rows="4"
          />
          <span class="field-count" :class="{ warn: form.bio.length >= 140 }">
            {{ form.bio.length }} / 160
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useProfile } from '../composables/useProfile.js'
import UserAvatar from './UserAvatar.vue'

const emit = defineEmits(['close', 'saved'])

const { profile, updateProfile } = useProfile()

const AVATAR_COLORS = [
  '#1da1f2', '#e0245e', '#17bf63', '#f4900c',
  '#794bc4', '#ff7043', '#00b8d4', '#546e7a'
]

const form = reactive({
  name: profile.value.name,
  userId: profile.value.userId,
  bio: profile.value.bio,
  avatarColor: profile.value.avatarColor
})

const sanitizeUserId = () => {
  form.userId = form.userId.replace(/[^a-zA-Z0-9_]/g, '')
}

const save = () => {
  if (!form.name.trim()) return
  updateProfile({
    name: form.name.trim(),
    userId: form.userId.trim() || 'user',
    bio: form.bio.trim(),
    avatarColor: form.avatarColor
  })
  emit('saved')
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 200;
  padding-top: 40px;
}

.modal {
  background: var(--bg-primary);
  border-radius: 16px;
  width: 100%;
  max-width: 560px;
  max-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
}

.modal-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-primary);
}

.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: var(--text-primary);
  width: 34px;
  height: 34px;
  padding: 0;
  border-radius: 50%;
  border: none;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.07);
}

html.dark-mode .close-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.save-button {
  background-color: #14171a;
  color: white;
  padding: 6px 20px;
  font-size: 14px;
  border-radius: 9999px;
}

html.dark-mode .save-button {
  background-color: #f7f9fa;
  color: #14171a;
}

.save-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.save-button:not(:disabled):hover {
  background-color: #2d3748;
}

html.dark-mode .save-button:not(:disabled):hover {
  background-color: #e1e8ed;
}

.modal-body {
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.color-picker {
  flex: 1;
}

.color-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
  font-weight: 600;
}

.color-swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.color-swatch {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 3px solid transparent;
  padding: 0;
  transition: transform 0.15s, border-color 0.15s;
  background: none;
}

.color-swatch:hover {
  transform: scale(1.15);
  opacity: 1;
}

.color-swatch.selected {
  border-color: var(--text-primary);
  transform: scale(1.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
}

.required {
  color: #e0245e;
}

.field-input {
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 15px;
  font-family: inherit;
  transition: border-color 0.2s;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.field-input:focus {
  outline: none;
  border-color: #1da1f2;
}

.bio-input {
  resize: vertical;
  min-height: 80px;
}

.id-input-wrap {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.id-input-wrap:focus-within {
  border-color: #1da1f2;
}

.at-sign {
  padding: 10px 8px 10px 12px;
  color: var(--text-secondary);
  font-size: 15px;
  background-color: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
}

.id-input {
  border: none;
  border-radius: 0;
  flex: 1;
  background-color: transparent;
}

.id-input:focus {
  border: none;
  outline: none;
}

.field-count {
  font-size: 12px;
  color: var(--text-secondary);
  text-align: right;
}

.field-count.warn {
  color: #f4900c;
  font-weight: 600;
}

@media (max-width: 600px) {
  .modal-overlay {
    padding-top: 0;
    align-items: flex-end;
  }

  .modal {
    border-radius: 16px 16px 0 0;
    max-height: 92vh;
  }
}
</style>
