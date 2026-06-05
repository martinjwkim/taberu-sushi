import { Link } from 'react-router-dom'

const VALUES = [
  { kanji: '旬', romaji: 'Shun',   title: 'Seasonality',     desc: 'We serve only what the season provides. No shortcuts. No frozen fish. Every piece reflects the current moment in nature.' },
  { kanji: '技', romaji: 'Waza',   title: 'Technique',       desc: 'Years of practice behind every cut. The angle of the knife, the pressure of the hand, the temperature of the rice — all matter.' },
  { kanji: '誠', romaji: 'Makoto', title: 'Integrity',       desc: 'Honest sourcing, transparent preparation, genuine hospitality. No theater. No fusion gimmicks. Just the fish, the rice, and the craft.' },
  { kanji: '間', romaji: 'Ma',     title: 'Negative Space',  desc: 'The beauty in what is left out. We resist overcomplication. A great piece of sushi needs nothing added.' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-obsidian pt-18">
      {/* Hero */}
      <div className="relative overflow-hidden py-20 md:py-32 bg-carbon">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 65% 65% at 50% 100%, rgba(200,169,110,0.06) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="label-caps mb-5">Our Philosophy</p>
            <h1 className="font-display text-ivory mb-6 tracking-display" style={{ fontSize: 'var(--font-size-hero)', lineHeight: 'var(--line-height-hero)' }}>
              The art of<br />
              <span className="italic text-gradient">knowing when to stop</span>
            </h1>
            <p className="font-body text-parchment/80 text-base leading-body max-w-lg">
              Great sushi is not defined by what you add — it is defined by knowing when to stop.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 divider-h" />
      </div>

      {/* Story */}
      <section className="section-pad bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="divider-v h-8" />
                <p className="label-caps">Our Story</p>
              </div>
              <h3 className="font-display text-ivory mb-6 italic tracking-tight" style={{ fontSize: 'var(--font-size-sub)', lineHeight: 'var(--line-height-display)' }}>
                Born from a love for the original form
              </h3>
              <div className="space-y-5 font-body text-sm text-parchment/80 leading-body">
                <p>Taberu — 食べる — simply means "to eat." Not to impress. Not to perform. Just the most elemental act of nourishment, elevated to its highest expression.</p>
                <p>We opened in Santa Ana with a single-minded vision: to bring Edomae-inspired sushi to Southern California with the same reverence found in Tokyo's finest counters, without the pretension.</p>
                <p>Our itamae spent years training in Japan and working in some of the most respected sushi bars on the West Coast. The result is a menu that honors tradition while speaking to the local season and palate.</p>
                <p>We take pride in sourcing from trusted fishmongers who share our obsession with quality — fish flown in several times a week, rice polished and seasoned fresh each morning.</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden shadow-card-up">
                <img src="https://placehold.co/600x750/1c1a16/c8a96e?text=Chef+%2F+Team" alt="Taberu team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-gold/18 hidden md:block" style={{ borderColor: 'rgba(200,169,110,0.18)' }} />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/18 hidden md:block" style={{ borderColor: 'rgba(200,169,110,0.18)' }} />
              {/* Floating secondary image */}
              <div className="absolute -bottom-10 -right-8 w-2/3 overflow-hidden shadow-card hidden md:block">
                <img src="https://placehold.co/400x400/242119/8c7448?text=Interior" alt="Restaurant interior" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-carbon">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="label-caps mb-4">What We Believe</p>
            <h2 className="font-display text-ivory italic tracking-display" style={{ fontSize: 'var(--font-size-section)', lineHeight: 'var(--line-height-display)' }}>
              Four <span className="text-gradient not-italic">principles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => <ValueCard key={v.kanji} {...v} />)}
          </div>
        </div>
      </section>

      {/* Omakase deep-dive */}
      <section className="section-pad bg-obsidian">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-14 md:gap-18 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[3/4] overflow-hidden shadow-card-up">
                <img src="https://placehold.co/500x667/1c1a16/c8a96e?text=Omakase+Course" alt="Omakase presentation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r hidden md:block" style={{ borderColor: 'rgba(200,169,110,0.18)' }} />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-7">
                <span className="divider-v h-8" />
                <p className="label-caps">おまかせ</p>
              </div>
              <h3 className="font-display text-ivory mb-5 italic tracking-tight" style={{ fontSize: 'var(--font-size-sub)', lineHeight: 'var(--line-height-display)' }}>
                The Omakase <span className="text-gradient not-italic">Experience</span>
              </h3>
              <div className="space-y-4 font-body text-sm text-parchment/80 leading-body mb-8">
                <p>Omakase is a relationship of trust. When you say おまかせします — "I leave it to you" — the chef accepts full responsibility for your experience.</p>
                <p>Our omakase begins with the market. Each morning, our itamae selects what is finest, and that choice becomes the evening's menu.</p>
                <p>Courses range from 12 to 16, served at a measured pace. Advance reservation is required to ensure we can source and prepare accordingly.</p>
              </div>
              <div className="space-y-2 font-body text-xs text-stone mb-8">
                {['48-hour advance notice required','Dietary restrictions accommodated','Private dining room available','Sake pairing available on request'].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">—</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="link-gold">
                Inquire About Omakase <span className="line" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ kanji, romaji, title, desc }) {
  return (
    <div
      className="group p-7 bg-surface hover:-translate-y-1 transition-transform duration-400 cursor-default shadow-card hover:shadow-card-up transition-shadow duration-400"
      style={{ border: '1px solid rgba(200,169,110,0.07)' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.18)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.07)'}
    >
      <div className="mb-5">
        <span className="font-display text-gold block mb-1" style={{ fontSize: '3.2rem', lineHeight: 1, opacity: 0.22 }}>
          {kanji}
        </span>
        <span className="label-caps text-gold/55" style={{ fontSize: '0.55rem' }}>{romaji}</span>
      </div>
      <h3 className="font-display italic text-lg text-ivory mb-3">{title}</h3>
      <p className="font-body text-xs text-stone leading-relaxed">{desc}</p>
    </div>
  )
}
