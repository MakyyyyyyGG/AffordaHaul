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
      className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/90 text-plum-700 shadow-puff transition-colors hover:text-plum-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
    >
      <span className="sr-only">Save {productName} to wishlist</span>
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
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
    <article className="group text-center">
      <div className="relative overflow-hidden rounded-xl bg-petal-100">
        <img
          src={selected.image}
          alt={`${product.name} in ${selected.name}`}
          width={600}
          height={750}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
        />
        {product.tag && (
          <p className="absolute top-3 left-3 bg-plum-700 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.2em] text-cream-50 uppercase">
            {product.tag}
          </p>
        )}
        <WishlistButton productName={product.name} />
      </div>
      <h3 className="mt-5 font-display text-2xl font-medium text-plum-800">{product.name}</h3>
      <p className="mt-1 text-xs font-bold tracking-[0.2em] text-plum-600 uppercase">
        {selected.name}
      </p>
      <p className="mt-2 font-display text-lg text-plum-700">{product.price}</p>
      <div className="mt-3 flex items-center justify-center gap-2">
        {product.colors.map((color, i) => (
          <button
            key={color.name}
            type="button"
            aria-pressed={i === selectedIndex}
            onClick={() => setSelectedIndex(i)}
            className={`h-5 w-5 rounded-full border transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 ${
              i === selectedIndex
                ? "border-plum-700 ring-1 ring-plum-700 ring-offset-2 ring-offset-cream-50"
                : "border-plum-700/40 hover:border-plum-700"
            }`}
            style={{ backgroundColor: color.hex }}
          >
            <span className="sr-only">Show {product.name} in {color.name}</span>
          </button>
        ))}
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
  `flex items-center gap-2 border px-4 py-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 ${
    active
      ? "border-plum-700 bg-plum-700 text-cream-50"
      : "border-plum-700/40 bg-transparent text-plum-700 hover:border-plum-700"
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
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-plum-600 uppercase">
              Fresh off the rack
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-plum-700 sm:text-5xl">
              New Arrivals
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            role="group"
            aria-label="Filter products by color"
          >
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
                  className="h-3 w-3 rounded-full border border-plum-700/40"
                  style={{ backgroundColor: color.hex }}
                />
                {color.name}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, i) => (
            <Reveal key={`${product.id}-${filter ?? "all"}`} delay={(i % 3) * 100}>
              <ProductCard product={product} preferredColor={filter ?? undefined} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-block bg-plum-700 px-8 py-3.5 text-xs font-bold tracking-[0.2em] text-cream-50 uppercase transition-colors hover:bg-plum-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
            >
              Message Us to Order
            </a>
          </div>
        </Reveal>
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
              className="group block text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum-600"
            >
              <span className="block overflow-hidden rounded-t-full">
                <img
                  src={category.image}
                  alt=""
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105 md:aspect-[4/4.5]"
                />
              </span>
              <span className="mt-6 block font-display text-3xl font-medium text-plum-700">
                {category.label}
              </span>
              <span className="mt-2 inline-block border-b border-plum-700 pb-0.5 text-xs font-bold tracking-[0.2em] text-plum-700 uppercase transition-colors group-hover:text-plum-500">
                Explore
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
