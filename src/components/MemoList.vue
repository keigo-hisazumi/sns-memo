<template>
  <div class="memo-list">
    <div v-if="memos.length === 0" class="empty-state">
      <svg viewBox="0 0 24 24" width="64" height="64">
        <path 
          fill="#657786"
          d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
        />
      </svg>
      <p class="empty-message">まだメモがありません</p>
      <p class="empty-hint">上のフォームから最初のメモを投稿してみましょう！</p>
    </div>

    <TransitionGroup name="memo" tag="div" v-else>
      <MemoCard
        v-for="memo in memos"
        :key="memo.id"
        :memo="memo"
        @toggle-like="$emit('toggle-like', $event)"
        @delete="$emit('delete', $event)"
        @toggle-pin="$emit('toggle-pin', $event)"
      />
    </TransitionGroup>
  </div>
</template>

<script setup>
import MemoCard from './MemoCard.vue'

defineProps({
  memos: {
    type: Array,
    required: true
  }
})

defineEmits(['toggle-like', 'delete', 'toggle-pin'])
</script>

<style scoped>
.memo-list {
  min-height: 300px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
}

.empty-state svg {
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-message {
  font-size: 24px;
  font-weight: 700;
  color: #14171a;
  margin-bottom: 8px;
}

.empty-hint {
  font-size: 15px;
  color: #657786;
}

/* トランジションアニメーション */
.memo-enter-active {
  transition: all 0.3s ease-out;
}

.memo-leave-active {
  transition: all 0.2s ease-in;
}

.memo-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.memo-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
