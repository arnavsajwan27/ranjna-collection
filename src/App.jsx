import { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, X, MessageCircle, Send, Check, Mail } from 'lucide-react'
import { placements, gallery, categoriesFor } from './photos.js'

gsap.registerPlugin(ScrollTrigger)

// Swap in the real number when Ranjna provides it (digits only, country code first)
const WHATSAPP_NUMBER = '10000000000'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello Ranjna Collection — I would love to know more about a piece I saw on your website.'
)}`

/* ————————————————————————— Ornaments ————————————————————————— */

function InstagramIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function LotusMark({ className = '' }) {
  return (
    <svg viewBox="0 0 48 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 4c-3.4 8-11 12.5-11 20.5C13 31 17.8 36 24 36s11-5 11-11.5C35 16.5 27.4 12 24 4z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M24 36c-8-3.2-9.5-12.5-17.5-12.5 4.4 6.5 3 16 9.5 19M24 36c8-3.2 9.5-12.5 17.5-12.5-4.4 6.5-3 16-9.5 19"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}

function OrnamentRule({ light = false }) {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <div className="hairline flex-1" />
      <LotusMark className={`h-5 w-6 ${light ? 'text-gold-bright' : 'text-gold'}`} />
      <div className="hairline flex-1" />
    </div>
  )
}

function WaxSeal() {
  return (
    <svg viewBox="0 0 96 96" className="wax-seal h-20 w-20 md:h-24 md:w-24" aria-hidden="true">
      <path
        d="M48 6c6 0 8 4 14 4s8-3 13 0 3 8 8 13 7 5 7 11-4 8-4 14 3 8 0 13-8 3-13 8-5 7-11 7-8-4-14-4-8 3-13 0-3-8-8-13-7-5-7-11 4-8 4-14-3-8 0-13 8-3 13-8 5-7 11-7z"
        fill="#7A2733"
      />
      <circle cx="48" cy="48" r="27" fill="none" stroke="#E3C08A" strokeWidth="1.2" opacity="0.7" />
      <text
        x="48"
        y="58"
        textAnchor="middle"
        fontFamily="Bodoni Moda, serif"
        fontSize="30"
        fill="#E3C08A"
      >
        R
      </text>
    </svg>
  )
}

/* ————————————————————————— Gold dust ————————————————————————— */

function GoldDust({ count = 24 }) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2.5 + Math.random() * 4,
        fall: 7 + Math.random() * 7,
        sway: 2 + Math.random() * 3,
        delay: Math.random() * 10,
      })),
    [count]
  )
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {motes.map((m) => (
        <span
          key={m.id}
          className="dust"
          style={{
            left: `${m.left}%`,
            width: m.size,
            height: m.size,
            animationDuration: `${m.fall}s, ${m.sway}s`,
            animationDelay: `${m.delay}s, ${m.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ————————————————————————— Navbar ————————————————————————— */

const NAV_LINKS = [
  { href: '#story', label: 'Our Story' },
  { href: '#traditional', label: 'Traditional' },
  { href: '#american-diamond', label: 'American Diamond' },
  { href: '#inquire', label: 'Inquire' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed left-4 right-4 top-4 z-50 md:left-8 md:right-8">
        <nav className="nav-glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 md:px-7">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={import.meta.env.BASE_URL + 'brand/logo-monogram.png'}
              alt="Ranjna Collection monogram"
              className="h-9 w-auto mix-blend-multiply"
            />
            <span className="flex flex-col leading-none max-md:flex md:hidden lg:flex">
              <span className="font-display text-base font-semibold tracking-[0.26em] text-garnet">
                RANJNA
              </span>
              <span className="label mt-1 text-[8px] text-gold">Collection</span>
            </span>
          </a>
          <div className="hidden items-center gap-5 md:flex lg:gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label whitespace-nowrap text-ink/70 transition-colors duration-200 hover:text-garnet"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="label rounded-full bg-garnet px-5 py-2.5 text-ivory transition-colors duration-300 hover:bg-garnet-deep"
            >
              WhatsApp
            </a>
          </div>
          <button
            className="p-1 text-garnet md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-garnet-night px-8 py-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-semibold text-gold-bright">Ranjna</span>
            <button
              className="p-1 text-ivory"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <div className="mt-16 flex flex-col gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-medium text-ivory transition-colors hover:text-gold-bright"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <OrnamentRule light />
            <p className="label mt-6 text-center text-gold-bright/70">
              Jewellery rooted in heritage
            </p>
          </div>
        </div>
      )}
    </>
  )
}

/* ————————————————————————— Hero ————————————————————————— */

function Hero() {
  return (
    <section id="top" className="relative flex min-h-dvh items-end overflow-hidden">
      {/* Full-bleed cover photo; headline rests on an ivory mist at the base */}
      <div className="absolute inset-0">
        <img
          src={placements.hero.src}
          alt={placements.hero.alt}
          className="hero-img h-full w-full object-cover"
          style={{ objectPosition: placements.hero.position }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ivory/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[56dvh] bg-gradient-to-t from-ivory via-ivory/85 to-transparent md:h-[46dvh] md:via-ivory/75" />
      </div>

      <GoldDust />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-40 md:px-8 md:pb-20">
        <p className="hero-line label text-garnet [text-shadow:0_1px_8px_rgba(245,239,226,0.95)]">
          Traditional & American Diamond Jewellery
        </p>
        <h1 className="hero-line mt-4 font-display text-5xl font-semibold leading-[0.95] text-ink [filter:drop-shadow(0_0_14px_rgba(245,239,226,0.85))] md:mt-5 md:text-7xl lg:text-8xl">
          <span className="gold-foil-deep uppercase tracking-[0.05em]">Ranjna</span>
          <span className="mt-1 block text-3xl font-medium italic text-garnet md:text-4xl lg:text-5xl">
            Collection
          </span>
        </h1>
        <div className="hero-line hairline mt-6 max-w-[180px] md:mt-8 md:max-w-xs" />
        <p className="hero-line mt-6 max-w-sm text-base font-light leading-relaxed text-ink/85 md:mt-8 md:max-w-md md:text-lg">
          Heirloom-worthy pieces for the women who carry home with them — wherever in the world
          they wear it.
        </p>
        <div className="hero-line mt-7 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
          <a
            href="#traditional"
            className="label rounded-full bg-garnet px-6 py-3.5 text-ivory transition-colors duration-300 hover:bg-garnet-deep md:px-8 md:py-4"
          >
            Explore the Collections
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="label flex items-center gap-2 rounded-full border border-gold px-6 py-3.5 text-garnet transition-colors duration-300 hover:bg-gold/10 md:px-8 md:py-4"
          >
            <MessageCircle className="h-4 w-4" />
            Inquire on WhatsApp
          </a>
        </div>
      </div>

      <div className="hero-line absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-12 w-px animate-pulse bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
    </section>
  )
}

/* ————————————————————————— Story ————————————————————————— */

function Story() {
  return (
    <section id="story" className="lotus-bg relative scroll-mt-24 py-24 md:py-36">
      <div className="absolute inset-0 bg-ivory/[0.93]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-8">
        <div>
          <p data-reveal className="label text-gold">
            Our Story
          </p>
          <h2 data-reveal className="mt-4 font-display text-4xl font-semibold text-garnet md:text-6xl">
            A thread back <em className="italic">home</em>
          </h2>
          <div data-reveal className="hairline mt-8 max-w-[120px]" />
          <p data-reveal className="mt-8 text-lg font-light leading-relaxed text-ink/80">
            Ranjna began with a jewellery box — the kind every Indian household keeps, lined in
            silk, opened on wedding mornings and festival evenings. Every piece in our collection
            is chosen the way those boxes were filled: slowly, knowingly, and always with the
            women who will wear them in mind.
          </p>
          <p data-reveal className="mt-5 text-lg font-light leading-relaxed text-ink/80">
            From classic jhumkas and kundan sets to American diamond pieces made for everyday
            light, each design carries the craft of home to wherever you are in the world.
          </p>
          <ul data-reveal className="mt-10 space-y-4">
            {['Handpicked, piece by piece', 'Crafted to be worn, not stored', 'Sent with care, near or far'].map(
              (line) => (
                <li key={line} className="flex items-center gap-4">
                  <LotusMark className="h-4 w-5 shrink-0 text-gold" />
                  <span className="label text-ink/70">{line}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <figure data-drape className="arch-frame arch-double relative mx-auto w-full max-w-md">
          <img
            src={placements.story.src}
            alt={placements.story.alt}
            className="aspect-[3/4] w-full object-cover"
            style={{ objectPosition: placements.story.position }}
            loading="lazy"
          />
          <div className="drape-panel bg-ivory" />
        </figure>
      </div>
    </section>
  )
}

/* ————————————————————————— Film band ————————————————————————— */

function FilmBand() {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section className="relative overflow-hidden bg-garnet-night">
      <div className="hairline" />
      {reduceMotion ? (
        <img
          src={import.meta.env.BASE_URL + 'images/gold-earchain.jpg'}
          alt="Model in a gold sari wearing a jhumka with pearl ear chains, seen in profile among palace arches"
          className="h-[56dvh] w-full object-cover md:h-[80dvh]"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={import.meta.env.BASE_URL + 'images/gold-earchain.jpg'}
          src={import.meta.env.BASE_URL + 'video/ranjna-film.mp4'}
          className="h-[56dvh] w-full object-cover md:h-[80dvh]"
        />
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-1 flex items-end justify-between px-6 pb-6 md:px-10 md:pb-8">
        <p className="label text-[10px] text-ivory/80 [text-shadow:0_1px_8px_rgba(46,15,21,0.8)]">
          Ranjna · In Motion
        </p>
        <p className="label hidden text-[10px] text-gold-bright/80 [text-shadow:0_1px_8px_rgba(46,15,21,0.8)] md:block">
          Pearl ear chains, worn the old way
        </p>
      </div>
      <div className="hairline" />
    </section>
  )
}

/* ————————————————————————— Gallery pieces ————————————————————————— */

function PhotoCard({ photo, dark }) {
  return (
    <figure data-reveal className="jewel-card group relative">
      <div data-drape className="arch-frame relative">
        <img
          src={photo.src}
          alt={photo.caption ?? photo.category}
          className="aspect-[3/4] w-full object-cover"
          style={photo.position ? { objectPosition: photo.position } : undefined}
          loading="lazy"
        />
        <div className={`drape-panel ${dark ? 'bg-garnet-night' : 'bg-ivory'}`} />
        <div className="trace" />
      </div>
      <figcaption className="mt-4 text-center">
        <p className={`font-display text-lg italic ${dark ? 'text-ivory/90' : 'text-ink/85'}`}>
          {photo.caption}
        </p>
        <p className={`label mt-1 text-[10px] ${dark ? 'text-gold-bright/70' : 'text-gold'}`}>
          {photo.category}
        </p>
      </figcaption>
    </figure>
  )
}

function EmptySlot({ dark, category }) {
  return (
    <div data-reveal className="flex flex-col">
      <div
        className={`arch-outline flex aspect-[3/4] w-full flex-col items-center justify-center gap-4 ${
          dark ? 'bg-white/[0.03]' : 'bg-parchment/60'
        }`}
      >
        <LotusMark className={`h-8 w-10 ${dark ? 'text-gold-bright/50' : 'text-gold/60'}`} />
        <p className={`label text-[10px] ${dark ? 'text-ivory/40' : 'text-muted/70'}`}>
          Awaiting photograph
        </p>
      </div>
      <p className={`label mt-4 text-center text-[10px] ${dark ? 'text-gold-bright/50' : 'text-gold/70'}`}>
        {category} · arriving soon
      </p>
    </div>
  )
}

function SubcategoryRow({ section, category, dark }) {
  const photos = gallery.filter((p) => p.section === section && p.category === category)
  return (
    <div className="mt-16 first:mt-0">
      <div className="flex items-baseline gap-6">
        <h3
          data-reveal
          className={`font-display text-3xl font-medium md:text-4xl ${
            dark ? 'text-ivory' : 'text-garnet'
          }`}
        >
          {category}
        </h3>
        <div className="hairline flex-1" />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) =>
          p.src ? (
            <PhotoCard key={p.id} photo={p} dark={dark} />
          ) : (
            <EmptySlot key={p.id} dark={dark} category={category} />
          )
        )}
      </div>
    </div>
  )
}

/* ————————————————————————— Collection sections ————————————————————————— */

function TraditionalSection() {
  return (
    <section
      id="traditional"
      className="relative scroll-mt-24 overflow-hidden bg-garnet-night py-24 text-ivory md:py-36"
    >
      {/* candlelight glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(1100px 520px at 70% 0%, rgba(176,141,79,0.16), transparent 65%), radial-gradient(900px 500px at 10% 100%, rgba(87,28,38,0.7), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <figure data-drape className="arch-frame arch-double relative order-2 mx-auto w-full max-w-md md:order-1">
            <img
              data-parallax
              src={placements.traditionalIntro.src}
              alt={placements.traditionalIntro.alt}
              className="aspect-[3/4] w-full scale-105 object-cover"
              style={{ objectPosition: placements.traditionalIntro.position }}
              loading="lazy"
            />
            <div className="drape-panel bg-garnet-night" />
          </figure>
          <div className="order-1 md:order-2">
            <p data-reveal className="label text-gold-bright">
              The First Collection
            </p>
            <h2 data-reveal className="mt-4 font-display text-5xl font-semibold md:text-7xl">
              <span className="gold-foil">Traditional</span>
            </h2>
            <div data-reveal className="hairline mt-8 max-w-[120px]" />
            <p data-reveal className="mt-8 text-lg font-light leading-relaxed text-ivory/80">
              Jhumkas that swing the way they did in your mother's photographs. Kundan and pearl,
              enamel and antique gold — pieces made for candlelight, ceremony, and the moments
              that become family stories.
            </p>
            <p data-reveal className="label mt-8 text-gold-bright/80">
              Earrings · Bangles · Sets
            </p>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          {categoriesFor('traditional').map((cat) => (
            <SubcategoryRow key={cat} section="traditional" category={cat} dark />
          ))}
        </div>
      </div>
    </section>
  )
}

function AmericanDiamondSection() {
  return (
    <section id="american-diamond" className="relative scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <p data-reveal className="label text-rani">
              The Second Collection
            </p>
            <h2 data-reveal className="mt-4 font-display text-5xl font-semibold text-garnet md:text-7xl">
              American <em className="italic">Diamond</em>
            </h2>
            <div data-reveal className="hairline mt-8 max-w-[120px]" />
            <p data-reveal className="mt-8 text-lg font-light leading-relaxed text-ink/80">
              Brilliance made for daylight — office mornings, dinner evenings, and every ordinary
              day that deserves a little sparkle. Delicate settings, modern lines, the same
              Ranjna soul.
            </p>
            <p data-reveal className="label mt-8 text-gold">
              Earrings · Bracelets · Sets
            </p>
          </div>
          <figure data-drape className="arch-frame arch-double relative mx-auto w-full max-w-md">
            <img
              src={placements.americanDiamondIntro.src}
              alt={placements.americanDiamondIntro.alt}
              className="aspect-[3/4] w-full object-cover"
              style={{ objectPosition: placements.americanDiamondIntro.position }}
              loading="lazy"
            />
            <div className="drape-panel bg-ivory" />
          </figure>
        </div>

        <div className="mt-24 md:mt-32">
          {categoriesFor('american-diamond').map((cat) => (
            <SubcategoryRow key={cat} section="american-diamond" category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ————————————————————————— Inquire ————————————————————————— */

function Inquire() {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status !== 'idle') return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1400)
  }

  return (
    <section
      id="inquire"
      className="relative scroll-mt-24 overflow-hidden bg-garnet py-24 text-ivory md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(900px 480px at 50% -10%, rgba(227,192,138,0.14), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
        <div data-reveal className="flex justify-center">
          <WaxSeal />
        </div>
        <p data-reveal className="label mt-8 text-gold-bright">
          Sealed with care
        </p>
        <h2 data-reveal className="mt-4 font-display text-4xl font-semibold md:text-6xl">
          Find <em className="italic">your</em> piece
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-ivory/80">
          Tell us what caught your eye — or describe the occasion, and we'll suggest pieces from
          the collection. We reply within a day.
        </p>

        <div data-reveal className="mt-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="label inline-flex items-center gap-3 rounded-full bg-gold-bright px-9 py-4 text-garnet-night transition-colors duration-300 hover:bg-ivory"
          >
            <MessageCircle className="h-4 w-4" />
            Message us on WhatsApp
          </a>
          <p className="label mt-4 text-[10px] text-ivory/50">or write to us below</p>
        </div>

        <form data-reveal onSubmit={handleSubmit} className="mt-10 text-left">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              type="text"
              placeholder="Your name"
              className="rounded-xl border border-gold/40 bg-white/5 px-5 py-4 font-light text-ivory placeholder:text-ivory/40 focus:border-gold-bright focus:outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="rounded-xl border border-gold/40 bg-white/5 px-5 py-4 font-light text-ivory placeholder:text-ivory/40 focus:border-gold-bright focus:outline-none"
            />
          </div>
          <select
            defaultValue=""
            className="mt-4 w-full rounded-xl border border-gold/40 bg-white/5 px-5 py-4 font-light text-ivory/80 focus:border-gold-bright focus:outline-none [&>option]:text-ink"
          >
            <option value="" disabled>
              What are you looking for?
            </option>
            <option>Traditional — Earrings</option>
            <option>Traditional — Bangles</option>
            <option>Traditional — Sets</option>
            <option>American Diamond — Earrings</option>
            <option>American Diamond — Bracelets</option>
            <option>American Diamond — Sets</option>
            <option>Something for an occasion — advise me</option>
          </select>
          <textarea
            rows={4}
            placeholder="Tell us about the piece or the occasion…"
            className="mt-4 w-full rounded-xl border border-gold/40 bg-white/5 px-5 py-4 font-light text-ivory placeholder:text-ivory/40 focus:border-gold-bright focus:outline-none"
          />
          <button
            type="submit"
            disabled={status !== 'idle'}
            className="label mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-gold-bright py-4 text-garnet-night transition-all duration-300 hover:bg-ivory disabled:opacity-80 md:w-auto md:px-12"
          >
            {status === 'idle' && (
              <>
                <Send className="h-4 w-4" /> Send inquiry
              </>
            )}
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && (
              <>
                <Check className="h-4 w-4" /> Received — we'll be in touch
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

/* ————————————————————————— Footer ————————————————————————— */

function Footer() {
  return (
    <footer className="bg-cocoa py-16 text-ivory/70">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-display text-3xl font-semibold text-gold-bright">Ranjna</p>
            <p className="font-devanagari mt-1 text-sm text-gold">रंजना</p>
            <p className="label mt-4 text-[10px] text-ivory/50">Jewellery rooted in heritage</p>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label text-ivory/60 transition-colors hover:text-gold-bright"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-gold/40 p-3 text-gold-bright transition-colors hover:bg-gold/10"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@ranjnacollection.com"
                aria-label="Email"
                className="rounded-full border border-gold/40 p-3 text-gold-bright transition-colors hover:bg-gold/10"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="label text-[10px] text-ivory/40">Ships worldwide · US & UK inquiries welcome</p>
          </div>
        </div>
        <div className="hairline mt-12 opacity-40" />
        <p className="label mt-8 text-center text-[10px] text-ivory/40">
          © {new Date().getFullYear()} Ranjna Collection · Crafted with heritage
        </p>
      </div>
    </footer>
  )
}

/* ————————————————————————— App ————————————————————————— */

export default function App() {
  const rootRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Hero entrance — one orchestrated moment, then calm
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        '.hero-img',
        { scale: 1.07 },
        { scale: 1, duration: 2.2, ease: 'power2.out' },
        0
      ).fromTo(
        '.hero-line',
        { y: 44, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.13 },
        0.25
      )

      // Scroll reveals — silk-slow rises
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 86%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 1.05,
            stagger: 0.12,
            ease: 'power3.out',
          }),
      })

      // Drape unveils — cloth drawn off the frame
      document.querySelectorAll('[data-drape] .drape-panel').forEach((panel) => {
        gsap.to(panel, {
          scaleY: 0,
          transformOrigin: 'top center',
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: panel.parentElement, start: 'top 78%', once: true },
        })
      })

      // Gentle parallax on the jewel-box image
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        )
      })
    })

    // Reduced motion: show everything immediately
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('[data-reveal], .hero-line', { opacity: 1, y: 0 })
      gsap.set('.drape-panel', { scaleY: 0 })
    })

    return () => mm.revert()
  }, [])

  return (
    <div ref={rootRef} className="grain">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <FilmBand />
        <TraditionalSection />
        <AmericanDiamondSection />
        <Inquire />
      </main>
      <Footer />
    </div>
  )
}
