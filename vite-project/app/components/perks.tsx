import { Reveal } from "./reveal";

const iconProps = {
  viewBox: "0 0 24 24",
  className: "h-7 w-7 shrink-0",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const perks = [
  {
    title: "Cash on Delivery",
    description:
      "Pay only when your order arrives at your doorstep — no online payment, no worries.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect x="2" y="7" width="20" height="12" rx="3" />
        <circle cx="12" cy="13" r="3" />
        <path d="M5 7v-2h14v2" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description:
      "Experience fast delivery, ensuring your stylish finds arrive at your door in no time.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M1 8h13v9H1zM14 11h4l3 3v3h-7z" />
        <circle cx="5.5" cy="17" r="2" />
        <circle cx="17.5" cy="17" r="2" />
      </svg>
    ),
  },
  {
    title: "In-Person Payment",
    description:
      "Prefer meet-ups? Pay in person for any item — easy, safe, and on your schedule.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M3 9l2-5h14l2 5" />
        <path d="M3 9v11h18V9" />
        <path d="M3 9c0 1.5 1.3 2.5 3 2.5S9 10.5 9 9c0 1.5 1.3 2.5 3 2.5s3-1 3-2.5c0 1.5 1.3 2.5 3 2.5s3-1 3-2.5" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Personal Support",
    description:
      "Message us anytime — personalized assistance from browsing to delivery, every time.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M21 12a9 9 0 10-3.5 7.1L21 20l-.6-3.3A8.9 8.9 0 0021 12z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  },
];

export function Perks() {
  return (
    <section className="bg-plum-700">
      <div aria-hidden="true" className="scallop scallop-cream" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-petal-200 uppercase">
              How ordering works
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-cream-50 sm:text-5xl">
              Shopping, the simple way
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 bg-cream-50 p-8 sm:p-12">
            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {perks.map((perk) => (
                <li key={perk.title} className="text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-plum-700/40 text-plum-700">
                    {perk.icon}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-medium text-plum-800">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-plum-700">
                    {perk.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <div aria-hidden="true" className="checker-trim h-4" />
    </section>
  );
}
