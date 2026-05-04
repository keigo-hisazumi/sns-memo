import { ref, watch } from 'vue'
import { doc, getDoc, updateDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase.js'
import { useAuth } from './useAuth.js'

const { currentUser } = useAuth()

const profile = ref({
  name: '',
  userId: '',
  bio: '',
  avatarColor: '#1da1f2'
})

let unsubscribe = null

watch(currentUser, (user) => {
  if (unsubscribe) {
    unsubscribe()
    unsubscribe = null
  }
  if (!user) return

  unsubscribe = onSnapshot(doc(db, 'users', user.uid), (snap) => {
    if (snap.exists()) {
      profile.value = { ...profile.value, ...snap.data() }
    }
  })
}, { immediate: true })

export function useProfile() {
  const updateProfile = async (updates) => {
    if (!currentUser.value) return
    await updateDoc(doc(db, 'users', currentUser.value.uid), updates)
  }

  return { profile, updateProfile }
}
