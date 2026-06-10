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

function detectOS(): 'ios' | 'android' | 'desktop' {
  const ua = navigator.userAgent
  if (/android/i.test(ua)) return 'android'
  if (/iphone|ipad|ipod/i.test(ua)) return 'ios'
  return 'desktop'
}

export default function Navigation({ currentPage, onNavigate }: Props) {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const ThemeIcon = isDarkMode ? MoonIcon : SunIcon
  const themeLabel = isDarkMode ? 'ダーク' : 'ライト'
  const os = detectOS()

  return (
    <>
      {/* Desktop sidebar */}
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

      {/* iOS-style bottom tab bar */}
      {os === 'ios' && (
        <nav className="nav-bottom nav-ios">
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
      )}

      {/* Android Material Design 3 bottom navigation */}
      {os === 'android' && (
        <nav className="nav-bottom nav-android">
          <ul className="nav-bottom-list">
            {navItems.map(({ id, label, Icon }) => (
              <li
                key={id}
                className={`nav-bottom-item${currentPage === id ? ' active' : ''}`}
                onClick={() => onNavigate(id)}
              >
                <span className="md3-indicator">
                  <Icon />
                </span>
                <span className="nav-bottom-label">{label}</span>
              </li>
            ))}
            <li
              className="nav-bottom-item"
              onClick={toggleDarkMode}
              title={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
            >
              <span className="md3-indicator">
                <ThemeIcon />
              </span>
              <span className="nav-bottom-label">{themeLabel}</span>
            </li>
          </ul>
        </nav>
      )}

      {/* Fallback bottom nav for non-iOS/Android mobile */}
      {os === 'desktop' && (
        <nav className="nav-bottom nav-mobile-fallback">
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
      )}

      <style>{`
        /* ===== Common ===== */
        .nav-sidebar { display: none; }
        .nav-icon { width: 24px; height: 24px; }

        /* ===== iOS Tab Bar (Human Interface Guidelines) ===== */
        .nav-ios {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 200;
          /* iOS frosted glass effect */
          background-color: ${isDarkMode
            ? 'rgba(28, 28, 30, 0.85)'
            : 'rgba(249, 249, 249, 0.85)'};
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-top: 0.5px solid ${isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'};
          padding-bottom: env(safe-area-inset-bottom, 0);
        }
        .nav-ios .nav-bottom-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-ios .nav-bottom-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          padding: 6px 4px 4px;
          cursor: pointer;
          color: ${isDarkMode ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)'};
          transition: color 0.15s;
          background: none;
          border: none;
          -webkit-tap-highlight-color: transparent;
        }
        .nav-ios .nav-bottom-item:active {
          opacity: 0.6;
        }
        .nav-ios .nav-bottom-item.active {
          /* iOS uses the system blue tint for active tab */
          color: #007AFF;
        }
        .nav-ios .nav-bottom-label {
          font-size: 10px;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          letter-spacing: 0;
        }
        .nav-ios .nav-icon { width: 26px; height: 26px; }

        /* ===== Android Material Design 3 Bottom Navigation ===== */
        .nav-android {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 200;
          background-color: ${isDarkMode ? '#1C1B1F' : '#FFFBFE'};
          border-top: 1px solid ${isDarkMode ? '#49454F' : '#CAC4D0'};
          padding-bottom: env(safe-area-inset-bottom, 0);
          /* MD3 elevation */
          box-shadow: 0px -1px 3px 1px rgba(0,0,0,0.15), 0px -1px 2px rgba(0,0,0,0.30);
        }
        .nav-android .nav-bottom-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          height: 80px;
        }
        .nav-android .nav-bottom-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 0 4px;
          cursor: pointer;
          color: ${isDarkMode ? '#CAC4D0' : '#49454F'};
          transition: color 0.2s;
          background: none;
          border: none;
          -webkit-tap-highlight-color: transparent;
          position: relative;
        }
        /* MD3 pill-shaped active indicator */
        .nav-android .md3-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 32px;
          border-radius: 16px;
          transition: background-color 0.2s;
        }
        .nav-android .nav-bottom-item.active .md3-indicator {
          background-color: ${isDarkMode ? '#4A4458' : '#E8DEF8'};
        }
        .nav-android .nav-bottom-item.active {
          color: ${isDarkMode ? '#D0BCFF' : '#6750A4'};
        }
        .nav-android .nav-bottom-item:active .md3-indicator {
          background-color: ${isDarkMode ? 'rgba(208,188,255,0.12)' : 'rgba(103,80,164,0.12)'};
        }
        .nav-android .nav-bottom-label {
          font-size: 12px;
          font-weight: 500;
          font-family: 'Google Sans', Roboto, sans-serif;
          letter-spacing: 0.5px;
        }
        .nav-android .nav-icon { width: 24px; height: 24px; }

        /* ===== Desktop fallback (shown on mobile when not iOS/Android) ===== */
        .nav-mobile-fallback {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-color);
          z-index: 200;
          padding-bottom: env(safe-area-inset-bottom, 0);
        }
        .nav-mobile-fallback .nav-bottom-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-mobile-fallback .nav-bottom-item {
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
          background: none;
          border: none;
        }
        .nav-mobile-fallback .nav-bottom-item:hover { color: #1da1f2; }
        .nav-mobile-fallback .nav-bottom-item.active { color: #1da1f2; }
        .nav-mobile-fallback .nav-bottom-label { font-size: 10px; font-weight: 600; }

        /* ===== Desktop sidebar (≥768px) ===== */
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
          .nav-bottom { display: none !important; }
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
