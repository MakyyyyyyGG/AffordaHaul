const channels = [
  { label: "Facebook Messenger", href: "https://m.me/affordahaul" },
  { label: "TikTok", href: "https://tiktok.com/@affordahaul" },
];

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-16 border-y-2 border-cocoa-900 bg-raspberry-600">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6">
        <p className="font-script text-3xl text-blush-200">saw something you love?</p>
        <h2 className="mt-2 font-display text-4xl italic text-white sm:text-5xl">
          Message us to order
        </h2>
        <p className="mt-6 max-w-lg text-lg text-blush-100">
          Send us the name of the piece you want and we'll reserve it for
          you. Pay cash on delivery or in person — whichever is easier.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cocoa-900 bg-white px-8 py-3 font-bold tracking-wide text-raspberry-700 uppercase shadow-brutal transition-all motion-safe:hover:translate-x-[3px] motion-safe:hover:translate-y-[3px] motion-safe:hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {channel.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
