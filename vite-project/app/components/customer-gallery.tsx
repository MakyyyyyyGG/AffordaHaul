import { useRef } from "react";
import { Reveal } from "./reveal";

interface GalleryItem {
  type: "image" | "video";
  src: string;
  caption: string;
  /** poster image shown before a video plays */
  poster?: string;
}

/** Unsplash stock photos used as gallery fillers until real customer shots are ready. */
const stock = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?w=900&q=80&auto=format&fit=crop`;

/**
 * To showcase a video: drop an .mp4 into public/gallery/ and add
 * { type: "video", src: "/gallery/clip1.mp4", poster: "...", caption: "..." }
 */
const items: GalleryItem[] = [
  { type: "image", src: stock("1515886657613-9f3515b0c78f"), caption: "Bea in the Cherry Baby Tee" },
  { type: "image", src: stock("1529139574466-a303027c1d8b"), caption: "Kat's Sunday Linen Dress fit" },
  { type: "image", src: stock("1524504388940-b1c1722653e1"), caption: "Mika styling the Pleated Skirt" },
  { type: "image", src: stock("1539109136881-3be0616acf4b"), caption: "Ella's meet-up haul" },
  { type: "image", src: stock("1483985988355-763728e1935b"), caption: "Joy in the Gingham Blouse" },
  { type: "image", src: stock("1554568218-0f1715e72254"), caption: "Barkada order, delivered COD" },
];

const arrowButtonClasses =
  "flex h-11 w-11 items-center justify-center rounded-full border-2 border-plum-800 bg-white text-plum-800 shadow-sticker transition-all hover:text-plum-500 motion-safe:hover:translate-x-[2px] motion-safe:hover:translate-y-[2px] motion-safe:hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600";

export function CustomerGallery() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : 320;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="scroll-mt-16 overflow-hidden bg-cream-50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-script text-2xl text-plum-500">spotted on the avenue</p>
              <h2 className="mt-1 font-display text-5xl italic text-plum-600 sm:text-6xl">
                Worn by You
              </h2>
              <p className="mt-3 text-plum-700">
                Real customers, real fits — tag us to get featured.
              </p>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => scrollByCard(-1)} className={arrowButtonClasses}>
                <span className="sr-only">Previous looks</span>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>
              <button type="button" onClick={() => scrollByCard(1)} className={arrowButtonClasses}>
                <span className="sr-only">Next looks</span>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <ul
            ref={trackRef}
            tabIndex={0}
            role="region"
            aria-label="Customer photos and videos"
            className="-mx-4 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 sm:-mx-6 sm:px-6"
          >
            {items.map((item) => (
              <li
                key={item.src}
                className="min-w-[72%] snap-start sm:min-w-[42%] lg:min-w-[23%]"
              >
                <figure className="overflow-hidden rounded-[2rem] border-2 border-plum-800 bg-white shadow-petal">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-[3/4] w-full border-b-2 border-plum-800 object-cover"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.caption}
                      width={600}
                      height={800}
                      loading="lazy"
                      className="aspect-[3/4] w-full border-b-2 border-plum-800 object-cover"
                    />
                  )}
                  <figcaption className="p-4 text-sm font-extrabold tracking-wide text-plum-800 uppercase">
                    {item.caption}
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
