import { Reveal } from "./reveal";

export function BrandStory() {
  return (
    <section id="about" className="scroll-mt-16 bg-cream-100">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-2 md:gap-16">
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80&auto=format&fit=crop"
            alt="Hand-picked clothing pieces laid out with accessories"
            width={800}
            height={900}
            loading="lazy"
            className="aspect-[8/9] w-full rounded-t-full object-cover shadow-puff"
          />
        </Reveal>
        <Reveal delay={150}>
          <p className="text-xs font-bold tracking-[0.3em] text-plum-600 uppercase">
            Our story
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-plum-700 sm:text-5xl">
            Where affordable meets adorable
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-plum-700">
            AffordaHaul started with a simple idea: cute, quality fits
            shouldn't cost a fortune. Every piece on our avenue is
            hand-picked, priced kindly, and ready to become your new
            favorite.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-plum-700">
            No checkout stress, no hidden fees — browse the collection,
            message us what you love, and pay cash on delivery or in person.
            Shopping the way it should be: sweet and simple.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
