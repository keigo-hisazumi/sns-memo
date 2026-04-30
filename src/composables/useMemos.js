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

const topLevelMemos = computed(() => {
  return memos.value
    .filter(m => !m.parentId)
    .sort((a, b) => {
      if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1
      return 0
    })
})

const filteredMemos = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return []
  return memos.value.filter(memo =>
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

const addMemo = (content, parentId = null) => {
  if (!content.trim()) return

  const newMemo = {
    id: crypto.randomUUID(),
    content: content.trim(),
    createdAt: new Date().toISOString(),
    likes: 0,
    isLiked: false,
    isPinned: false,
    parentId: parentId || null
  }

  memos.value.unshift(newMemo)
}

const deleteMemo = (id) => {
  const getChildIds = (parentId) => {
    return memos.value
      .filter(m => m.parentId === parentId)
      .flatMap(c => [c.id, ...getChildIds(c.id)])
  }
  const idsToDelete = new Set([id, ...getChildIds(id)])
  memos.value = memos.value.filter(m => !idsToDelete.has(m.id))
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

const getReplies = (parentId) => {
  return memos.value
    .filter(m => m.parentId === parentId)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
}

export function useMemos() {
  return {
    memos: filteredMemos,
    allMemos: topLevelMemos,
    searchQuery,
    addMemo,
    deleteMemo,
    toggleLike,
    togglePin,
    getReplies
  }
}
