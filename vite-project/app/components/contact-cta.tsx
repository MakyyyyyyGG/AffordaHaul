const channels = [
  { label: "Facebook Messenger", href: "https://m.me/affordahaul" },
  { label: "TikTok", href: "https://tiktok.com/@affordahaul" },
];

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-16 rounded-t-[3rem] bg-plum-900">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <div className="flex flex-col items-center rounded-[3rem] border-2 border-plum-800 bg-gradient-to-br from-peach-200 via-petal-200 to-lilac-200 px-4 py-20 text-center shadow-puff sm:px-6">
          <p className="font-script text-3xl text-plum-600">saw something you love?</p>
          <h2 className="mt-2 font-display text-4xl italic text-plum-800 sm:text-5xl">
            Message us to order
          </h2>
          <p className="mt-6 max-w-lg text-lg text-plum-700">
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
                className="rounded-full border-2 border-plum-900 bg-plum-800 px-8 py-3 font-bold tracking-wide text-cream-50 uppercase shadow-sticker transition-all motion-safe:hover:translate-x-[3px] motion-safe:hover:translate-y-[3px] motion-safe:hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-800"
              >
                {channel.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
