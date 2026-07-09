import { Reveal } from "./reveal";

const testimonials = [
  {
    quote:
      "Ordered a dress and paid when it arrived — so easy! The quality surprised me for the price.",
    name: "Bea",
    detail: "Repeat customer",
  },
  {
    quote:
      "Finally a shop that gets it. Cute pieces, fair prices, and the COD option means zero worries.",
    name: "Kat",
    detail: "First-time buyer",
  },
  {
    quote:
      "The cherry baby tee is my whole personality now. Messaged them, met up, paid in person. Done in a day!",
    name: "Mika",
    detail: "Best Seller fan",
  },
  {
    quote:
      "Super smooth from DM to delivery. They reserved the piece for me and even followed up after.",
    name: "Ella",
    detail: "Repeat customer",
  },
  {
    quote:
      "My whole barkada orders here now. Affordable really does meet adorable — the name doesn't lie.",
    name: "Joy",
    detail: "Group order queen",
  },
];

function Stars() {
  return (
    <span role="img" aria-label="Rated 5 out of 5 stars" className="flex gap-1 text-cherry-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8-4.2-4.1 5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-16 overflow-hidden bg-blush-100">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="font-script text-2xl text-raspberry-500">sweet words</p>
          <h2 className="mt-1 font-display text-5xl italic text-raspberry-600 sm:text-6xl">
            What our customers say
          </h2>
          <p className="mt-3 text-cocoa-700">Swipe through — real orders, real people.</p>
        </Reveal>
        <Reveal>
          <ul className="-mx-4 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 sm:-mx-6 sm:px-6">
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.name}
                className="min-w-[85%] snap-start sm:min-w-[46%] lg:min-w-[31%]"
              >
                <figure className="flex h-full flex-col border-2 border-cocoa-900 bg-white p-8 shadow-blush">
                  <Stars />
                  <blockquote className="mt-4 grow text-lg leading-relaxed text-cocoa-700">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center border-2 border-cocoa-900 bg-blush-200 font-display text-xl italic text-raspberry-600"
                    >
                      {testimonial.name[0]}
                    </span>
                    <span className="font-semibold text-raspberry-600">
                      {testimonial.name}
                      <span className="block text-sm font-normal text-cocoa-700">
                        {testimonial.detail}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
