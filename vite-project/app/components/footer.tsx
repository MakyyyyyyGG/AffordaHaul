const linkColumns = [
  {
    heading: "Shop",
    links: [
      { href: "#collection", label: "New Arrivals" },
      { href: "#collection", label: "Tops & Dresses" },
      { href: "#collection", label: "Bottoms & Sets" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "#about", label: "Our Story" },
      { href: "#reviews", label: "Reviews" },
    ],
  },
  {
    heading: "Order",
    links: [
      { href: "#contact", label: "Message Us" },
      { href: "#contact", label: "Cash on Delivery" },
    ],
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/affordahaul",
    icon: (
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2A22 22 0 0014.3 4c-2.4 0-4 1.5-4 4.2v2.6H7.6V14h2.7v8z" />
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@affordahaul",
    icon: (
      <path d="M16.6 3c.3 2.1 1.6 3.4 3.9 3.6v2.8c-1.4 0-2.7-.4-3.9-1.2v5.6a5.6 5.6 0 11-5.6-5.6c.3 0 .6 0 .9.1v2.9a2.7 2.7 0 101.9 2.6V3z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="overflow-hidden bg-plum-900 text-petal-100">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl italic text-petal-200">
              afforda haul <span aria-hidden="true">🍒</span>
            </p>
            <p className="mt-1 font-script text-xl text-petal-300">clothing avenue</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-petal-200">
              Cute, affordable fashion finds — hand-picked and priced kindly.
              Cash on Delivery and in-person payment for every order.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-petal-300/40 bg-plum-800 text-petal-200 transition-colors hover:border-petal-300 hover:bg-petal-300 hover:text-plum-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petal-200"
                  >
                    <span className="sr-only">{social.label}</span>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {linkColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-sm font-extrabold tracking-widest text-petal-300 uppercase">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm font-bold">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-petal-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p
          aria-hidden="true"
          className="mt-16 -mb-4 text-center font-display text-[clamp(4rem,15vw,11rem)] leading-none italic text-petal-100/10 select-none sm:-mb-8"
        >
          afforda haul
        </p>
      </div>
      <div className="border-t border-plum-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-petal-200 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} AffordaHaul. All rights reserved.</p>
          <p>
            Made with <span aria-hidden="true">🍒</span>
            <span className="sr-only">love</span> · COD available
          </p>
        </div>
      </div>
    </footer>
  );
}
