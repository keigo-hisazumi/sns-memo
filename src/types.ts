export interface Memo {
  id: string
  uid: string
  content: string
  createdAt: string | null
  likes: number
  isLiked: boolean
  isPinned: boolean
  parentId: string | null
}

export interface Profile {
  name: string
  userId: string
  bio: string
  avatarColor: string
}
