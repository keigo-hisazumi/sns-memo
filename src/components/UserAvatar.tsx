interface Props {
  name?: string
  color?: string
  size?: number
}

export default function UserAvatar({ name = 'あなた', color = '#1da1f2', size = 40 }: Props) {
  const initial = name.trim().charAt(0) || '?'
  return (
    <div
      className="user-avatar"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        fontSize: Math.round(size * 0.42),
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        flexShrink: 0,
        userSelect: 'none'
      }}
    >
      {initial}
    </div>
  )
}
