import { Link } from 'react-router-dom'

const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const TODAY = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()]

export default function Contact() {
  return (
    <div className="min-h-screen bg-obsidian pt-18">
      {/* Header */}
      <div className="relative overflow-hidden py-20 md:py-28 bg-carbon">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(200,169,110,0.06) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="label-caps mb-4">Come Visit</p>
          <h1 className="font-display text-ivory italic tracking-display" style={{ fontSize: 'var(--font-size-hero)', lineHeight: 'var(--line-height-hero)' }}>
            Find <span className="text-gradient not-italic">Us</span>
          </h1>
          <p className="font-body text-stone text-sm mt-3">Santa Ana, California — walk-ins welcome, reservations encouraged</p>
        </div>
        <div className="absolute bottom-0 inset-x-0 divider-h" />
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left column */}
          <div className="space-y-12">
            {/* Reserve card */}
            <div className="p-8 bg-charcoal shadow-card" style={{ border: '1px solid rgba(200,169,110,0.1)' }}>
              <h2 className="font-display text-2xl italic text-ivory mb-2">
                Reserve a <span className="text-gradient not-italic">Table</span>
              </h2>
              <p className="font-body text-sm text-stone leading-relaxed mb-6">
                We recommend reserving ahead, especially on weekends. Walk-ins are always welcome based on availability.
              </p>
              <a href="#" className="btn-primary inline-flex gap-2">
                Reserve a Table <Arrow />
              </a>
            </div>

            {/* Contact details */}
            <div>
              <h3 className="label-caps mb-6">Contact</h3>
              <div className="space-y-5">
                <Row icon={<LocIcon />} label="Address">
                  <address className="not-italic font-body text-sm text-parchment leading-relaxed">
                    131 E Memory Ln<br />Santa Ana, CA 92705
                  </address>
                </Row>
                <div className="divider-h" />
                <Row icon={<PhoneIcon />} label="Phone">
                  <a href="tel:+17148523125" className="font-body text-sm text-parchment hover:text-gold-light transition-colors duration-300 focus-visible:text-gold">
                    (714) 852-3125
                  </a>
                </Row>
                <div className="divider-h" />
                <Row icon={<IgIcon />} label="Instagram">
                  <a href="https://instagram.com/taberu__sushi" target="_blank" rel="noopener noreferrer"
                    className="font-body text-sm text-parchment hover:text-gold-light transition-colors duration-300 focus-visible:text-gold">
                    @taberu__sushi
                  </a>
                </Row>
              </div>
            </div>

            {/* Private events */}
            <div className="p-6 bg-surface" style={{ border: '1px solid rgba(200,169,110,0.08)' }}>
              <h3 className="font-display italic text-lg text-ivory mb-2">Private Events</h3>
              <p className="font-body text-sm text-stone leading-relaxed mb-4">
                Hosting a birthday, anniversary, or corporate gathering? We offer full buyouts and private omakase experiences. Contact us to discuss.
              </p>
              <a href="tel:+17148523125" className="link-gold">
                Inquire by Phone <span className="line" />
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-10">
            {/* Hours */}
            <div>
              <h3 className="label-caps mb-6">Hours</h3>
              <div>
                {DAYS.map((day) => {
                  const isToday = day === TODAY
                  return (
                    <div
                      key={day}
                      className={`flex items-center justify-between py-3.5 ${isToday ? 'text-ivory' : 'text-stone'}`}
                      style={{ borderBottom: '1px solid rgba(61,57,47,0.35)' }}
                    >
                      <div className="flex items-center gap-3">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />}
                        <span className={`font-body text-sm ${isToday ? 'font-medium' : ''}`}>{day}</span>
                        {isToday && <span className="label-caps text-gold/55" style={{ fontSize: '0.55rem' }}>Today</span>}
                      </div>
                      <div className="text-right">
                        <div className="font-body text-sm">11:00 AM – 9:30 PM</div>
                        <div className="font-body text-xs text-smoke mt-0.5">Break 3:00 PM – 5:00 PM</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="mt-4 font-body text-xs text-smoke italic">Daily break 3 – 5 PM. Last seating 9:00 PM.</p>
            </div>

            {/* Map */}
            <div>
              <h3 className="label-caps mb-4">Location</h3>
              <div className="relative overflow-hidden aspect-video shadow-card" style={{ border: '1px solid rgba(200,169,110,0.08)' }}>
                <iframe
                  title="Taberu Sushi location"
                  src="https://maps.google.com/maps?q=131+E+Memory+Ln,+Santa+Ana,+CA+92705&output=embed&z=15"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.85)' }}
                />
              </div>
              <a
                href="https://maps.google.com/?q=131+E+Memory+Ln+Santa+Ana+CA+92705"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-body text-xs text-stone hover:text-gold-light transition-colors duration-300 focus-visible:text-gold"
              >
                <ExtIcon className="w-3 h-3" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-gold/55 mt-0.5 flex-shrink-0 w-4 h-4">{icon}</div>
      <div>
        <p className="label-caps text-smoke/70 mb-1" style={{ fontSize: '0.55rem' }}>{label}</p>
        {children}
      </div>
    </div>
  )
}

function Arrow() {
  return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
}
function LocIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.46 2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function IgIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
}
function ExtIcon({ className }) {
  return <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9"/><path d="M10 2h4v4M14 2l-7 7"/></svg>
}
