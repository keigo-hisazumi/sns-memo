import { ref, watch } from 'vue'
import { doc, setDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './useAuth'
import type { Profile } from '../types'

const { currentUser } = useAuth()

const profile = ref<Profile>({
  name: '',
  userId: '',
  bio: '',
  avatarColor: '#1da1f2'
})

let unsubscribe: (() => void) | null = null

watch(currentUser, (user) => {
  if (unsubscribe) {
    unsubscribe()
    unsubscribe = null
  }
  if (!user) return

  unsubscribe = onSnapshot(doc(db, 'users', user.uid), (snap) => {
    if (snap.exists()) {
      profile.value = { ...profile.value, ...(snap.data() as Partial<Profile>) }
    }
  })
}, { immediate: true })

export function useProfile() {
  const updateProfile = async (updates: Partial<Profile>) => {
    if (!currentUser.value) return
    await setDoc(doc(db, 'users', currentUser.value.uid), updates, { merge: true })
  }

  return { profile, updateProfile }
}
