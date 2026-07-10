import { Reveal } from "./reveal";

const socials = [
  {
    name: "TikTok",
    handle: "@affordahaul",
    followers: "12.4K",
    label: "followers",
    href: "https://www.tiktok.com/@affordahaul_",
    cta: "Watch our fits",
    theme: "bg-plum-700 text-cream-50",
    accent: "text-petal-200",
    icon: (
      <path d="M16.6 3c.3 2.1 1.6 3.4 3.9 3.6v2.8c-1.4 0-2.7-.4-3.9-1.2v5.6a5.6 5.6 0 11-5.6-5.6c.3 0 .6 0 .9.1v2.9a2.7 2.7 0 101.9 2.6V3z" />
    ),
  },
  {
    name: "Facebook",
    handle: "AffordaHaul",
    followers: "8.2K",
    label: "followers",
    href: "https://www.facebook.com/affordahaul.clothingavenue",
    cta: "Join the community",
    theme: "border border-plum-700/40 bg-cream-50 text-plum-800",
    accent: "text-plum-500",
    icon: (
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2A22 22 0 0014.3 4c-2.4 0-4 1.5-4 4.2v2.6H7.6V14h2.7v8z" />
    ),
  },
];

export function Socials() {
  return (
    <section aria-label="Follow us" className="bg-lilac-100">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-plum-600 uppercase">
              Don't miss a drop
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-plum-700 sm:text-5xl">
              Follow the avenue
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {socials.map((social, i) => (
            <Reveal key={social.name} delay={i * 120}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-8 shadow-puff transition-transform motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 ${social.theme}`}
              >
                <div className="flex items-center justify-between">
                  <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor" aria-hidden="true">
                    {social.icon}
                  </svg>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">
                    {social.handle}
                  </span>
                </div>
                <p className="mt-8 font-display text-6xl font-medium sm:text-7xl">
                  {social.followers}
                  <span className={`mt-2 block font-sans text-xs font-bold tracking-[0.25em] uppercase ${social.accent}`}>
                    {social.label} on {social.name}
                  </span>
                </p>
                <p className={`mt-8 inline-block border-b border-current pb-0.5 text-xs font-bold tracking-[0.2em] uppercase ${social.accent}`}>
                  {social.cta}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
