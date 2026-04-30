import { ref, watch } from 'vue'

const STORAGE_KEY = 'sns-memo-profile'

const defaultProfile = {
  name: 'あなた',
  userId: 'user',
  bio: '',
  avatarColor: '#1da1f2'
}

const loadProfile = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? { ...defaultProfile, ...JSON.parse(data) } : { ...defaultProfile }
  } catch {
    return { ...defaultProfile }
  }
}

const profile = ref(loadProfile())

watch(profile, (val) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  } catch {}
}, { deep: true })

export function useProfile() {
  const updateProfile = (updates) => {
    profile.value = { ...profile.value, ...updates }
  }

  return { profile, updateProfile }
}
