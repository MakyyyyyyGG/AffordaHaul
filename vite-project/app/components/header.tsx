import { useState } from "react";

const navLinks = [
  { href: "#collection", label: "Collection" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const linkClasses =
  "rounded-full px-4 py-2 text-sm font-bold tracking-widest uppercase text-plum-800 transition-colors hover:bg-petal-100 hover:text-plum-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-plum-800 bg-cream-50/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only rounded-full border-2 border-plum-800 bg-plum-700 px-4 py-2 text-cream-50 focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-display text-2xl italic text-plum-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
        >
          afforda haul <span aria-hidden="true">🍒</span>
        </a>

        <nav aria-label="Main" className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClasses}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-full p-2 text-plum-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Main" className="border-t-2 border-plum-800 sm:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block ${linkClasses}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
