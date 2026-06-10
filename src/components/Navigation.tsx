import { useDarkMode } from '../context/DarkModeContext'

interface Props {
  currentPage: string
  onNavigate: (id: string) => void
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

const navItems = [
  { id: 'home', label: 'ホーム', Icon: HomeIcon },
  { id: 'search', label: '検索', Icon: SearchIcon },
  { id: 'profile', label: 'プロフィール', Icon: ProfileIcon },
]

export default function Navigation({ currentPage, onNavigate }: Props) {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const ThemeIcon = isDarkMode ? MoonIcon : SunIcon
  const themeLabel = isDarkMode ? 'ダーク' : 'ライト'

  return (
    <>
      {/* PC sidebar */}
      <nav className="nav-sidebar">
        <ul className="nav-list">
          {navItems.map(({ id, label, Icon }) => (
            <li
              key={id}
              className={`nav-item${currentPage === id ? ' active' : ''}`}
              onClick={() => onNavigate(id)}
            >
              <Icon />
              <span className="nav-label">{label}</span>
            </li>
          ))}
        </ul>
        <button
          className="theme-toggle-button"
          onClick={toggleDarkMode}
          title={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
        >
          <ThemeIcon />
          <span className="nav-label">{themeLabel}</span>
        </button>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="nav-bottom">
        <ul className="nav-bottom-list">
          {navItems.map(({ id, label, Icon }) => (
            <li
              key={id}
              className={`nav-bottom-item${currentPage === id ? ' active' : ''}`}
              onClick={() => onNavigate(id)}
            >
              <Icon />
              <span className="nav-bottom-label">{label}</span>
            </li>
          ))}
          <li
            className="nav-bottom-item"
            onClick={toggleDarkMode}
            title={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
          >
            <ThemeIcon />
            <span className="nav-bottom-label">{themeLabel}</span>
          </li>
        </ul>
      </nav>

      <style>{`
        .nav-sidebar { display: none; }
        .nav-bottom {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-color);
          z-index: 200;
          padding-bottom: env(safe-area-inset-bottom, 0);
        }
        .nav-bottom-list { display: flex; list-style: none; margin: 0; padding: 0; }
        .nav-bottom-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 8px 4px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: color 0.2s;
          border-radius: 0;
          background: none;
          border: none;
        }
        .nav-bottom-item:hover { color: #1da1f2; }
        .nav-bottom-item.active { color: #1da1f2; }
        .nav-bottom-label { font-size: 10px; font-weight: 600; }
        .nav-icon { width: 24px; height: 24px; }
        @media (min-width: 768px) {
          .nav-sidebar {
            display: flex;
            flex-direction: column;
            position: sticky;
            top: 53px;
            z-index: 10;
            height: calc(100vh - 53px);
            width: 240px;
            padding: 16px 12px;
            flex-shrink: 0;
            border-right: 1px solid var(--border-color);
            background-color: var(--bg-primary);
            overflow-y: auto;
          }
          .nav-bottom { display: none; }
          .nav-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .nav-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 12px 16px;
            border-radius: 9999px;
            cursor: pointer;
            color: var(--text-primary);
            font-size: 17px;
            font-weight: 700;
            transition: background-color 0.2s, color 0.2s;
          }
          .nav-item:hover { background-color: var(--bg-tertiary); color: #1da1f2; }
          .nav-item.active { color: #1da1f2; }
          .nav-item.active .nav-icon { stroke: #1da1f2; }
          .nav-label { line-height: 1; }
          .nav-icon { width: 26px; height: 26px; flex-shrink: 0; }
          .theme-toggle-button {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 12px 16px;
            border-radius: 9999px;
            cursor: pointer;
            color: var(--text-primary);
            font-size: 17px;
            font-weight: 700;
            transition: background-color 0.2s, color 0.2s;
            background: none;
            border: none;
            margin-top: auto;
          }
          .theme-toggle-button:hover { background-color: var(--bg-tertiary); color: #1da1f2; }
        }
      `}</style>
    </>
  )
}
