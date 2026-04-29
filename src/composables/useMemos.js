import { ref, watch, computed } from 'vue'

export function useMemos() {
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

  const sortedMemos = computed(() => {
    return [...memos.value].sort((a, b) => {
      if (a.isPinned === b.isPinned) return 0
      return a.isPinned ? -1 : 1
    })
  })

  // LocalStorageに保存
  const saveMemos = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(memos.value))
    } catch (error) {
      console.error('メモの保存に失敗しました:', error)
    }
  }

  // メモの変更を監視して自動保存
  watch(memos, saveMemos, { deep: true })

  /**
   * 新しいメモを追加
   * @param {string} content - メモの内容
   */
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

  /**
   * メモを削除
   * @param {number} id - メモのID
   */
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

  return {
    memos: sortedMemos,
    addMemo,
    deleteMemo,
    toggleLike,
    togglePin
  }
}
