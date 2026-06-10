import { useState } from 'react'
import { useProfile } from '../context/ProfileContext'
import { useMemos } from '../context/MemosContext'
import UserAvatar from './UserAvatar'
import MemoCard from './MemoCard'
import ProfileEditModal from './ProfileEditModal'

export default function ProfilePage() {
  const { profile } = useProfile()
  const { allMemos } = useMemos()
  const [editOpen, setEditOpen] = useState(false)

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-top">
          <UserAvatar name={profile.name} color={profile.avatarColor} size={72} />
          <button className="edit-button" onClick={() => setEditOpen(true)}>編集</button>
        </div>
        <div className="profile-info">
          <span className="profile-name">{profile.name}</span>
          <span className="profile-id">@{profile.userId}</span>
          {profile.bio && <p className="profile-bio">{profile.bio}</p>}
        </div>
        <div className="profile-stats">
          <span className="stat"><strong>{allMemos.length}</strong> 投稿</span>
        </div>
      </div>

      <div className="posts-header">投稿</div>

      {allMemos.length === 0 ? (
        <div className="empty-state">
          <p className="empty-message">まだ投稿がありません</p>
          <p className="empty-hint">ホーム画面から最初のメモを投稿してみましょう！</p>
        </div>
      ) : (
        allMemos.map((memo) => <MemoCard key={memo.id} memo={memo} />)
      )}

      {editOpen && <ProfileEditModal onClose={() => setEditOpen(false)} />}

      <style>{`
        .profile-page { background-color: var(--bg-primary); }
        .profile-header { padding: 20px 16px 0; border-bottom: 1px solid var(--border-color); }
        .profile-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .edit-button {
          background: none;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 6px 18px;
          font-size: 14px;
          font-weight: 700;
          border-radius: 9999px;
          transition: background-color 0.2s;
        }
        .edit-button:hover { background-color: rgba(0, 0, 0, 0.05); opacity: 1; }
        html.dark-mode .edit-button:hover { background-color: rgba(255, 255, 255, 0.1); }
        .profile-info { display: flex; flex-direction: column; gap: 2px; margin-bottom: 12px; }
        .profile-name { font-size: 20px; font-weight: 700; color: var(--text-primary); }
        .profile-id { font-size: 15px; color: var(--text-secondary); }
        .profile-bio { font-size: 15px; color: var(--text-primary); margin-top: 8px; white-space: pre-wrap; line-height: 1.5; }
        .profile-stats { display: flex; gap: 20px; padding: 12px 0; }
        .stat { font-size: 14px; color: var(--text-secondary); }
        .stat strong { color: var(--text-primary); }
        .posts-header { padding: 12px 16px; font-size: 15px; font-weight: 700; color: var(--text-primary); border-bottom: 1px solid var(--border-color); }
        .empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 20px; text-align: center; }
        .empty-message { font-size: 20px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
        .empty-hint { font-size: 14px; color: var(--text-secondary); }
      `}</style>
    </div>
  )
}
