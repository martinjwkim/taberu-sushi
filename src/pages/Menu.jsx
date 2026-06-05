import { useState, useRef, useEffect } from 'react'

const SECTIONS = [
  { id: 'nigiri',   label: 'Nigiri Sets' },
  { id: 'sashimi',  label: 'Sashimi' },
  { id: 'rolls',    label: 'Rolls' },
  { id: 'chirashi', label: 'Chirashi' },
  { id: 'omakase',  label: 'Omakase' },
  { id: 'sake',     label: 'Sake' },
  { id: 'drinks',   label: 'Drinks' },
]

const DATA = {
  nigiri: {
    title: 'Nigiri Sets',
    subtitle: 'Hand-pressed sushi rice with seasonal fish',
    note: 'Sets served with miso soup and house salad',
    items: [
      { name: '9-Piece Nigiri Set',   desc: "Chef's selection of 9 seasonal nigiri", price: '32' },
      { name: '16-Piece Nigiri Set',  desc: "Chef's selection of 16 seasonal nigiri", price: '52' },
      { name: '24-Piece Nigiri Set',  desc: "Chef's grand selection of 24 premium nigiri", price: '78' },
      { name: 'Salmon Nigiri (2pc)',  desc: 'Atlantic salmon, sesame, house soy', price: '9' },
      { name: 'Tuna Nigiri (2pc)',    desc: 'Bluefin akami, wasabi', price: '12' },
      { name: 'Yellowtail Nigiri (2pc)', desc: 'Hamachi, scallion, ponzu', price: '11' },
      { name: 'Shrimp Nigiri (2pc)',  desc: 'Botan ebi, house preparation', price: '9' },
      { name: 'Scallop Nigiri (2pc)', desc: 'Hotate, yuzu kosho', price: '13' },
      { name: 'O-Toro Nigiri (2pc)',  desc: 'Fatty bluefin belly, aged soy, microgreens', price: '22', badge: 'Premium' },
      { name: 'Uni Nigiri (2pc)',     desc: 'Hokkaido sea urchin, nori, shiso', price: '24', badge: 'Premium' },
      { name: 'Ikura Nigiri (2pc)',   desc: 'Salmon roe, quail egg', price: '14' },
      { name: 'Eel Nigiri (2pc)',     desc: 'Unagi, sweet tare, sesame', price: '12' },
    ],
  },
  sashimi: {
    title: 'Sashimi Platters',
    subtitle: 'Premium sliced fish — no rice',
    note: 'Served with house soy, pickled ginger, and wasabi',
    items: [
      { name: 'Sashimi Platter — Small',  desc: "12 pieces, chef's seasonal selection", price: '38' },
      { name: 'Sashimi Platter — Large',  desc: '20 pieces, premium seasonal selection', price: '62' },
      { name: 'Salmon Sashimi (5pc)',     desc: 'Atlantic salmon, thinly sliced', price: '18' },
      { name: 'Tuna Sashimi (5pc)',       desc: 'Bluefin akami', price: '22' },
      { name: 'Yellowtail Sashimi (5pc)', desc: 'Hamachi, citrus zest', price: '20' },
      { name: 'O-Toro Sashimi (3pc)',     desc: 'Fatty bluefin belly, premium cut', price: '28', badge: 'Premium' },
      { name: 'Albacore Sashimi (5pc)',   desc: 'White tuna, garlic ponzu', price: '18' },
      { name: 'Scallop Sashimi (3pc)',    desc: 'Hokkaido hotate, yuzu', price: '20' },
    ],
  },
  rolls: {
    title: 'Signature Rolls',
    subtitle: 'Handcrafted maki and specialty rolls',
    note: 'Consuming raw or undercooked seafood may increase risk of foodborne illness',
    items: [
      { name: 'Taberu Roll',      desc: 'Spicy tuna, cucumber, topped with salmon, avocado, jalapeño', price: '18', badge: 'Signature' },
      { name: 'Dragon Roll',      desc: 'Shrimp tempura, cucumber, topped with avocado, eel sauce', price: '17' },
      { name: 'Rainbow Roll',     desc: 'California roll base topped with 7 varieties of fish', price: '22' },
      { name: 'Spider Roll',      desc: 'Soft shell crab, cucumber, avocado, spicy mayo', price: '18' },
      { name: 'Volcano Roll',     desc: 'Baked scallop, cream cheese, masago, spicy sauce', price: '17' },
      { name: 'Tiger Roll',       desc: 'Yellowtail, scallion, ponzu, crispy onion', price: '16' },
      { name: 'Spicy Tuna Roll',  desc: 'Tuna, cucumber, spicy mayo', price: '14' },
      { name: 'Salmon Avocado',   desc: 'Atlantic salmon, avocado, sesame', price: '13' },
      { name: 'California Roll',  desc: 'Imitation crab, cucumber, avocado', price: '10' },
      { name: 'Vegetable Roll',   desc: 'Cucumber, avocado, pickled radish, asparagus', price: '10' },
      { name: 'Crunch Roll',      desc: 'Shrimp tempura, cream cheese, tempura crunch, eel sauce', price: '15' },
      { name: 'Caterpillar Roll', desc: 'Eel, cucumber, topped with avocado, sesame', price: '17' },
    ],
  },
  chirashi: {
    title: 'Chirashi',
    subtitle: 'Scattered sushi over seasoned rice',
    note: 'All bowls served with miso soup',
    items: [
      { name: 'Chirashi Don',      desc: 'Twelve seasonal selections of sashimi over sushi rice', price: '45', badge: 'Signature' },
      { name: 'Tekka Don',         desc: 'Tuna-forward chirashi, wasabi, house soy', price: '38' },
      { name: 'Sake Don',          desc: 'Salmon-forward bowl, ikura accent, shiso', price: '35' },
      { name: 'Premium Chirashi',  desc: 'O-toro, uni, ikura, hotate, and seasonal selections', price: '72', badge: 'Premium' },
      { name: 'Poke Bowl',         desc: 'Hawaiian-style marinated tuna or salmon, rice, house sauce', price: '22' },
    ],
  },
  omakase: {
    title: 'Omakase',
    subtitle: "The chef's complete expression",
    note: '48-hour advance notice required · Dietary restrictions accommodated · Private dining available',
    items: [
      { name: 'Omakase — Seasonal',      desc: 'A curated 12-course journey through the season\'s finest.', price: '150/person', badge: 'Reserve' },
      { name: 'Omakase — Premium',       desc: 'An elevated 16-course experience with o-toro, uni, and rare selections.', price: '220/person', badge: 'Reserve' },
      { name: 'Private Event Omakase',   desc: 'Exclusive dining for your group. Custom menu designed around your occasion.', price: 'Contact us', badge: 'Private' },
    ],
  },
  sake: {
    title: 'Sake',
    subtitle: 'Curated nihonshu selection',
    note: 'Ask your server about seasonal pairings',
    subsections: [
      {
        label: 'Sparkling Sake',
        items: [
          { name: 'Hakutsuru Enjoy',    desc: 'Light, effervescent, dry finish · 300ml', price: '18' },
          { name: 'Mio Sparkling Sake', desc: 'Fruity, gentle fizz · 300ml', price: '16' },
        ],
      },
      {
        label: 'Junmai Daiginjo',
        items: [
          { name: 'Dassai 39',       desc: 'Fruity, floral, smooth · 300ml', price: '42', badge: 'Premium' },
          { name: 'Born Gold Junmai',desc: 'Clean, refined, elegant · 300ml', price: '36' },
          { name: 'Hakutsuru Taru',  desc: 'Cedar-aged, dry · 300ml', price: '22' },
        ],
      },
      {
        label: 'Junmai',
        items: [
          { name: 'Gekkeikan Traditional',   desc: 'Classic dry, full-bodied · 300ml', price: '14' },
          { name: 'Ozeki Nigori Unfiltered', desc: 'Creamy, sweet, slightly chunky · 300ml', price: '16' },
          { name: 'Sho Chiku Bai Classic',   desc: 'Light, versatile, great warm · 300ml', price: '12' },
        ],
      },
      {
        label: 'By the Glass',
        items: [
          { name: 'House Sake — Hot',  desc: 'Warm preparation · 6oz', price: '9' },
          { name: 'House Sake — Cold', desc: 'Chilled preparation · 6oz', price: '9' },
          { name: 'Premium Sake',      desc: 'Ask server for current selection · 3oz', price: '14' },
        ],
      },
    ],
  },
  drinks: {
    title: 'Drinks',
    subtitle: 'Beverages & libations',
    subsections: [
      {
        label: 'Soju',
        items: [
          { name: 'Chum Churum Original', desc: "Korea's smoothest · 375ml", price: '22' },
          { name: 'Jinro Strawberry',     desc: 'Light, fruity, great chilled · 375ml', price: '22' },
          { name: 'Chum Churum Peach',    desc: 'Lightly sweet, peach finish · 375ml', price: '22' },
          { name: 'Soju by the Glass',    desc: 'Chilled, 2oz · choice of flavors', price: '8' },
        ],
      },
      {
        label: 'Beer',
        items: [
          { name: 'Sapporo Premium', desc: 'Japanese lager · 22oz can', price: '9' },
          { name: 'Kirin Ichiban',   desc: 'Crisp, light Japanese lager · 12oz', price: '7' },
          { name: 'Asahi Super Dry', desc: 'Ultra-dry, clean finish · 12oz', price: '7' },
          { name: 'Sapporo Reserve', desc: 'Rich, malty lager · 22oz can', price: '10' },
        ],
      },
      {
        label: 'Wine',
        items: [
          { name: 'Sake Plum Wine', desc: 'Nigori-style, sweet, chilled · glass', price: '10' },
          { name: 'House White',    desc: 'Chardonnay or Pinot Grigio · glass', price: '12' },
          { name: 'House Red',      desc: 'Pinot Noir or Merlot · glass', price: '12' },
          { name: 'Rosé',           desc: 'Dry, Provence style · glass', price: '13' },
        ],
      },
      {
        label: 'Non-Alcoholic',
        items: [
          { name: 'Ramune Soda',      desc: 'Japanese marble soda · original or melon', price: '5' },
          { name: 'Green Tea',        desc: 'Hot or iced, house-brewed sencha', price: '4' },
          { name: 'Matcha Latte',     desc: 'Ceremonial grade, oat or whole milk', price: '7' },
          { name: 'Yuzu Lemonade',    desc: 'Fresh yuzu, honey, sparkling water', price: '6' },
          { name: 'Sparkling Water',  desc: 'San Pellegrino · 16oz', price: '4' },
          { name: 'Soft Drinks',      desc: 'Coke, Diet Coke, Sprite, Lemonade', price: '4' },
        ],
      },
    ],
  },
}

export default function Menu() {
  const [active, setActive] = useState('nigiri')
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id.replace('sec-', ''))
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-obsidian pt-18">
      {/* Page header */}
      <div className="relative overflow-hidden py-20 md:py-28 bg-carbon">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(200,169,110,0.06) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="label-caps mb-4">Our Offerings</p>
          <h1 className="font-display text-ivory tracking-display italic" style={{ fontSize: 'var(--font-size-hero)', lineHeight: 'var(--line-height-hero)' }}>
            The <span className="text-gradient not-italic">Menu</span>
          </h1>
          <p className="font-body text-stone text-sm mt-3 max-w-xs mx-auto">Seasonal ingredients, classic technique, modern precision.</p>
        </div>
        <div className="absolute bottom-0 inset-x-0 divider-h" />
      </div>

      {/* Sticky nav */}
      <nav
        className="sticky top-18 z-40 bg-carbon/95 backdrop-blur-sm overflow-x-auto"
        style={{ borderBottom: '1px solid rgba(200,169,110,0.08)' }}
        aria-label="Menu sections"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center" style={{ scrollbarWidth: 'none' }}>
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                const el = sectionRefs.current[id]
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                setActive(id)
              }}
              className={`flex-shrink-0 font-body text-xs tracking-caps uppercase py-4 px-3 transition-colors duration-300 focus-visible:text-gold focus-visible:outline-2 focus-visible:outline-gold border-b-2 ${
                active === id
                  ? 'text-gold border-gold'
                  : 'text-stone border-transparent hover:text-parchment'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {SECTIONS.map(({ id }) => (
          <section
            key={id}
            id={`sec-${id}`}
            ref={(el) => (sectionRefs.current[id] = el)}
            className="mb-20 scroll-mt-36"
          >
            <MenuSection data={DATA[id]} />
          </section>
        ))}
      </div>
    </div>
  )
}

function MenuSection({ data }) {
  return (
    <>
      <div className="mb-10">
        <div className="flex items-center gap-6 mb-5">
          <div className="divider-h flex-1" />
          <h2 className="font-display italic text-gold whitespace-nowrap" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
            {data.title}
          </h2>
          <div className="divider-h flex-1" />
        </div>
        {data.subtitle && <p className="text-center font-body text-xs text-stone mb-1">{data.subtitle}</p>}
        {data.note    && <p className="text-center font-body text-xs text-smoke italic">{data.note}</p>}
      </div>

      {data.subsections ? (
        <div className="space-y-10">
          {data.subsections.map((sub) => (
            <div key={sub.label}>
              <h3 className="label-caps text-gold/60 mb-4 pb-2" style={{ borderBottom: '1px solid rgba(200,169,110,0.1)' }}>
                {sub.label}
              </h3>
              <ItemGrid items={sub.items} />
            </div>
          ))}
        </div>
      ) : (
        <ItemGrid items={data.items} />
      )}
    </>
  )
}

function ItemGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {items.map((item, i) => <MenuItem key={i} item={item} />)}
    </div>
  )
}

function MenuItem({ item }) {
  return (
    <div className="menu-row">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span className="font-display italic text-base text-ivory">{item.name}</span>
          {item.badge && (
            <span className="font-body text-2xs tracking-caps-wide uppercase px-2 py-0.5 text-gold/70 flex-shrink-0" style={{ border: '1px solid rgba(200,169,110,0.28)' }}>
              {item.badge}
            </span>
          )}
        </div>
        {item.desc && <p className="font-body text-xs text-stone leading-relaxed">{item.desc}</p>}
      </div>
      <span className="font-body text-sm text-gold font-medium ml-4 flex-shrink-0">
        {item.price.startsWith('Contact') ? <span className="text-parchment text-xs italic">{item.price}</span> : `$${item.price}`}
      </span>
    </div>
  )
}
