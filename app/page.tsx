import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import BestSellers from "@/components/BestSellers";
import { FeatureStrip, Newsletter } from "@/components/PromoStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <BestSellers />
      <FeatureStrip />
      <Newsletter />
    </>
  );
}
