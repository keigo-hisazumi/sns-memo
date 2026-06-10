import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react'
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
import { db } from '../firebase'
import { useAuth } from './AuthContext'
import type { Memo } from '../types'

interface MemosContextType {
  allMemos: Memo[]
  filteredMemos: Memo[]
  searchQuery: string
  setSearchQuery: (q: string) => void
  addMemo: (content: string, parentId?: string | null) => Promise<void>
  deleteMemo: (id: string) => Promise<void>
  toggleLike: (id: string) => Promise<void>
  togglePin: (id: string) => Promise<void>
  updateMemo: (id: string, content: string) => Promise<void>
  getReplies: (parentId: string) => Memo[]
}

const MemosContext = createContext<MemosContextType | null>(null)

export function MemosProvider({ children }: { children: ReactNode }) {
  const { currentUser } = useAuth()
  const [memos, setMemos] = useState<Memo[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (!currentUser) {
      setMemos([])
      return
    }
    const q = query(collection(db, 'memos'), where('uid', '==', currentUser.uid))
    const unsub = onSnapshot(q, (snapshot) => {
      setMemos(snapshot.docs.map((d): Memo => {
        const data = d.data()
        return {
          id: d.id,
          uid: data.uid,
          content: data.content,
          createdAt: data.createdAt?.toDate?.()?.toISOString() ?? data.createdAt ?? null,
          likes: data.likes,
          isLiked: data.isLiked,
          isPinned: data.isPinned,
          parentId: data.parentId ?? null
        }
      }))
    }, (error) => {
      console.error('Firestore snapshot error:', error)
    })
    return unsub
  }, [currentUser])

  const allMemos = useMemo(() =>
    memos
      .filter((m) => !m.parentId)
      .sort((a, b) => {
        if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1
        return new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()
      }),
    [memos]
  )

  const filteredMemos = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return []
    return memos.filter((m) => m.content.toLowerCase().includes(q))
  }, [memos, searchQuery])

  const addMemo = async (content: string, parentId: string | null = null) => {
    if (!content.trim() || !currentUser) return
    await addDoc(collection(db, 'memos'), {
      uid: currentUser.uid,
      content: content.trim(),
      createdAt: serverTimestamp(),
      likes: 0,
      isLiked: false,
      isPinned: false,
      parentId: parentId || null
    })
  }

  const deleteMemo = async (id: string) => {
    const getChildIds = (parentId: string): string[] =>
      memos
        .filter((m) => m.parentId === parentId)
        .flatMap((c) => [c.id, ...getChildIds(c.id)])
    const idsToDelete = [id, ...getChildIds(id)]
    await Promise.all(idsToDelete.map((did) => deleteDoc(doc(db, 'memos', did))))
  }

  const toggleLike = async (id: string) => {
    const memo = memos.find((m) => m.id === id)
    if (!memo) return
    const newIsLiked = !memo.isLiked
    await updateDoc(doc(db, 'memos', id), {
      isLiked: newIsLiked,
      likes: memo.likes + (newIsLiked ? 1 : -1)
    })
  }

  const togglePin = async (id: string) => {
    const memo = memos.find((m) => m.id === id)
    if (!memo) return
    await updateDoc(doc(db, 'memos', id), { isPinned: !memo.isPinned })
  }

  const updateMemo = async (id: string, content: string) => {
    if (!content.trim()) return
    await updateDoc(doc(db, 'memos', id), { content: content.trim() })
  }

  const getReplies = (parentId: string): Memo[] =>
    memos
      .filter((m) => m.parentId === parentId)
      .sort((a, b) => {
        const ta = a.createdAt ? new Date(a.createdAt).getTime() : 0
        const tb = b.createdAt ? new Date(b.createdAt).getTime() : 0
        return ta - tb
      })

  return (
    <MemosContext.Provider value={{ allMemos, filteredMemos, searchQuery, setSearchQuery, addMemo, deleteMemo, toggleLike, togglePin, updateMemo, getReplies }}>
      {children}
    </MemosContext.Provider>
  )
}

export function useMemos() {
  const ctx = useContext(MemosContext)
  if (!ctx) throw new Error('useMemos must be used within MemosProvider')
  return ctx
}
