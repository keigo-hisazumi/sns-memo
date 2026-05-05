import { ref, computed, watch, onUnmounted } from 'vue'
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase.js'
import { useAuth } from './useAuth.js'

const { currentUser } = useAuth()

const memos = ref([])
const searchQuery = ref('')
let unsubscribe = null

const startListening = (uid) => {
  stopListening()
  const q = query(
    collection(db, 'memos'),
    where('uid', '==', uid)
  )
  unsubscribe = onSnapshot(q, (snapshot) => {
    memos.value = snapshot.docs.map((d) => {
      const data = d.data()
      return {
        id: d.id,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() ?? data.createdAt
      }
    })
  }, (error) => {
    console.error('Firestore snapshot error:', error)
  })
}

const stopListening = () => {
  if (unsubscribe) {
    unsubscribe()
    unsubscribe = null
  }
  memos.value = []
}

watch(currentUser, (user) => {
  if (user) startListening(user.uid)
  else stopListening()
}, { immediate: true })

const topLevelMemos = computed(() =>
  memos.value
    .filter((m) => !m.parentId)
    .sort((a, b) => {
      if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1
      return new Date(b.createdAt ?? 0) - new Date(a.createdAt ?? 0)
    })
)

const filteredMemos = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return []
  return memos.value.filter((m) => m.content.toLowerCase().includes(q))
})

const memosRef = () => collection(db, 'memos')

export function useMemos() {
  const addMemo = async (content, parentId = null) => {
    if (!content.trim() || !currentUser.value) return
    await addDoc(memosRef(), {
      uid: currentUser.value.uid,
      content: content.trim(),
      createdAt: serverTimestamp(),
      likes: 0,
      isLiked: false,
      isPinned: false,
      parentId: parentId || null
    })
  }

  const deleteMemo = async (id) => {
    const getChildIds = (parentId) =>
      memos.value
        .filter((m) => m.parentId === parentId)
        .flatMap((c) => [c.id, ...getChildIds(c.id)])

    const idsToDelete = [id, ...getChildIds(id)]
    await Promise.all(idsToDelete.map((did) => deleteDoc(doc(db, 'memos', did))))
  }

  const toggleLike = async (id) => {
    const memo = memos.value.find((m) => m.id === id)
    if (!memo) return
    const newIsLiked = !memo.isLiked
    await updateDoc(doc(db, 'memos', id), {
      isLiked: newIsLiked,
      likes: memo.likes + (newIsLiked ? 1 : -1)
    })
  }

  const togglePin = async (id) => {
    const memo = memos.value.find((m) => m.id === id)
    if (!memo) return
    await updateDoc(doc(db, 'memos', id), { isPinned: !memo.isPinned })
  }

  const updateMemo = async (id, content) => {
    if (!content.trim()) return
    await updateDoc(doc(db, 'memos', id), { content: content.trim() })
  }

  const getReplies = (parentId) =>
    memos.value
      .filter((m) => m.parentId === parentId)
      .sort((a, b) => {
        const ta = a.createdAt?.toDate?.() ?? new Date(a.createdAt)
        const tb = b.createdAt?.toDate?.() ?? new Date(b.createdAt)
        return ta - tb
      })

  return {
    memos: filteredMemos,
    allMemos: topLevelMemos,
    searchQuery,
    addMemo,
    deleteMemo,
    toggleLike,
    togglePin,
    getReplies,
    updateMemo
  }
}
