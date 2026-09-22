import { useTheme } from '../hooks/useTheme'

export default function Nav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="nav-pill">
      <a className="mark" href="#top">
        Karan Gulia
      </a>
      <ul>
        <li>
          <a className="link" href="#stack">
            Stack
          </a>
        </li>
        <li>
          <a className="link" href="#work">
            Work
          </a>
        </li>
        <li>
          <a className="link" href="#faq">
            FAQ
          </a>
        </li>
        <li>
          <a className="btn-mini" href="mailto:karanguliadev@gmail.com">
            Let's talk
          </a>
        </li>
      </ul>
      <button
        className="theme-toggle"
        type="button"
        aria-label="Toggle color theme"
        onClick={toggleTheme}
      >
        {theme === 'light' ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}
