import { Reveal } from "./reveal";

const socials = [
  {
    name: "TikTok",
    handle: "@affordahaul",
    followers: "12.4K",
    label: "followers",
    href: "https://tiktok.com/@affordahaul",
    cta: "Watch our fits",
    theme: "bg-cocoa-900 text-blush-100",
    accent: "text-blush-300",
    icon: (
      <path d="M16.6 3c.3 2.1 1.6 3.4 3.9 3.6v2.8c-1.4 0-2.7-.4-3.9-1.2v5.6a5.6 5.6 0 11-5.6-5.6c.3 0 .6 0 .9.1v2.9a2.7 2.7 0 101.9 2.6V3z" />
    ),
  },
  {
    name: "Facebook",
    handle: "AffordaHaul",
    followers: "8.2K",
    label: "followers",
    href: "https://facebook.com/affordahaul",
    cta: "Join the community",
    theme: "bg-white text-cocoa-900",
    accent: "text-raspberry-600",
    icon: (
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2A22 22 0 0014.3 4c-2.4 0-4 1.5-4 4.2v2.6H7.6V14h2.7v8z" />
    ),
  },
];

export function Socials() {
  return (
    <section aria-label="Follow us" className="bg-blush-100">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="font-script text-2xl text-raspberry-500">don't miss a drop</p>
          <h2 className="mt-1 font-display text-5xl italic text-raspberry-600 sm:text-6xl">
            Follow the avenue
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {socials.map((social, i) => (
            <Reveal key={social.name} delay={i * 120}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block border-2 border-cocoa-900 p-8 shadow-brutal transition-all motion-safe:hover:translate-x-[4px] motion-safe:hover:translate-y-[4px] motion-safe:hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-raspberry-600 ${social.theme}`}
              >
                <div className="flex items-center justify-between">
                  <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" aria-hidden="true">
                    {social.icon}
                  </svg>
                  <span className="text-sm font-bold tracking-widest uppercase">
                    {social.handle}
                  </span>
                </div>
                <p className="mt-8 font-display text-6xl italic sm:text-7xl">
                  {social.followers}
                  <span className={`mt-1 block font-sans text-sm font-bold tracking-[0.25em] uppercase not-italic ${social.accent}`}>
                    {social.label} on {social.name}
                  </span>
                </p>
                <p className={`mt-8 text-sm font-bold tracking-widest uppercase underline decoration-2 underline-offset-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1 ${social.accent}`}>
                  {social.cta} →
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
