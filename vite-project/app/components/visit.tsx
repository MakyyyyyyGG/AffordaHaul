import { Reveal } from "./reveal";

export function MapSection() {
  return (
    <section id="visit" className="grid-paper scroll-mt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] text-plum-600 uppercase">
            Come say hi
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-plum-700 sm:text-5xl">
            Where to find us
          </h2>
          <p className="mt-6 leading-relaxed text-plum-700">
            Prefer to pay in person? Meet us at our pickup spot — try on your
            picks, pay on the spot, and walk away with your haul.
          </p>
          <div className="mt-8 inline-block border border-plum-700/40 bg-cream-50 shadow-puff">
            <p className="bg-plum-700 px-5 py-2 text-xs font-bold tracking-[0.2em] text-cream-50 uppercase">
              Mon–Sat · 10am–6pm
            </p>
            <address className="px-5 py-4 font-display text-xl text-plum-800 not-italic">
              123 Clothing Avenue
              <span className="block font-sans text-sm font-normal tracking-wide text-plum-600">
                Tiwi, Albay, Philippines
              </span>
            </address>
          </div>
          <div className="mt-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=13.4585,123.6805"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-plum-700 px-8 py-3.5 text-xs font-bold tracking-[0.2em] text-cream-50 uppercase transition-colors hover:bg-plum-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
            >
              Get Directions
            </a>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="overflow-hidden rounded-xl border border-plum-700/40 shadow-puff">
            <iframe
              title="Map showing the AffordaHaul meet-up and pickup location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=123.6655%2C13.4485%2C123.6955%2C13.4685&layer=mapnik&marker=13.4585%2C123.6805"
              loading="lazy"
              className="block h-80 w-full sm:h-96"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const stock = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?w=700&q=80&auto=format&fit=crop`;

const strip = [
  stock("1515886657613-9f3515b0c78f"),
  stock("1529139574466-a303027c1d8b"),
  stock("1524504388940-b1c1722653e1"),
  stock("1539109136881-3be0616acf4b"),
  stock("1483985988355-763728e1935b"),
];

export function ImageStrip() {
  return (
    <div aria-hidden="true" className="grid-paper">
      <ul className="grid grid-cols-2 gap-3 px-3 pb-3 sm:grid-cols-3 lg:grid-cols-5">
        {strip.map((src, i) => (
          <li
            key={src}
            className={i === 2 ? "hidden sm:block" : i > 2 ? "hidden lg:block" : undefined}
          >
            <img
              src={src}
              alt=""
              width={600}
              height={800}
              loading="lazy"
              className="aspect-[3/4] w-full rounded-xl object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
