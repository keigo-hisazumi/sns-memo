import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth'
import type { FirebaseError } from 'firebase/app'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '../firebase'

interface AuthContextType {
  currentUser: User | null
  authLoading: boolean
  authError: string
  setAuthError: (e: string) => void
  register: (email: string, password: string) => Promise<User>
  login: (email: string, password: string) => Promise<User>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

const defaultProfile = (uid: string, email: string) => ({
  name: email.split('@')[0],
  userId: uid.slice(0, 8),
  bio: '',
  avatarColor: '#1da1f2',
  createdAt: serverTimestamp()
})

function translateAuthError(code: string): string {
  const messages: Record<string, string> = {
    'auth/email-already-in-use': 'このメールアドレスはすでに使われています',
    'auth/invalid-email': 'メールアドレスの形式が正しくありません',
    'auth/weak-password': 'パスワードは6文字以上にしてください',
    'auth/user-not-found': 'メールアドレスまたはパスワードが間違っています',
    'auth/wrong-password': 'メールアドレスまたはパスワードが間違っています',
    'auth/invalid-credential': 'メールアドレスまたはパスワードが間違っています',
    'auth/too-many-requests': 'しばらく時間をおいてから再試行してください'
  }
  return messages[code] ?? `エラーが発生しました (${code})`
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setAuthLoading(false)
    })
    return unsubscribe
  }, [])

  const register = async (email: string, password: string): Promise<User> => {
    setAuthError('')
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      const profileRef = doc(db, 'users', user.uid)
      const existing = await getDoc(profileRef)
      if (!existing.exists()) {
        await setDoc(profileRef, defaultProfile(user.uid, email))
      }
      return user
    } catch (e) {
      setAuthError(translateAuthError((e as FirebaseError).code))
      throw e
    }
  }

  const login = async (email: string, password: string): Promise<User> => {
    setAuthError('')
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      return user
    } catch (e) {
      setAuthError(translateAuthError((e as FirebaseError).code))
      throw e
    }
  }

  const logout = () => firebaseSignOut(auth)

  return (
    <AuthContext.Provider value={{ currentUser, authLoading, authError, setAuthError, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
