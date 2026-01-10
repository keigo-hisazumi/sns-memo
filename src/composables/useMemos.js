import { ref, watch } from 'vue'

/**
 * LocalStorageでメモを管理するコンポーザブル
 */
export function useMemos() {
  const STORAGE_KEY = 'sns-memo-data'
  
  // LocalStorageからメモを読み込む
  const loadMemos = () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error('メモの読み込みに失敗しました:', error)
      return []
    }
  }

  // メモのリスト
  const memos = ref(loadMemos())

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
      id: Date.now(),
      content: content.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
      isLiked: false
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

  /**
   * メモにいいねを追加/削除
   * @param {number} id - メモのID
   */
  const toggleLike = (id) => {
    const memo = memos.value.find(m => m.id === id)
    if (memo) {
      memo.isLiked = !memo.isLiked
      memo.likes += memo.isLiked ? 1 : -1
    }
  }

  return {
    memos,
    addMemo,
    deleteMemo,
    toggleLike
  }
}
