<template>
  <div class="profile-page">
    <div class="profile-page-header">
      <button class="back-button" @click="$emit('back')">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        戻る
      </button>
      <h2 class="page-title">プロフィール編集</h2>
      <button class="save-button" :disabled="!form.name.trim()" @click="save">
        保存
      </button>
    </div>

    <div class="profile-body">
      <div class="avatar-section">
        <UserAvatar :name="form.name || '?'" :color="form.avatarColor" :size="80" />
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

      <div class="profile-preview">
        <p class="preview-label">プレビュー</p>
        <div class="preview-card">
          <UserAvatar :name="form.name || '?'" :color="form.avatarColor" :size="56" />
          <div class="preview-info">
            <span class="preview-name">{{ form.name || '（名前未設定）' }}</span>
            <span class="preview-id">@{{ form.userId || 'user' }}</span>
            <p v-if="form.bio" class="preview-bio">{{ form.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useProfile } from '../composables/useProfile.js'
import UserAvatar from './UserAvatar.vue'

const emit = defineEmits(['back'])

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
  emit('back')
}
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background-color: #fff;
}

.profile-page-header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e1e8ed;
  z-index: 10;
}

.page-title {
  font-size: 17px;
  font-weight: 700;
  color: #14171a;
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

.profile-body {
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 24px;
}

.color-picker {
  flex: 1;
}

.color-label {
  font-size: 13px;
  color: #657786;
  margin-bottom: 8px;
  font-weight: 600;
}

.color-swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.color-swatch {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid transparent;
  padding: 0;
  transition: transform 0.15s, border-color 0.15s;
}

.color-swatch:hover {
  transform: scale(1.15);
  opacity: 1;
}

.color-swatch.selected {
  border-color: #14171a;
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
  color: #14171a;
}

.required {
  color: #e0245e;
}

.field-input {
  width: 100%;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 15px;
  font-family: inherit;
  transition: border-color 0.2s;
}

.field-input:focus {
  outline: none;
  border-color: #1da1f2;
}

.bio-input {
  resize: vertical;
  min-height: 90px;
}

.id-input-wrap {
  display: flex;
  align-items: center;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.id-input-wrap:focus-within {
  border-color: #1da1f2;
}

.at-sign {
  padding: 10px 8px 10px 12px;
  color: #657786;
  font-size: 15px;
  background-color: #f7f9fa;
  border-right: 1px solid #e1e8ed;
}

.id-input {
  border: none;
  border-radius: 0;
  flex: 1;
}

.id-input:focus {
  border: none;
  outline: none;
}

.field-count {
  font-size: 12px;
  color: #657786;
  text-align: right;
}

.field-count.warn {
  color: #f4900c;
  font-weight: 600;
}

.profile-preview {
  border: 1px solid #e1e8ed;
  border-radius: 12px;
  overflow: hidden;
}

.preview-label {
  font-size: 12px;
  font-weight: 700;
  color: #657786;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 10px 16px;
  background-color: #f7f9fa;
  border-bottom: 1px solid #e1e8ed;
}

.preview-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px;
}

.preview-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.preview-name {
  font-weight: 700;
  font-size: 16px;
  color: #14171a;
}

.preview-id {
  font-size: 14px;
  color: #657786;
}

.preview-bio {
  font-size: 14px;
  color: #14171a;
  margin-top: 6px;
  white-space: pre-wrap;
}
</style>
