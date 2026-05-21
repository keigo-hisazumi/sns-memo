import { ref } from 'vue'
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

const currentUser = ref<User | null>(null)
const authLoading = ref(true)

const defaultProfile = (uid: string, email: string) => ({
  name: email.split('@')[0],
  userId: uid.slice(0, 8),
  bio: '',
  avatarColor: '#1da1f2',
  createdAt: serverTimestamp()
})

onAuthStateChanged(auth, async (user) => {
  currentUser.value = user
  authLoading.value = false
})

export function useAuth() {
  const authError = ref('')

  const register = async (email: string, password: string) => {
    authError.value = ''
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      const profileRef = doc(db, 'users', user.uid)
      const existing = await getDoc(profileRef)
      if (!existing.exists()) {
        await setDoc(profileRef, defaultProfile(user.uid, email))
      }
      return user
    } catch (e) {
      authError.value = translateAuthError((e as FirebaseError).code)
      throw e
    }
  }

  const login = async (email: string, password: string) => {
    authError.value = ''
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      return user
    } catch (e) {
      authError.value = translateAuthError((e as FirebaseError).code)
      throw e
    }
  }

  const logout = async () => {
    await firebaseSignOut(auth)
  }

  return { currentUser, authLoading, authError, register, login, logout }
}

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
