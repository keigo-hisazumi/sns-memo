<template>
  <div class="search-bar">
    <div class="search-input-wrapper">
      <svg class="search-icon" viewBox="0 0 24 24" width="18" height="18">
        <path
          fill="currentColor"
          d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
        />
      </svg>
      <input
        v-model="query"
        class="search-input"
        type="text"
        placeholder="検索..."
        @keydown.esc="clear"
        @focus="emit('focus')"
        @blur="emit('blur')"
      />
      <button v-if="query" class="clear-button" @click="clear" title="クリア">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path
            fill="currentColor"
            d="M13.414 12l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 7.707 6.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-4.293 4.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const query = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const clear = () => {
  emit('update:modelValue', '')
}
</script>

<style scoped>
.search-bar {
  position: sticky;
  top: 53px;
  z-index: 100;
  background-color: #fff;
  padding: 8px 16px 12px;
  border-bottom: 1px solid #e1e8ed;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #eaf0f6;
  border-radius: 20px;
  border: 1px solid transparent;
  transition: border-color 0.2s, background-color 0.2s;
}

.search-input-wrapper:focus-within {
  background-color: #fff;
  border-color: #1da1f2;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: #657786;
  pointer-events: none;
}

.search-input-wrapper:focus-within .search-icon {
  color: #1da1f2;
}

.search-input {
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 8px 36px 8px 38px;
  font-size: 15px;
  color: #14171a;
}

.search-input::placeholder {
  color: #657786;
}

.clear-button {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  padding: 2px;
  color: #657786;
  display: flex;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.clear-button:hover {
  background-color: rgba(29, 161, 242, 0.1);
  color: #1da1f2;
}
</style>
