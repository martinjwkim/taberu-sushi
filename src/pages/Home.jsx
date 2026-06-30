import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FEATURED = [
  { name: 'Omakase Selection', tag: "Chef's Choice", desc: 'Seasonal nigiri and small plates curated entirely at the chef\'s discretion — a meditation in balance.', img: '/frames/OMAKASE.jpg' },
  { name: 'Sashimi Selection', tag: 'Seasonal',      desc: 'An assortment of the day\'s finest cuts — tuna, hamachi and seasonal whitefish, served impossibly fresh.', img: '/frames/SASHIMI.jpg' },
  { name: 'Grand Sashimi',     tag: 'Premium',       desc: 'Twelve selections of the season\'s best fish, each presented over chilled, glass-clear daikon.', img: '/frames/SASHIMI_12.jpg' },
  { name: 'Nigiri Box',        tag: 'Signature',     desc: 'Nine pieces of hand-pressed nigiri — each a single, perfect bite of the day\'s catch.', img: '/frames/SUSHI_BOX_9.jpg' },
]

// Paste your Behold Feed ID here after connecting @taberu__sushi at behold.so
const BEHOLD_FEED_ID = 'YOUR_FEED_ID'

export default function Home() {
  return (
    <div>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
        {/* Background photography — submerged beneath the theme */}
        <div className="hero-photo" style={{ backgroundImage: 'url(/hero/hero-home.jpg)', backgroundPosition: 'center 38%' }} aria-hidden="true" />
        <div className="hero-scrim" aria-hidden="true" />
        {/* Ambient radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 42%, rgba(200,169,110,0.055) 0%, transparent 65%)' }}
        />
        {/* Vertical grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="divider-v absolute left-1/4 top-0 h-full" />
          <div className="divider-v absolute right-1/4 top-0 h-full" />
        </div>
        {/* Kanji watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="font-display text-gold" style={{ fontSize: 'clamp(180px,32vw,400px)', lineHeight: 1, opacity: 0.028 }}>寿</span>
        </div>

        {/* Copy */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10 anim-fade-in">
            <span className="divider-v h-7" />
            <span className="label-caps">Santa Ana, California</span>
            <span className="divider-v h-7" />
          </div>

          <h1 className="font-display text-ivory anim-fade-up d-100 mb-5 tracking-display" style={{ fontSize: 'var(--font-size-hero)', lineHeight: 'var(--line-height-hero)' }}>
            <span className="block">Taberu</span>
            <span className="block italic text-gradient">Sushi</span>
          </h1>

          <p className="font-body text-parchment/80 anim-fade-up d-200 max-w-sm mx-auto mb-12 leading-relaxed" style={{ fontSize: '1rem' }}>
            Hand-crafted sushi and sashimi from the season's&nbsp;finest&nbsp;fish
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center anim-fade-up d-300">
            <a href="https://www.yelp.com/reservations/taberu-sushi-santa-ana" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Reserve a Table <Arrow />
            </a>
            <Link to="/menu" className="btn-ghost">
              Explore Menu <Arrow />
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 anim-float flex flex-col items-center gap-2 opacity-40">
          <span className="label-caps" style={{ fontSize: '0.55rem' }}>Scroll</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(180deg, rgba(200,169,110,0.7) 0%, transparent 100%)' }} />
        </div>
      </section>

      {/* ─── BRAND STATEMENT ───────────────────────────────── */}
      <section className="section-pad bg-carbon">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Ornament */}
          <div className="flex items-center gap-6 mb-16">
            <div className="divider-h flex-1" />
            <span className="font-display italic text-gold text-xl">橘</span>
            <div className="divider-h flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <p className="label-caps mb-5">Our Philosophy</p>
              <h2 className="font-display text-ivory mb-7 tracking-tight" style={{ fontSize: 'var(--font-size-section)', lineHeight: 'var(--line-height-display)' }}>
                Where craft meets<br />
                <span className="italic text-gradient">reverence</span>
              </h2>
              <p className="font-body text-parchment/80 text-sm leading-body mb-5">
                At Taberu, every piece is a deliberate act. We source only what the season allows — the finest cuts of tuna, the sweetest uni, the most translucent hamachi — then let the fish speak for itself.
              </p>
              <p className="font-body text-stone text-sm leading-body">
                Our itamae train in the Japanese tradition of shokunin: the relentless pursuit of mastery in a single craft. Nothing rushed. Nothing wasted.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden shadow-card-up">
                <img src="/8X10_PRINT_3BOX.jpg" alt="Taberu sushi presentation" className="w-full h-full object-cover" style={{ filter: 'contrast(0.86) brightness(1.03)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b border-r border-gold/20 hidden md:block" />
              <div className="absolute -top-5 -left-5 w-24 h-24 border-t border-l border-gold/20 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED DISHES ───────────────────────────────── */}
      <section className="section-pad bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="label-caps mb-4">Today's Selection</p>
            <h2 className="font-display text-ivory tracking-display" style={{ fontSize: 'var(--font-size-section)', lineHeight: 'var(--line-height-display)' }}>
              Featured <span className="text-gradient italic">dishes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED.map((d) => <DishCard key={d.name} dish={d} />)}
          </div>

          <div className="text-center mt-14">
            <Link to="/menu" className="link-gold">View Full Menu <span className="line" /></Link>
          </div>
        </div>
      </section>

      {/* ─── OMAKASE CALLOUT ───────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-40 bg-charcoal">
        {/* Whale mural — the real Taberu back wall, filling the section */}
        <img
          src="/whale-mural.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[72%_center] opacity-[0.34] pointer-events-none select-none"
        />
        {/* Legibility veil — top/bottom fade + warmth */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-charcoal via-charcoal/45 to-charcoal" />
        <div className="absolute inset-0 pointer-events-none mix-blend-multiply" style={{ background: 'rgba(20,18,14,0.4)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 70% at 50% 50%, rgba(200,169,110,0.07) 0%, transparent 62%)' }}
        />
        <div className="divider-v absolute left-1/4 top-0 h-full opacity-30" />
        <div className="divider-v absolute right-1/4 top-0 h-full opacity-30" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-px bg-gold/40" />
            <span className="label-caps">By Reservation Only</span>
            <span className="w-8 h-px bg-gold/40" />
          </div>

          <h2 className="font-display text-ivory mb-6 tracking-tight" style={{ fontSize: 'clamp(2.2rem,5vw,4.2rem)', lineHeight: 1.08 }}>
            The Omakase<br /><span className="italic text-gradient">Experience</span>
          </h2>

          <p className="font-body text-parchment/80 text-sm leading-body mb-3 max-w-lg mx-auto">
            Omakase — "I leave it to you" — is the highest expression of trust between guest and chef. A multi-course journey through the season's finest offerings, curated entirely at the chef's discretion.
          </p>
          <p className="font-body text-stone text-xs mb-10">Advance notice required · Private dining available</p>

          <Link to="/contact" className="btn-ghost border-gold/40 text-gold hover:bg-gold/10">
            Inquire About Omakase <Arrow />
          </Link>
        </div>
      </section>

      {/* ─── INSTAGRAM GRID ────────────────────────────────── */}
      <section className="section-pad bg-carbon">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="label-caps mb-3">Follow the Story</p>
            <a
              href="https://instagram.com/taberu__sushi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display italic text-ivory text-2xl md:text-3xl hover:text-gold-light transition-colors duration-300 focus-visible:text-gold"
            >
              @taberu__sushi
            </a>
          </div>

          <BeholdGrid feedId={BEHOLD_FEED_ID} />
        </div>
      </section>
    </div>
  )
}

function DishCard({ dish }) {
  return (
    <article className="group bg-surface overflow-hidden shadow-card cursor-default" style={{ transition: 'transform 450ms cubic-bezier(0.19,1,0.22,1), box-shadow 450ms cubic-bezier(0.19,1,0.22,1)' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-card-up)' }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-card)' }}>
      <div className="aspect-[3/4] overflow-hidden relative">
        <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-multiply" />
        <div className="absolute top-3 left-3">
          <span className="font-body text-2xs tracking-caps-wide uppercase px-2.5 py-1 bg-void/80 text-gold border border-gold/20">
            {dish.tag}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-ivory mb-2 leading-snug italic">{dish.name}</h3>
        <p className="font-body text-xs text-stone leading-relaxed">{dish.desc}</p>
      </div>
      <div className="h-px w-0 bg-gold/25 group-hover:w-full transition-all duration-500" />
    </article>
  )
}

// Mock Instagram feed — first-frame stills from the @taberu__sushi fish-feature reels.
// Ordered for visual variety (red / silver / dark fish interleaved).
// To go live, paste a real BEHOLD_FEED_ID above and this static grid is bypassed.
const IG_FEED = [
  { src: '/feed/madai.jpg',          alt: 'Madai · red sea bream' },
  { src: '/feed/kohada.jpg',         alt: 'Kohada · gizzard shad' },
  { src: '/feed/blackcod.jpg',       alt: 'Black cod · sablefish' },
  { src: '/feed/shimaaji.jpg',       alt: 'Shima aji · striped jack' },
  { src: '/feed/kinmedai.jpg',       alt: 'Kinmedai · golden eye snapper' },
  { src: '/feed/sayori.jpg',         alt: 'Sayori · halfbeak' },
  { src: '/feed/kanpachi.jpg',       alt: 'Kanpachi · amberjack' },
  { src: '/feed/kurodai.jpg',        alt: 'Kurodai · black sea bream' },
  { src: '/feed/fujisalmon.jpg',     alt: 'Fuji salmon' },
  { src: '/feed/itoyori.jpg',        alt: 'Itoyori · threadfin bream' },
  { src: '/feed/matsukawagarei.jpg', alt: 'Matsukawa garei · flounder' },
  { src: '/feed/kamasu.jpg',         alt: 'Kamasu · barracuda' },
  { src: '/feed/mejina.jpg',         alt: 'Mejina · largescale blackfish' },
  { src: '/feed/ojisan.jpg',         alt: 'Ojisan · goatfish' },
  { src: '/feed/sagoshi.jpg',        alt: 'Sagoshi · Spanish mackerel' },
]

// How many tiles are visible at once, and how often one swaps for a fresh fish.
const FEED_VISIBLE = 8
const FEED_ROTATE_MS = 3200

// Static fallback feed: shows 8 of the 16 fish at a time and rotates one tile
// at a time so the whole catalog cycles through, mimicking a live feed.
function RotatingFeed() {
  const [tiles, setTiles] = useState(() =>
    IG_FEED.slice(0, FEED_VISIBLE).map((item, i) => ({ ...item, gen: i }))
  )

  useEffect(() => {
    if (IG_FEED.length <= FEED_VISIBLE) return
    let next = FEED_VISIBLE % IG_FEED.length
    let slot = 0
    let gen = FEED_VISIBLE
    const id = setInterval(() => {
      setTiles((prev) => {
        const copy = prev.slice()
        copy[slot] = { ...IG_FEED[next], gen }
        return copy
      })
      next = (next + 1) % IG_FEED.length
      slot = (slot + 1) % FEED_VISIBLE
      gen += 1
    }, FEED_ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
      {tiles.map((item, i) => (
        <a
          key={i}
          href="https://instagram.com/taberu__sushi"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden block focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          <img
            key={item.gen}
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="anim-fade-in w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-400 flex items-center justify-center">
            <IgIconLg className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-7 h-7" />
          </div>
        </a>
      ))}
    </div>
  )
}

function BeholdGrid({ feedId }) {
  const isPlaceholder = !feedId || feedId === 'YOUR_FEED_ID'

  if (isPlaceholder) return <RotatingFeed />

  return <behold-widget feed-id={feedId} />
}

function IgIconLg({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}
