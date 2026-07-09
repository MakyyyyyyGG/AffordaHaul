import { Reveal } from "./reveal";

export function MapSection() {
  return (
    <section id="visit" className="scroll-mt-16 border-t-2 border-cocoa-900 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <p className="font-script text-2xl text-raspberry-500">come say hi</p>
          <h2 className="mt-1 font-display text-5xl italic text-raspberry-600 sm:text-6xl">
            Find us on the avenue
          </h2>
          <p className="mt-6 leading-relaxed text-cocoa-700">
            Prefer to pay in person? Meet us at our pickup spot — try on your
            picks, pay on the spot, and walk away with your haul.
          </p>
          <address className="mt-6 border-l-4 border-raspberry-600 pl-4 font-bold text-cocoa-900 not-italic">
            123 Clothing Avenue, Quezon City
            <span className="block font-semibold text-cocoa-700">
              Mon–Sat · 10am–6pm
            </span>
          </address>
          <a
            href="https://www.google.com/maps/search/?api=1&query=14.5995,120.9892"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-2 border-cocoa-900 bg-raspberry-600 px-8 py-3 font-bold tracking-wide text-white uppercase shadow-brutal transition-all motion-safe:hover:translate-x-[3px] motion-safe:hover:translate-y-[3px] motion-safe:hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-raspberry-600"
          >
            Get Directions
          </a>
        </Reveal>
        <Reveal delay={150}>
          <div className="border-2 border-cocoa-900 shadow-blush">
            <iframe
              title="Map showing the AffordaHaul meet-up and pickup location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=120.9742%2C14.5895%2C121.0042%2C14.6095&layer=mapnik&marker=14.5995%2C120.9892"
              loading="lazy"
              className="block h-80 w-full sm:h-96"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const strip = [
  "/gallery/look1.svg",
  "/gallery/look2.svg",
  "/gallery/look3.svg",
  "/gallery/look4.svg",
  "/gallery/look5.svg",
];

export function ImageStrip() {
  return (
    <div aria-hidden="true" className="border-t-2 border-cocoa-900 bg-white">
      <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-5">
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
              className="aspect-[3/4] w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
