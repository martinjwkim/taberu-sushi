import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-carbon" style={{ borderTop: '1px solid rgba(200,169,110,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-14">

          {/* Brand */}
          <div>
            <div className="font-display italic text-2xl text-ivory mb-1 tracking-tight">Taberu Sushi</div>
            <p className="label-caps mb-5" style={{ fontSize: '0.6rem' }}>Premium Japanese Sushi &amp; Sashimi</p>
            <p className="font-body text-sm text-stone leading-body max-w-xs">
              Crafting the finest selection of sushi and sashimi in Santa Ana, with intention, precision, and seasonal care.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="label-caps mb-5">Explore</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/menu', label: 'Menu' },
                { to: '/about', label: 'Our Story' },
                { to: '/contact', label: 'Reservations' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-body text-sm text-parchment hover:text-gold-light transition-colors duration-300 focus-visible:text-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label-caps mb-5">Visit Us</h3>
            <address className="not-italic space-y-3">
              <p className="font-body text-sm text-parchment leading-relaxed">
                131 E Memory Ln<br />Santa Ana, CA 92705
              </p>
              <a href="tel:+17148523125" className="block font-body text-sm text-parchment hover:text-gold-light transition-colors duration-300 focus-visible:text-gold">
                (714) 852-3125
              </a>
              <div className="font-body text-sm text-stone">
                <p>Mon–Sun: 11am – 9:30pm</p>
                <p className="text-xs text-smoke mt-0.5">Break: 3pm – 5pm daily</p>
              </div>
            </address>
            <a
              href="https://instagram.com/taberu__sushi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 font-body text-xs text-parchment hover:text-gold-light transition-colors duration-300 tracking-caps focus-visible:text-gold"
            >
              <IgIcon />
              @taberu__sushi
            </a>
          </div>
        </div>

        <div className="divider-h mb-7" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-smoke">© {new Date().getFullYear()} Taberu Sushi. Santa Ana, California.</p>
          <p className="font-body text-xs text-muted italic font-display">橘 — Crafted with precision</p>
        </div>
      </div>
    </footer>
  )
}

function IgIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
