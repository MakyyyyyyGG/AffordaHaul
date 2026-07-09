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
  ];
}

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
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
