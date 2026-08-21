import { useState, useRef, useEffect } from 'react'

const SECTIONS = [
  { id: 'omakase',   label: 'Omakase' },
  { id: 'starters',  label: 'Starters' },
  { id: 'signature', label: 'Taberu Signature' },
  { id: 'sushi',     label: 'Sushi & Sashimi' },
  { id: 'rolls',     label: 'Rolls' },
  { id: 'udon',      label: 'Udon' },
  { id: 'donburi',   label: 'Donburi' },
  { id: 'hotplates', label: 'Signature Hot Plates' },
  { id: 'lunch',     label: 'Lunch Special' },
]

const DATA = {
  sushi: {
    title: 'Sushi & Sashimi',
    subsections: [
      {
        label: 'Sushi & Sashimi Sets',
        note: 'Served with a side of miso soup & green salad',
        items: [
          { name: '7pc Sushi Plate',   desc: 'Bluefin tuna, cherry salmon, kanpachi, shima aji, sea water eel, chef\'s choice special fish', price: '42' },
          { name: '9pc Sushi Plate',   desc: 'Bluefin toro, cherry salmon, kanpachi, shima aji, scallop, chef\'s choice special fish', price: '59', badge: 'Premium' },
          { name: '8pc Sashimi Box',   desc: 'Bluefin toro, cherry salmon, kanpachi, kurodai', price: '42' },
          { name: '16pc Sashimi Box',  desc: 'Bluefin toro, cherry salmon, kanpachi, shima aji, kurodai, with 3 kinds of chef\'s choice special fish', price: '95', badge: 'Premium' },
          { name: '24pc Sashimi Box',  desc: 'Bluefin tuna, toro, cherry salmon, kanpachi, shima aji, kurodai, with 6 kinds of chef\'s choice special fish', price: '140', badge: 'Premium' },
        ],
      },
      {
        label: 'By the Piece',
        note: 'Prices listed as Sushi (1 pc) / Sashimi (3 pcs) · M.P = Market Price',
        items: [
          { name: 'Bluefin Tuna',        desc: 'Hon Maguro', price: '6 / 18' },
          { name: 'Bluefin Tuna Belly',  desc: 'Toro', price: '10 / 30', badge: 'Premium' },
          { name: 'Cherry Salmon',       desc: 'Sake', price: '4 / 12' },
          { name: 'Yellowtail',          desc: 'Hamachi', price: '6 / 18' },
          { name: 'Amberjack',           desc: 'Kanpachi', price: '7 / 21' },
          { name: 'Striped Jack',        desc: 'Shima Aji', price: '9 / 27' },
          { name: 'Red Snapper',         desc: 'Madai', price: '7 / 21' },
          { name: 'Black Snapper',       desc: 'Kurodai', price: '5 / 15' },
          { name: 'Black Cod',           desc: 'Gindara', price: '7 / 21' },
          { name: 'Fresh Scallop',       desc: 'Muki Hotate', price: 'M.P / M.P' },
          { name: 'Scallop',             desc: 'Hotate', price: '6 / 18' },
          { name: 'Live Sweet Shrimp',   desc: 'Live Amaebi', price: 'M.P / M.P' },
          { name: 'Sweet Shrimp',        desc: 'Amaebi', price: '9 / 27' },
          { name: 'Wild Horse Mackerel', desc: 'Tsuri Aji', price: 'M.P / M.P' },
          { name: 'Giant Clam',          desc: 'Mirugai', price: 'M.P / M.P' },
          { name: 'Sea Urchin',          desc: 'Uni', price: 'M.P / M.P', badge: 'Premium' },
          { name: 'A5 Japan Wagyu Beef', desc: '', price: 'M.P / M.P', badge: 'Premium' },
          { name: 'Salmon Roe',          desc: 'Ikura', price: '7 / 21' },
          { name: 'Monkfish Liver',      desc: 'Ankimo', price: '5 / 15' },
          { name: 'Sea Water Eel',       desc: 'Anago', price: '7 / 21' },
          { name: 'Fresh Water Eel',     desc: 'Unagi', price: '7 / 21' },
        ],
      },
    ],
  },
  rolls: {
    title: 'Rolls',
    subsections: [
      {
        label: 'Premium Hand Rolls',
        items: [
            { name: 'Toro & Uni Hand Roll',                 desc: '', price: '29', badge: 'Premium' },
            { name: 'Amaebi & Uni Hand Roll',               desc: '', price: '30', badge: 'Premium' },
            { name: 'Soft Shell Crab & Blue Crab Hand Roll', desc: '', price: '25' },
            { name: 'Toro Hand Roll',                       desc: '', price: '17' },
            { name: 'Blue Crab Hand Roll',                  desc: '', price: '12' },
        ],
      },
      {
        label: 'Signature Rolls',
        items: [
          { name: 'S&T Roll',                    desc: 'Lobster, asparagus, avocado, topped with wagyu, onion ponzu, den miso sauce, fried onion', price: '28', badge: 'Signature' },
          { name: 'Double Hamachi',              desc: 'Spicy yellowtail, cucumber, topped with yellowtail, onion ponzu, serrano, fried onion', price: '26' },
          { name: 'Double Salmon',               desc: 'Spicy cherry salmon, cucumber, topped with cherry salmon, truffle aioli, tobiko', price: '24' },
          { name: 'Double Tuna',                 desc: 'Spicy tuna, cucumber, topped with bluefin tuna, ponzu, crispy garlic', price: '27' },
          { name: 'Spicy Tuna Mango Sauce Roll', desc: 'Spicy tuna roll with rice cereal, topped with mango sauce', price: '20' },
          { name: 'Rainbow Roll',                desc: 'Snow crab roll topped with bluefin tuna, cherry salmon, yellowtail, white fish', price: '25' },
          { name: 'Green Goddess Roll',          desc: 'Roasted eggplant, asparagus, topped with avocado, tomato jam, black garlic sauce, micro cilantro', price: '22' },
          { name: 'Sashimi Roll',                desc: 'Bluefin tuna, cherry salmon, yellowtail, white fish, avocado, wrapped with soypaper, ponzu · 6pcs', price: '25' },
        ],
      },
      {
        label: 'On-Top Rolls — Snow Crab Roll Base',
        items: [
          { name: 'Tuna on Top',             desc: 'Bluefin tuna, ponzu', price: '27' },
          { name: 'Tuna & Salmon on Top',    desc: 'Bluefin tuna, cherry salmon, ponzu', price: '26' },
          { name: 'Salmon on Top',           desc: 'Cherry salmon, ponzu, truffle aioli, tobiko', price: '24' },
          { name: 'Salmon & Avocado on Top', desc: 'Cherry salmon, ponzu, truffle aioli, tobiko', price: '24' },
        ],
      },
      {
        label: 'On-Top Rolls — Spicy Tuna Roll Base',
        items: [
          { name: 'Tuna & Salmon on Top',    desc: 'Bluefin tuna, cherry salmon, ponzu', price: '25' },
          { name: 'Salmon on Top',           desc: 'Cherry salmon, ponzu, truffle aioli, tobiko', price: '23' },
          { name: 'Salmon & Avocado on Top', desc: 'Cherry salmon, ponzu, truffle aioli, tobiko', price: '23' },
        ],
      },
      {
        label: 'Tempura Rolls',
        items: [
          { name: 'Shrimp Tempura Roll',     desc: '5pcs jumbo shrimp tempura on snow crab roll, eel sauce', price: '23' },
          { name: 'Snow Crab Tempura Roll',  desc: 'Eel sauce, spicy mayo', price: '18' },
          { name: 'Spicy Tuna Tempura Roll', desc: 'Eel sauce, spicy mayo', price: '16' },
        ],
      },
      {
        label: 'Baked Rolls',
        items: [
          { name: 'Scorched Crab Roll (3pc)', desc: 'Snow crab, soy paper, baked mayo, tobiko', price: '17' },
          { name: 'Volcano Roll',             desc: 'Snow crab roll, baked scallop, baked mayo, eel sauce', price: '20' },
          { name: 'Baked Salmon Roll',        desc: 'Snow crab roll, cherry salmon, asparagus, baked mayo, eel sauce', price: '18' },
        ],
      },
      {
        label: 'Basic Rolls',
        items: [
          { name: 'Snow Crab Roll',          desc: 'Real snow crab, avocado, cucumber', price: '13' },
          { name: 'Bluefin Tuna Roll (6pc)', desc: '', price: '13' },
          { name: 'Yellowtail Roll',         desc: '', price: '13' },
          { name: 'Cherry Salmon Roll',      desc: '', price: '11' },
          { name: 'Salmon Skin Roll',        desc: '', price: '10' },
          { name: 'Spicy Tuna Roll',         desc: '', price: '9' },
          { name: 'Avocado Roll',            desc: '', price: '9' },
          { name: 'Cucumber Roll',           desc: '', price: '8' },
        ],
      },
    ],
  },
  donburi: {
    title: 'Donburi',
    note: 'Served with a side of sunomono & miso soup',
    items: [
      { name: 'Chirashi',       desc: 'Chef\'s choice 12pcs sashimi, sushi rice, sesame oil, dried seaweed powder', price: '52', badge: 'Signature' },
      { name: 'Edo Box',        desc: 'Uni, toro, blue crab, 14pcs seasonal special fishes, sushi rice, dried seaweed powder', price: '90', badge: 'Premium' },
      { name: 'Toro Donburi',   desc: 'Chopped bluefin toro, chopped ginger, green onion, sushi rice, sesame oil, dried seaweed powder', price: '37' },
      { name: 'Salmon Donburi', desc: '6pcs cherry salmon, ikura, sushi rice, sesame oil, dried seaweed powder', price: '29' },
      { name: 'Unagi Donburi',  desc: '5pcs unagi, sushi rice, sesame oil, dried seaweed powder', price: '32' },
    ],
  },
  hotplates: {
    title: 'Signature Hot Plates',
    note: 'Served with a side of sunomono & miso soup',
    items: [
      { name: 'Grilled Cherry Salmon & Garlic Rice Plate', desc: '', price: '29' },
      { name: 'Spicy Pork & Garlic Rice Plate',            desc: '', price: '29' },
      { name: 'Marinated Beef & Garlic Rice Plate',        desc: '', price: '29' },
    ],
  },
  udon: {
    title: 'Udon',
    items: [
      { name: 'Basic Udon',               desc: '', price: '13' },
      { name: 'Add Snow Crab Roll',       desc: 'Add only one', price: '12' },
      { name: 'Add Spicy Tuna Roll',      desc: 'Add only one', price: '9' },
      { name: 'Add Shrimp Tempura (3pc)', desc: 'Add only one', price: '9' },
    ],
  },
  starters: {
    title: 'Starters',
    subsections: [
      {
        label: 'Appetizers',
        items: [
          { name: 'Miso Soup',                     desc: '', price: '2' },
          { name: 'Edamame',                       desc: '', price: '5' },
          { name: 'Garlic Soy Edamame',            desc: '', price: '9' },
          { name: 'Shishito Pepper',               desc: 'Bonito flakes', price: '14' },
          { name: 'Chawanmushi',                   desc: 'Japanese steamed egg custard with shiitake mushroom, shrimp', price: '10' },
          { name: 'Gyoza (5pc)',                   desc: 'Ground pork or chicken', price: '8' },
          { name: 'Chicken Skin Gyoza (3pc)',      desc: '', price: '10' },
          { name: 'Agedashi Tofu',                 desc: 'Bonito flakes', price: '9' },
          { name: 'Agedashi Japanese Egg Plant',   desc: '', price: '11' },
          { name: 'Soft Shell Crab Tempura (1pc)', desc: '', price: '17' },
          { name: 'Assorted Tempura',              desc: 'Sweet potato, crown daisy, green bean, jumbo shrimp', price: '18' },
          { name: 'Shrimp Tempura (5pc)',          desc: '5pcs jumbo shrimp tempura with crown daisy', price: '16' },
          { name: 'Baked Scallop',                 desc: '4pcs with volcano mayo sauce, chili oil, crispy garlic, tobiko', price: '18' },
          { name: 'Snow Crab Porridge',            desc: '', price: '14' },
          { name: 'Fish Kama',                     desc: '', price: '17' },
          { name: 'Spicy Tuna & Crispy Rice',      desc: '3pcs, eel sauce, spicy mayo, serrano', price: '15' },
        ],
      },
      {
        label: 'Sashimi Appetizers',
        items: [
          { name: 'Ceviche',                 desc: 'Fresh octopus, scallop, grape, shallots, shrimp chip, special sauce', price: '18' },
          { name: 'Mizu Tako Aburi',         desc: '5pcs smoked fresh octopus, oba, special sauce', price: '20' },
          { name: 'Octopus & Special Sauce', desc: '5pcs octopus, cherry tomato, oba, special sauce', price: '20' },
          { name: 'Cherry Salmon Crudo',     desc: '5pcs cherry salmon, shallots, capers, ponzu, lime juice', price: '20' },
          { name: 'Yellowtail Jalapeño',     desc: '5pcs yellowtail, serrano, onion ponzu, micro cilantro', price: '23' },
        ],
      },
      {
        label: 'Salads',
        items: [
          { name: 'Taberu Salad',         desc: 'Mixed greens, cherry tomatoes, beets, mozzarella cheese, house sauce', price: '8' },
          { name: 'Salmon Skin Salad',    desc: '', price: '14' },
          { name: 'Taberu Sashimi Salad', desc: '', price: '16' },
          { name: 'Sunomono Salad',       desc: '', price: '7' },
          { name: 'Seaweed Salad',        desc: '', price: '6' },
        ],
      },
    ],
  },
  omakase: {
    title: 'Omakase',
    note: 'Fish availability changes by season · all sushi & sashimi brushed with soy dressing · seasonal fish subject to change',
    items: [
      { name: 'Omakase', desc: 'Courses selected by the chef', price: '170', badge: 'Reserve' },
    ],
  },
  signature: {
    title: 'Taberu Signature',
    items: [
          { name: 'Uni on Top Scallop',   desc: '2pcs seared scallop, uni, caviar', price: '33', badge: 'Premium' },
          { name: 'Uni Flight',           desc: 'Santa Barbara or Bara Japan · amaebi topped with uni, toro topped with uni, scallop topped with uni', price: 'M.P', badge: 'Premium' },
          { name: 'Toro Tartare',         desc: 'Bluefin toro, truffle, 6pcs baguette bread brushed with truffle oil', price: '39' },
          { name: 'Crab in Cherry Salmon', desc: '3pcs cherry salmon, blue crab, truffle aioli, tobiko', price: '19' },
    ],
  },
  lunch: {
    title: 'Lunch Special',
    note: 'Served 11:00 AM – 3:00 PM, Monday to Sunday · all lunch specials served with miso soup',
    items: [
      { name: 'Taberu Lunch Omakase', desc: 'Chawanmushi, mini kaisendon, chef\'s choice 7 types special fish sushi, dessert', price: '88', badge: 'Signature' },
      { name: 'Sushi Lunch Set',      desc: '2pcs bluefin tuna, 2pcs cherry salmon, 2pcs yellowtail, spicy tuna roll, salad, pickle', price: '30' },
      { name: 'Lunch Combo Box',      desc: 'Marinated beef, spicy pork, or grilled cherry salmon with rice, spicy tuna roll, salad, edamame, shrimp tempura, veggie tempura · substitute to snow crab roll +$2.00', price: '28' },
    ],
  },
}

export default function Menu() {
  const [active, setActive] = useState('sushi')
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
        {/* Background photography — submerged beneath the theme */}
        <div className="hero-photo" style={{ backgroundImage: 'url(/hero/hero-menu.jpg)', backgroundPosition: '80% 58%' }} aria-hidden="true" />
        <div className="hero-scrim" aria-hidden="true" />
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

        <p className="text-center font-body text-2xs text-smoke italic max-w-2xl mx-auto leading-relaxed">
          Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions. A 20% gratuity will be added to parties of 6 or more.
        </p>
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
              <h3 className={`label-caps text-gold/60 pb-2 ${sub.note ? 'mb-2' : 'mb-4'}`} style={{ borderBottom: '1px solid rgba(200,169,110,0.1)' }}>
                {sub.label}
              </h3>
              {sub.note && <p className="font-body text-xs text-smoke italic mb-4">{sub.note}</p>}
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

function formatPrice(price) {
  const fmt = (p) => (/^\d/.test(p) ? `$${p}` : p)
  if (price.includes('/')) {
    return price.split('/').map((p) => fmt(p.trim())).join(' / ')
  }
  return fmt(price)
}

function MenuItem({ item }) {
  return (
    <div className="menu-row">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span className="font-display italic text-base text-ivory">{item.name}</span>
          {item.badge && (
            <span
              className="font-body uppercase text-gold/70 flex-shrink-0"
              style={{ fontSize: '0.5rem', letterSpacing: '0.18em', padding: '0.1rem 0.4rem', lineHeight: 1, border: '1px solid rgba(200,169,110,0.28)' }}
            >
              {item.badge}
            </span>
          )}
        </div>
        {item.desc && <p className="font-body text-xs text-stone leading-relaxed">{item.desc}</p>}
      </div>
      <span className="font-body text-sm text-gold font-medium ml-4 flex-shrink-0 whitespace-nowrap">
        {formatPrice(item.price)}
      </span>
    </div>
  )
}
