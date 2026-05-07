<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <div class="auth-logo">
        <svg viewBox="0 0 24 24" width="40" height="40">
          <path
            fill="#1da1f2"
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
          />
        </svg>
      </div>
      <h1 class="auth-title">SNS Memo</h1>

      <div class="auth-tabs">
        <button
          class="auth-tab"
          :class="{ active: mode === 'login' }"
          @click="mode = 'login'"
        >ログイン</button>
        <button
          class="auth-tab"
          :class="{ active: mode === 'register' }"
          @click="mode = 'register'"
        >新規登録</button>
      </div>

      <form class="auth-form" @submit.prevent="submit">
        <div class="form-group">
          <label class="form-label">メールアドレス</label>
          <input
            v-model="email"
            type="email"
            class="form-input"
            placeholder="example@email.com"
            autocomplete="email"
            required
          />
        </div>
        <div class="form-group">
          <label class="form-label">パスワード</label>
          <input
            v-model="password"
            type="password"
            class="form-input"
            placeholder="6文字以上"
            autocomplete="current-password"
            required
            minlength="6"
          />
        </div>

        <p v-if="authError" class="auth-error">{{ authError }}</p>

        <button type="submit" class="auth-submit" :disabled="loading">
          <span v-if="loading">処理中...</span>
          <span v-else>{{ mode === 'login' ? 'ログイン' : '登録する' }}</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth.js'

const { authError, login, register } = useAuth()

const mode = ref('login')
const email = ref('')
const password = ref('')
const loading = ref(false)

const submit = async () => {
  loading.value = true
  try {
    if (mode.value === 'login') {
      await login(email.value, password.value)
    } else {
      await register(email.value, password.value)
    }
  } catch {
    // authError is set inside composable
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;
  background-color: var(--bg-primary);
}

.auth-card {
  width: 100%;
  max-width: 400px;
  padding: 32px 24px;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  background-color: var(--bg-primary);
}

.auth-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}

.auth-title {
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  color: var(--text-primary);
  margin: 0 0 24px;
}

.auth-tabs {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 24px;
}

.auth-tab {
  flex: 1;
  padding: 10px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  margin-bottom: -1px;
}

.auth-tab.active {
  color: var(--text-primary);
  border-bottom-color: #1da1f2;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
}

.form-input {
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #1da1f2;
}

.auth-error {
  font-size: 13px;
  color: #e0245e;
  margin: 0;
}

.auth-submit {
  padding: 12px;
  background-color: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}

.auth-submit:hover:not(:disabled) {
  opacity: 0.85;
}

.auth-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
