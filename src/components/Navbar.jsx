import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo-taberu.png'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${scrolled ? 'bg-obsidian/96 backdrop-blur-md shadow-nav' : ''}`}
      style={{ transition: 'background 500ms, box-shadow 500ms' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-18 flex items-center justify-between">

        {/* Wordmark */}
        <Link to="/" className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4" aria-label="Taberu Sushi">
          <img
            src={logo}
            alt="Taberu"
            className="h-9 w-auto select-none group-hover:opacity-100 opacity-95"
            style={{ transition: 'opacity 300ms' }}
            draggable="false"
          />
          <span className="divider-v h-7 hidden sm:block" aria-hidden="true" />
          <span className="label-caps text-gold-dim group-hover:text-gold hidden sm:inline" style={{ transition: 'color 300ms', fontSize: '0.6rem', letterSpacing: '0.3em' }}>
            Sushi
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://www.clover.com/online-ordering/taberu-sushi-santa-ana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost ml-2 py-2 px-5 text-xs"
          >
            Order Online
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-2 focus-visible:outline-gold"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block h-px w-6 bg-ivory transition-transform duration-300 ${open ? 'translate-y-2.5 rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-ivory transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-ivory transition-transform duration-300 ${open ? '-translate-y-2.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden bg-carbon"
        style={{
          maxHeight: open ? '22rem' : '0',
          borderTop: open ? '1px solid rgba(200,169,110,0.1)' : 'none',
          transition: 'max-height 400ms cubic-bezier(0.19,1,0.22,1)',
        }}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-body text-sm tracking-caps pb-3 border-b border-muted/40 ${isActive ? 'text-gold' : 'text-parchment'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://www.clover.com/online-ordering/taberu-sushi-santa-ana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-1 py-3 justify-center"
          >
            Order Online
          </a>
        </nav>
      </div>
    </header>
  )
}
