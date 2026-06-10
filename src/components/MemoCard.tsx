import { useState, useRef, useEffect } from 'react'
import { useProfile } from '../context/ProfileContext'
import { useMemos } from '../context/MemosContext'
import UserAvatar from './UserAvatar'
import type { Memo } from '../types'

function formatDate(createdAt: string | null): string {
  if (!createdAt) return ''
  const date = new Date(createdAt)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)
  if (diffMins < 1) return 'たった今'
  if (diffMins < 60) return `${diffMins}分前`
  if (diffHours < 24) return `${diffHours}時間前`
  if (diffDays < 7) return `${diffDays}日前`
  return date.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric' })
}

interface Props {
  memo: Memo
}

export default function MemoCard({ memo }: Props) {
  const { profile } = useProfile()
  const { addMemo, deleteMemo, toggleLike, togglePin, getReplies, updateMemo } = useMemos()

  const [replyingToId, setReplyingToId] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const replyTextareaRef = useRef<HTMLTextAreaElement>(null)

  const [editingId, setEditingId] = useState<string | null>(null)
  const [editContent, setEditContent] = useState('')
  const editTextareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (replyingToId && replyTextareaRef.current) {
      replyTextareaRef.current.focus()
    }
  }, [replyingToId])

  useEffect(() => {
    if (editingId && editTextareaRef.current) {
      editTextareaRef.current.focus()
    }
  }, [editingId])

  const getDescendants = (memoId: string): Memo[] => {
    const directReplies = getReplies(memoId)
    return directReplies.flatMap((reply) => [reply, ...getDescendants(reply.id)])
  }

  const threadItems = [memo, ...getDescendants(memo.id)]

  const toggleReplyForm = (itemId: string) => {
    if (replyingToId === itemId) {
      setReplyingToId(null)
      setReplyContent('')
    } else {
      setReplyingToId(itemId)
      setReplyContent('')
    }
  }

  const submitReply = () => {
    if (replyContent.trim() && replyContent.length <= 280 && replyingToId) {
      addMemo(replyContent, replyingToId)
      setReplyContent('')
      setReplyingToId(null)
    }
  }

  const startEdit = (item: Memo) => {
    if (editingId === item.id) {
      setEditingId(null)
      setEditContent('')
    } else {
      setEditingId(item.id)
      setEditContent(item.content)
    }
  }

  const submitEdit = async () => {
    if (!editContent.trim() || editContent.length > 280 || !editingId) return
    await updateMemo(editingId, editContent)
    setEditingId(null)
    setEditContent('')
  }

  const editCharCountClass = editContent.length >= 280 ? 'over' : editContent.length >= 260 ? 'caution' : ''
  const replyCharCountClass = replyContent.length >= 280 ? 'over' : replyContent.length >= 260 ? 'caution' : ''

  return (
    <div className={`memo-card${memo.isPinned ? ' pinned' : ''}`}>
      {memo.isPinned && (
        <div className="pin-indicator">
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path fill="#1da1f2" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z" />
          </svg>
          <span>ピン留め</span>
        </div>
      )}

      {threadItems.map((item, index) => (
        <div key={item.id}>
          <div className="memo-item">
            <div className="avatar-col">
              <UserAvatar name={profile.name} color={profile.avatarColor} size={48} />
              {(index < threadItems.length - 1 || replyingToId === item.id) && (
                <div className="thread-line" />
              )}
            </div>
            <div className="memo-content">
              <div className="memo-info">
                <span className="username">{profile.name}</span>
                <span className="user-id">@{profile.userId}</span>
                <span className="timestamp">{formatDate(item.createdAt)}</span>
              </div>

              {editingId !== item.id ? (
                <p className="memo-text">{item.content}</p>
              ) : (
                <div className="edit-form-container">
                  <textarea
                    ref={editTextareaRef}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="edit-input"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) submitEdit()
                      if (e.key === 'Escape') { setEditingId(null); setEditContent('') }
                    }}
                  />
                  <div className="edit-form-footer">
                    <span className={`edit-char-count${editCharCountClass ? ' ' + editCharCountClass : ''}`}>
                      {editContent.length}/280
                    </span>
                    <button className="cancel-button" onClick={() => { setEditingId(null); setEditContent('') }}>キャンセル</button>
                    <button
                      className="submit-reply-button"
                      onClick={submitEdit}
                      disabled={!editContent.trim() || editContent.length > 280}
                    >保存</button>
                  </div>
                </div>
              )}

              <div className="memo-actions">
                <div className="action-cell">
                  <button
                    className={`action-button reply-button${replyingToId === item.id ? ' active' : ''}`}
                    onClick={() => toggleReplyForm(item.id)}
                    title="リプライ"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path fill="currentColor" d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.515 5.176z" />
                    </svg>
                    <span className="action-count">{getReplies(item.id).length > 0 ? getReplies(item.id).length : ''}</span>
                  </button>
                </div>

                <div className="action-cell">
                  <button
                    className={`action-button like-button${item.isLiked ? ' liked' : ''}`}
                    onClick={() => toggleLike(item.id)}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path
                        fill={item.isLiked ? '#e0245e' : 'currentColor'}
                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"
                      />
                    </svg>
                    <span className="action-count">{item.likes}</span>
                  </button>
                </div>

                <div className="action-cell">
                  {index === 0 && (
                    <button
                      className={`action-button pin-button${item.isPinned ? ' pinned' : ''}`}
                      onClick={() => togglePin(item.id)}
                      title={item.isPinned ? 'ピン留めを解除' : 'ピン留め'}
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path
                          fill={item.isPinned ? '#1da1f2' : 'currentColor'}
                          d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="action-cell">
                  <button
                    className={`action-button edit-button${editingId === item.id ? ' active' : ''}`}
                    onClick={() => startEdit(item)}
                    title="編集"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                    </svg>
                  </button>
                </div>

                <div className="action-cell">
                  <button
                    className="action-button delete-button"
                    onClick={() => deleteMemo(item.id)}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path fill="currentColor" d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {replyingToId === item.id && (
            <div className="reply-form-container">
              <div className="reply-form">
                <UserAvatar name={profile.name} color={profile.avatarColor} size={32} />
                <textarea
                  ref={replyTextareaRef}
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="リプライを入力..."
                  className="reply-input"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) submitReply()
                  }}
                />
              </div>
              <div className="reply-form-footer">
                <span className={`reply-char-count${replyCharCountClass ? ' ' + replyCharCountClass : ''}`}>
                  {replyContent.length}/280
                </span>
                <button className="cancel-button" onClick={() => { setReplyingToId(null); setReplyContent('') }}>キャンセル</button>
                <button
                  className="submit-reply-button"
                  onClick={submitReply}
                  disabled={!replyContent.trim() || replyContent.length > 280}
                >リプライ</button>
              </div>
            </div>
          )}
        </div>
      ))}

      <style>{`
        .memo-card {
          border-bottom: 1px solid var(--border-color);
          border-left: 3px solid transparent;
          transition: background-color 0.2s, border-left-color 0.2s;
        }
        .memo-card:hover { background-color: var(--card-hover); }
        .memo-card.pinned { background-color: var(--pinned-bg); border-left-color: #1da1f2; }
        .memo-card.pinned:hover { background-color: var(--bg-tertiary); }
        .pin-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #1da1f2;
          font-weight: 600;
          padding: 12px 16px 0 76px;
        }
        .memo-item {
          display: flex;
          gap: 12px;
          padding: 12px 16px 0;
        }
        .avatar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .thread-line {
          width: 2px;
          flex: 1;
          min-height: 12px;
          background-color: var(--thread-line);
          margin-top: 4px;
        }
        .memo-content {
          flex: 1;
          min-width: 0;
          padding-bottom: 12px;
        }
        .memo-info {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 4px;
          flex-wrap: wrap;
        }
        .username { font-weight: 700; font-size: 15px; color: var(--text-primary); }
        .user-id { font-size: 13px; color: var(--text-secondary); }
        .timestamp { font-size: 13px; color: var(--text-secondary); }
        .timestamp::before { content: '·'; margin-right: 6px; }
        .memo-text {
          font-size: 15px;
          line-height: 1.5;
          color: var(--text-primary);
          word-wrap: break-word;
          white-space: pre-wrap;
          margin-bottom: 12px;
        }
        .memo-actions { display: flex; margin-top: 8px; }
        .action-cell { flex: 1; display: flex; justify-content: center; }
        .action-button {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          color: var(--text-secondary);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 13px;
          transition: all 0.2s;
          border: none;
        }
        .action-count { display: inline-block; min-width: 1.5em; text-align: left; }
        .action-button:hover { background-color: rgba(29, 161, 242, 0.1); color: #1da1f2; }
        .reply-button.active { color: #1da1f2; }
        .like-button.liked { color: #e0245e; }
        .like-button:hover { background-color: rgba(224, 36, 94, 0.1); color: #e0245e; }
        .pin-button.pinned { color: #1da1f2; }
        .pin-button:hover { background-color: rgba(29, 161, 242, 0.1); color: #1da1f2; }
        .edit-button.active { color: #1da1f2; }
        .edit-button:hover { background-color: rgba(29, 161, 242, 0.1); color: #1da1f2; }
        .delete-button:hover { background-color: rgba(224, 36, 94, 0.1); color: #e0245e; }
        .action-button svg { transition: transform 0.2s; }
        .action-button:active svg { transform: scale(0.9); }
        .edit-form-container {
          margin-bottom: 12px;
          border: 1px solid #1da1f2;
          border-radius: 8px;
          padding: 10px 12px 8px;
          background-color: var(--bg-primary);
        }
        .edit-input {
          width: 100%;
          border: none;
          resize: none;
          font-size: 16px;
          padding: 0;
          min-height: 72px;
          line-height: 1.5;
          background-color: transparent;
          color: var(--text-primary);
          box-sizing: border-box;
          font-family: inherit;
        }
        .edit-input:focus { outline: none; }
        .edit-form-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 8px;
        }
        .edit-char-count { font-size: 12px; color: var(--text-secondary); margin-right: auto; }
        .edit-char-count.caution { color: #f4900c; font-weight: 600; }
        .edit-char-count.over { color: #e0245e; font-weight: 600; }
        .reply-form-container {
          margin-left: 76px;
          margin-right: 16px;
          margin-bottom: 12px;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 12px;
          background-color: var(--bg-primary);
        }
        .reply-form {
          display: flex;
          gap: 10px;
          margin-bottom: 8px;
        }
        .reply-input {
          flex: 1;
          border: none;
          resize: none;
          font-size: 16px;
          padding: 4px 0;
          min-height: 60px;
          overflow: hidden;
          line-height: 1.5;
          background-color: transparent;
          color: var(--text-primary);
          font-family: inherit;
        }
        .reply-input:focus { outline: none; }
        .reply-form-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
        }
        .reply-char-count { font-size: 12px; color: var(--text-secondary); margin-right: auto; }
        .reply-char-count.caution { color: #f4900c; font-weight: 600; }
        .reply-char-count.over { color: #e0245e; font-weight: 600; }
        .cancel-button {
          background: none;
          color: var(--text-secondary);
          font-size: 14px;
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid var(--border-color);
          transition: background-color 0.2s;
        }
        .cancel-button:hover { background-color: rgba(0, 0, 0, 0.05); opacity: 1; }
        .submit-reply-button {
          background-color: #1da1f2;
          color: white;
          font-size: 14px;
          font-weight: 700;
          padding: 4px 16px;
          border-radius: 9999px;
          transition: background-color 0.2s;
        }
        .submit-reply-button:disabled { opacity: 0.5; cursor: not-allowed; }
        .submit-reply-button:not(:disabled):hover { background-color: #1a91da; opacity: 1; }
      `}</style>
    </div>
  )
}
