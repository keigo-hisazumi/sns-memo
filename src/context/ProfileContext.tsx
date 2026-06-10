import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { doc, setDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './AuthContext'
import type { Profile } from '../types'

interface ProfileContextType {
  profile: Profile
  updateProfile: (updates: Partial<Profile>) => Promise<void>
}

const ProfileContext = createContext<ProfileContextType | null>(null)

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { currentUser } = useAuth()
  const [profile, setProfile] = useState<Profile>({
    name: '',
    userId: '',
    bio: '',
    avatarColor: '#1da1f2'
  })

  useEffect(() => {
    if (!currentUser) return
    const unsub = onSnapshot(doc(db, 'users', currentUser.uid), (snap) => {
      if (snap.exists()) {
        setProfile((prev) => ({ ...prev, ...(snap.data() as Partial<Profile>) }))
      }
    })
    return unsub
  }, [currentUser])

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!currentUser) return
    await setDoc(doc(db, 'users', currentUser.uid), updates, { merge: true })
  }

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (!ctx) throw new Error('useProfile must be used within ProfileProvider')
  return ctx
}
