<template>
  <div
    class="user-avatar"
    :style="{
      backgroundColor: color,
      width: size + 'px',
      height: size + 'px',
      fontSize: Math.round(size * 0.42) + 'px'
    }"
  >
    {{ initial }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, default: 'あなた' },
  color: { type: String, default: '#1da1f2' },
  size: { type: Number, default: 40 }
})

const initial = computed(() => props.name.trim().charAt(0) || '?')
</script>

<style scoped>
.user-avatar {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  flex-shrink: 0;
  user-select: none;
}
</style>
