import { useState, useRef, useEffect } from 'react'
import { useProfile } from '../context/ProfileContext'
import UserAvatar from './UserAvatar'

const MAX_CHARS = 280
const YELLOW_THRESHOLD = 260

interface Props {
  onSubmit: (content: string) => void
}

export default function MemoForm({ onSubmit }: Props) {
  const { profile } = useProfile()
  const [content, setContent] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const charCountClass = content.length >= MAX_CHARS ? 'over' : content.length >= YELLOW_THRESHOLD ? 'caution' : ''

  useEffect(() => {
    if (!textareaRef.current) return
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
  }, [content])

  const submitMemo = () => {
    if (content.trim() && content.length <= MAX_CHARS) {
      onSubmit(content)
      setContent('')
      if (textareaRef.current) textareaRef.current.style.height = 'auto'
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) submitMemo()
  }

  return (
    <div className="memo-form">
      <div className="form-header">
        <UserAvatar name={profile.name} color={profile.avatarColor} size={40} />
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="今何してる？"
          className="memo-input"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="form-footer">
        <span className={`char-count${charCountClass ? ' ' + charCountClass : ''}`}>
          {content.length} / {MAX_CHARS}
        </span>
        <button
          className="submit-button"
          onClick={submitMemo}
          disabled={!content.trim() || content.length > MAX_CHARS}
        >
          投稿
        </button>
      </div>

      <style>{`
        .memo-form {
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
          background-color: var(--bg-primary);
        }
        .form-header {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        .memo-input {
          flex: 1;
          border: none;
          resize: none;
          font-size: 16px;
          padding: 8px;
          min-height: 80px;
          overflow: hidden;
          background-color: transparent;
          color: var(--text-primary);
        }
        .memo-input:focus {
          outline: none;
          border: none;
        }
        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 52px;
        }
        .char-count {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .char-count.caution { color: #f4900c; font-weight: 600; }
        .char-count.over { color: #e0245e; font-weight: 600; }
        .submit-button {
          background-color: #1da1f2;
          color: white;
          padding: 8px 24px;
          font-size: 15px;
        }
        .submit-button:disabled { opacity: 0.5; cursor: not-allowed; }
        .submit-button:not(:disabled):hover { background-color: #1a91da; }
      `}</style>
    </div>
  )
}
