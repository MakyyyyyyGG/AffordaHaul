import { useRef } from "react";
import { Reveal } from "./reveal";

interface GalleryItem {
  type: "image" | "video";
  src: string;
  caption: string;
  /** poster image shown before a video plays */
  poster?: string;
}

/**
 * To showcase a video: drop an .mp4 into public/gallery/ and add
 * { type: "video", src: "/gallery/clip1.mp4", poster: "/gallery/look1.svg", caption: "..." }
 */
const items: GalleryItem[] = [
  { type: "image", src: "/gallery/look1.svg", caption: "Bea in the Cherry Baby Tee" },
  { type: "image", src: "/gallery/look2.svg", caption: "Kat's Sunday Linen Dress fit" },
  { type: "image", src: "/gallery/look3.svg", caption: "Mika styling the Pleated Skirt" },
  { type: "image", src: "/gallery/look4.svg", caption: "Ella's meet-up haul" },
  { type: "image", src: "/gallery/look5.svg", caption: "Joy in the Gingham Blouse" },
  { type: "image", src: "/gallery/look6.svg", caption: "Barkada order, delivered COD" },
];

const arrowButtonClasses =
  "flex h-11 w-11 items-center justify-center border-2 border-cocoa-900 bg-white text-cocoa-900 shadow-brutal transition-all hover:text-raspberry-600 motion-safe:hover:translate-x-[2px] motion-safe:hover:translate-y-[2px] motion-safe:hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-raspberry-600";

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
    <section id="gallery" className="scroll-mt-16 overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-script text-2xl text-raspberry-500">spotted on the avenue</p>
              <h2 className="mt-1 font-display text-5xl italic text-raspberry-600 sm:text-6xl">
                Worn by You
              </h2>
              <p className="mt-3 text-cocoa-700">
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
            className="-mx-4 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-raspberry-600 sm:-mx-6 sm:px-6"
          >
            {items.map((item) => (
              <li
                key={item.src}
                className="min-w-[72%] snap-start sm:min-w-[42%] lg:min-w-[23%]"
              >
                <figure className="border-2 border-cocoa-900 bg-white shadow-blush">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-[3/4] w-full border-b-2 border-cocoa-900 object-cover"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.caption}
                      width={600}
                      height={800}
                      loading="lazy"
                      className="aspect-[3/4] w-full border-b-2 border-cocoa-900 object-cover"
                    />
                  )}
                  <figcaption className="p-4 text-sm font-bold tracking-wide text-cocoa-900 uppercase">
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
