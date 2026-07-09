import type { Route } from "./+types/home";
import { Header } from "../components/header";
import { Hero, PromoStrip } from "../components/hero";
import { ProductShowcase, CategoryTiles } from "../components/product-showcase";
import { Perks } from "../components/perks";
import { BrandStory } from "../components/brand-story";
import { CustomerGallery } from "../components/customer-gallery";
import { Testimonials } from "../components/testimonials";
import { Socials } from "../components/socials";
import { MapSection, ImageStrip } from "../components/visit";
import { Faq } from "../components/faq";
import { ContactCta } from "../components/contact-cta";
import { Footer } from "../components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AffordaHaul — clothing avenue" },
    {
      name: "description",
      content:
        "Cute, affordable fashion finds at AffordaHaul. Browse the collection and order with Cash on Delivery or in-person payment.",
    },
    { property: "og:title", content: "AffordaHaul — clothing avenue" },
    {
      property: "og:description",
      content:
        "Cute, affordable fashion finds. Cash on Delivery and in-person payment available.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ];
}

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "AffordaHaul",
  description:
    "Cute, affordable fashion finds in Quezon City. Order via Facebook Messenger or TikTok and pay with Cash on Delivery or in person.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Clothing Avenue",
    addressLocality: "Quezon City",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.5995,
    longitude: 120.9892,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "18:00",
  },
  paymentAccepted: "Cash",
  sameAs: [
    "https://tiktok.com/@affordahaul",
    "https://facebook.com/affordahaul",
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <PromoStrip />
        <ProductShowcase />
        <CategoryTiles />
        <Perks />
        <BrandStory />
        <CustomerGallery />
        <Testimonials />
        <Socials />
        <MapSection />
        <ImageStrip />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
    </>
  );
}
