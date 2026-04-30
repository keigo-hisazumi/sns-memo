import { ref, watch, computed } from 'vue'

const STORAGE_KEY = 'sns-memo-data'

const loadMemos = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('メモの読み込みに失敗しました:', error)
    return []
  }
}

const memos = ref(loadMemos())
const searchQuery = ref('')

const sortedMemos = computed(() => {
  return [...memos.value].sort((a, b) => {
    if (a.isPinned === b.isPinned) return 0
    return a.isPinned ? -1 : 1
  })
})

const filteredMemos = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return []
  return sortedMemos.value.filter(memo =>
    memo.content.toLowerCase().includes(query)
  )
})

const saveMemos = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos.value))
  } catch (error) {
    console.error('メモの保存に失敗しました:', error)
  }
}

watch(memos, saveMemos, { deep: true })

const addMemo = (content) => {
  if (!content.trim()) return

  const newMemo = {
    id: crypto.randomUUID(),
    content: content.trim(),
    createdAt: new Date().toISOString(),
    likes: 0,
    isLiked: false,
    isPinned: false
  }

  memos.value.unshift(newMemo)
}

const deleteMemo = (id) => {
  memos.value = memos.value.filter(memo => memo.id !== id)
}

const toggleLike = (id) => {
  const memo = memos.value.find(m => m.id === id)
  if (memo) {
    memo.isLiked = !memo.isLiked
    memo.likes += memo.isLiked ? 1 : -1
  }
}

const togglePin = (id) => {
  const memo = memos.value.find(m => m.id === id)
  if (memo) {
    memo.isPinned = !memo.isPinned
  }
}

export function useMemos() {
  return {
    memos: filteredMemos,
    allMemos: sortedMemos,
    searchQuery,
    addMemo,
    deleteMemo,
    toggleLike,
    togglePin
  }
}
