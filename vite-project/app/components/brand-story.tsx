import { Reveal } from "./reveal";

export function BrandStory() {
  return (
    <section id="about" className="scroll-mt-16 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-2 md:gap-16">
        <Reveal>
          <img
            src="/sections/story.svg"
            alt="Soft pink illustration with the AffordaHaul cherry motif"
            width={800}
            height={900}
            loading="lazy"
            className="aspect-[8/9] w-full border-2 border-cocoa-900 object-cover shadow-blush"
          />
        </Reveal>
        <Reveal delay={150}>
          <p className="font-script text-2xl text-raspberry-500">our story</p>
          <h2 className="mt-1 font-display text-5xl italic text-raspberry-600 sm:text-6xl">
            Where affordable meets adorable
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cocoa-700">
            AffordaHaul started with a simple idea: cute, quality fits
            shouldn't cost a fortune. Every piece on our avenue is
            hand-picked, priced kindly, and ready to become your new
            favorite.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-cocoa-700">
            No checkout stress, no hidden fees — browse the collection,
            message us what you love, and pay cash on delivery or in person.
            Shopping the way it should be: sweet and simple.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
