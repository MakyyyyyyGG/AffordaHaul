import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="grid-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 md:grid-cols-[1.1fr_1fr] md:gap-16 md:pt-24 md:pb-28">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] text-plum-600 uppercase">
            Clothing avenue · Tiwi, Albay
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.75rem,7vw,4.75rem)] leading-[1.05] font-medium text-plum-700">
            Cute finds,
            <br />
            kind prices.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-plum-700">
            Hand-picked, affordable fashion — order with Cash on Delivery or
            pay in person. No checkout stress, ever.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#collection"
              className="bg-plum-700 px-8 py-3.5 text-center text-xs font-bold tracking-[0.2em] text-cream-50 uppercase transition-colors hover:bg-plum-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
            >
              View the Collection
            </a>
            <a
              href="#contact"
              className="border border-plum-700 bg-cream-50 px-8 py-3.5 text-center text-xs font-bold tracking-[0.2em] text-plum-700 uppercase transition-colors hover:bg-petal-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
            >
              Message Us to Order
            </a>
          </div>

          <div className="mt-12 inline-block border border-plum-700/40 bg-cream-50 shadow-puff">
            <p className="bg-plum-700 px-5 py-2 text-xs font-bold tracking-[0.2em] text-cream-50 uppercase">
              This week · New drop
            </p>
            <p className="px-5 py-4 font-display text-xl text-plum-800">
              Fresh arrivals every Friday
              <span className="mt-1 block font-sans text-sm font-normal tracking-wide text-plum-600">
                COD & in-person payment · Mon–Sat, 10am–6pm
              </span>
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1000&q=80&auto=format&fit=crop"
            alt="Curated rack of pastel clothing at the AffordaHaul shop"
            width={800}
            height={1000}
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-t-full border border-plum-700/40 object-cover shadow-puff"
          />
        </Reveal>
      </div>
    </section>
  );
}

const perks = ["Cash on Delivery", "In-person payment", "New drops weekly", "Hand-picked pieces"];

export function PromoStrip() {
  const items = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 text-xs font-bold tracking-[0.25em] uppercase"
    >
      {perks.map((perk) => (
        <li key={perk} className="flex items-center gap-10">
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-plum-700" aria-hidden="true">
            <path d="M6 0l1.6 4.4L12 6 7.6 7.6 6 12 4.4 7.6 0 6l4.4-1.6z" />
          </svg>
          {perk}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      aria-label="Store perks"
      className="overflow-hidden border-y border-plum-700/30 bg-lilac-200 py-3 text-plum-800"
    >
      <div className="marquee-track flex w-max">
        {items(false)}
        {items(true)}
      </div>
    </aside>
  );
}
