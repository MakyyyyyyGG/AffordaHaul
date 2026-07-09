const channels = [
  { label: "Facebook Messenger", href: "https://m.me/affordahaul" },
  { label: "TikTok", href: "https://tiktok.com/@affordahaul" },
];

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-16 bg-plum-700">
      <div aria-hidden="true" className="checker-trim h-4" />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <p className="text-xs font-bold tracking-[0.3em] text-petal-200 uppercase">
          Saw something you love?
        </p>
        <h2 className="mt-3 font-display text-4xl font-medium text-cream-50 sm:text-5xl">
          Message us to order
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-petal-100">
          Send us the name of the piece you want and we'll reserve it for
          you. Pay cash on delivery or in person — whichever is easier.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream-50 px-8 py-3.5 text-xs font-bold tracking-[0.2em] text-plum-700 uppercase transition-colors hover:bg-petal-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-50"
            >
              {channel.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
