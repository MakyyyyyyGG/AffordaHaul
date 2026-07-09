import { Reveal } from "./reveal";

const faqs = [
  {
    question: "How do I place an order at AffordaHaul?",
    answer:
      "Message AffordaHaul on Facebook Messenger or TikTok with the name of the piece you want, and we'll reserve it for you right away. There's no account or online checkout — ordering is a simple chat, and we confirm everything before you pay.",
  },
  {
    question: "What payment methods does AffordaHaul accept?",
    answer:
      "AffordaHaul accepts Cash on Delivery (COD) and in-person payment — no online payment is required. With COD you pay only when your order arrives at your doorstep, or you can pay in cash when we meet at our Quezon City pickup spot.",
  },
  {
    question: "Can I try clothes on before paying?",
    answer:
      "Yes. Meet us at our pickup spot at 123 Clothing Avenue, Quezon City (open Monday to Saturday, 10am–6pm), try on your picks, and pay on the spot only for the pieces you keep.",
  },
  {
    question: "How fast is delivery?",
    answer:
      "Orders are packed and sent out as soon as they're confirmed, so most hauls arrive within a few days. Exact timing depends on your location — message us with your address and we'll give you an estimate before you commit.",
  },
  {
    question: "How do I know if an item is still available?",
    answer:
      "Message us the item's name and we'll confirm availability and reserve it for you. Pieces are often one-offs and sell fast, so follow @affordahaul on TikTok and Facebook to catch new drops early.",
  },
  {
    question: "Where is AffordaHaul located?",
    answer:
      "AffordaHaul is based in Quezon City, Philippines, with a meet-up and pickup spot at 123 Clothing Avenue, open Monday to Saturday from 10am to 6pm. If you can't make it in person, we also deliver with Cash on Delivery.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-cream-100">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-plum-600 uppercase">
              Good to know
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-plum-700 sm:text-5xl">
              Frequently asked questions
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 divide-y divide-plum-700/15 border border-plum-700/40 bg-cream-50 shadow-puff">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-plum-600">
                  <h3 className="font-display text-xl font-medium text-plum-800">
                    {faq.question}
                  </h3>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 shrink-0 text-plum-700 motion-safe:transition-transform group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-plum-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
