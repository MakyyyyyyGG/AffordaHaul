import { useState } from "react";
import { products, type Product } from "../data/products";
import { Reveal } from "./reveal";

function WishlistButton({ productName }: { productName: string }) {
  const [saved, setSaved] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={() => setSaved((s) => !s)}
      className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-plum-800 bg-white text-plum-800 transition-colors hover:text-plum-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
    >
      <span className="sr-only">Save {productName} to wishlist</span>
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill={saved ? "#ec8aa9" : "none"}
        stroke={saved ? "#ec8aa9" : "currentColor"}
        strokeWidth="2"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 21C7 16.5 3 13.2 3 9.1 3 6.3 5.2 4 8 4c1.6 0 3.1.8 4 2 .9-1.2 2.4-2 4-2 2.8 0 5 2.3 5 5.1 0 4.1-4 7.4-9 11.9z" />
      </svg>
    </button>
  );
}

function ProductCard({ product, preferredColor }: { product: Product; preferredColor?: string }) {
  const preferredIndex = product.colors.findIndex((c) => c.name === preferredColor);
  const [selectedIndex, setSelectedIndex] = useState(preferredIndex === -1 ? 0 : preferredIndex);
  const selected = product.colors[selectedIndex];

  return (
    <article className="group overflow-hidden rounded-[2rem] border-2 border-plum-800 bg-white shadow-lilac">
      <div className="relative overflow-hidden border-b-2 border-plum-800">
        <img
          src={selected.image}
          alt={`${product.name} in ${selected.name}`}
          width={600}
          height={750}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
        />
        {product.tag && (
          <p className="absolute top-3 left-3 rounded-full border-2 border-plum-800 bg-peach-200 px-3 py-1 text-xs font-extrabold tracking-wide text-plum-900 uppercase">
            {product.tag}
          </p>
        )}
        <WishlistButton productName={product.name} />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-extrabold tracking-widest text-plum-800 uppercase">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center gap-2">
          {product.colors.map((color, i) => (
            <button
              key={color.name}
              type="button"
              aria-pressed={i === selectedIndex}
              onClick={() => setSelectedIndex(i)}
              className={`h-6 w-6 rounded-full border-2 border-plum-800 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 ${
                i === selectedIndex ? "scale-110 ring-2 ring-plum-500 ring-offset-2" : ""
              }`}
              style={{ backgroundColor: color.hex }}
            >
              <span className="sr-only">Show {product.name} in {color.name}</span>
            </button>
          ))}
          <span className="ml-1 text-xs font-bold tracking-wide text-plum-600 uppercase">
            {selected.name}
          </span>
        </div>
      </div>
    </article>
  );
}

const filterColors = (() => {
  const seen = new Map<string, string>();
  for (const product of products) {
    for (const color of product.colors) {
      if (!seen.has(color.name)) seen.set(color.name, color.hex);
    }
  }
  return [...seen.entries()].map(([name, hex]) => ({ name, hex }));
})();

const chipClasses = (active: boolean) =>
  `flex items-center gap-2 rounded-full border-2 border-plum-800 px-4 py-2 text-xs font-extrabold tracking-widest uppercase transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 ${
    active
      ? "translate-x-[2px] translate-y-[2px] bg-plum-800 text-cream-50 shadow-none"
      : "bg-white text-plum-800 shadow-sticker motion-safe:hover:translate-x-[2px] motion-safe:hover:translate-y-[2px] motion-safe:hover:shadow-none"
  }`;

export function ProductShowcase() {
  const [filter, setFilter] = useState<string | null>(null);
  const visible = filter
    ? products.filter((p) => p.colors.some((c) => c.name === filter))
    : products;

  return (
    <section id="collection" className="scroll-mt-16 bg-cream-50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-plum-800/20 pb-4">
            <h2 className="text-sm font-extrabold tracking-[0.25em] text-plum-800 uppercase">
              Our New Arrivals
            </h2>
            <a
              href="#contact"
              className="text-sm font-extrabold tracking-[0.25em] text-plum-800 uppercase underline decoration-2 underline-offset-4 transition-colors hover:text-plum-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
            >
              View All
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-6 flex flex-wrap items-center gap-3" role="group" aria-label="Filter products by color">
            <button
              type="button"
              aria-pressed={filter === null}
              onClick={() => setFilter(null)}
              className={chipClasses(filter === null)}
            >
              All
            </button>
            {filterColors.map((color) => (
              <button
                key={color.name}
                type="button"
                aria-pressed={filter === color.name}
                onClick={() => setFilter(color.name)}
                className={chipClasses(filter === color.name)}
              >
                <span
                  aria-hidden="true"
                  className="h-3.5 w-3.5 rounded-full border border-plum-800"
                  style={{ backgroundColor: color.hex }}
                />
                {color.name}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, i) => (
            <Reveal key={`${product.id}-${filter ?? "all"}`} delay={(i % 3) * 100}>
              <ProductCard product={product} preferredColor={filter ?? undefined} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const categories = [
  {
    label: "Tops & Dresses",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80&auto=format&fit=crop",
  },
  {
    label: "Bottoms & Sets",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000&q=80&auto=format&fit=crop",
  },
];

export function CategoryTiles() {
  return (
    <section aria-label="Categories" className="bg-cream-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-24 sm:px-6 md:grid-cols-2">
        {categories.map((category, i) => (
          <Reveal key={category.label} delay={i * 120}>
            <a
              href="#collection"
              className="group relative block overflow-hidden rounded-t-[10rem] rounded-b-[2rem] border-2 border-plum-800 shadow-petal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
            >
              <img
                src={category.image}
                alt=""
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105 md:aspect-[4/4.5]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6">
                <span className="font-display text-3xl italic text-white sm:text-4xl">
                  {category.label}
                </span>
                <span className="mt-1 block text-sm font-extrabold tracking-widest text-petal-100 uppercase transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                  Explore →
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
