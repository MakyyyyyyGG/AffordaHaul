import { Reveal } from "./reveal";

function Cherries() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 sm:h-16 sm:w-16" aria-hidden="true">
      <path
        d="M27 34 Q30 16 42 8 Q36 22 40 36"
        fill="none"
        stroke="#7fb98e"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <ellipse cx="47" cy="10" rx="9" ry="4.5" fill="#a3d9b2" transform="rotate(-24 47 10)" />
      <circle cx="24" cy="43" r="11" fill="#ec8aa9" />
      <circle cx="42" cy="46" r="10" fill="#d97396" />
      <circle cx="21" cy="40" r="3" fill="#ffffff" opacity="0.6" />
      <circle cx="39" cy="43" r="2.5" fill="#ffffff" opacity="0.6" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden">
      <img
        src="/sections/hero.svg"
        alt=""
        width={1920}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 pt-32 pb-16 sm:px-6 sm:pb-24">
        <Reveal>
          <Cherries />
          <p className="mt-4 -rotate-2 font-script text-3xl text-plum-500 sm:text-4xl">
            clothing avenue
          </p>
          <h1 className="mt-2 font-display text-[clamp(4rem,13vw,10rem)] leading-[0.9] italic text-plum-600">
            afforda haul
          </h1>
          <p className="mt-6 max-w-md text-lg italic text-plum-700">
            Enjoy the ease of Cash on Delivery and in-person payment for all
            items.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#collection"
              className="rounded-full border-2 border-plum-900 bg-plum-800 px-8 py-3 text-center font-bold tracking-wide text-cream-50 uppercase shadow-petal transition-all motion-safe:hover:translate-x-[3px] motion-safe:hover:translate-y-[3px] motion-safe:hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
            >
              View the Collection
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-plum-800 bg-white px-8 py-3 text-center font-bold tracking-wide text-plum-800 uppercase shadow-sticker transition-all motion-safe:hover:translate-x-[3px] motion-safe:hover:translate-y-[3px] motion-safe:hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
            >
              Message Us to Order
            </a>
          </div>
        </Reveal>
        <a
          href="#collection"
          className="absolute right-6 bottom-8 hidden items-center gap-2 rounded-full text-sm font-bold text-plum-600 transition-colors hover:text-plum-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 sm:flex"
        >
          scroll
          <svg viewBox="0 0 24 24" className="h-4 w-4 motion-safe:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}

const perks = ["Cash on Delivery", "In-person payment", "New drops weekly", "Hand-picked pieces"];

export function PromoStrip() {
  const items = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 text-sm font-extrabold tracking-widest uppercase"
    >
      {perks.map((perk) => (
        <li key={perk} className="flex items-center gap-8">
          <span aria-hidden="true">🍒</span>
          {perk}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      aria-label="Store perks"
      className="awning-stripes overflow-hidden border-y-2 border-plum-800 py-3 text-plum-800"
    >
      <div className="marquee-track flex w-max">
        {items(false)}
        {items(true)}
      </div>
    </aside>
  );
}
