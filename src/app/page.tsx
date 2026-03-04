import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CreativeSection from "@/components/CreativeSection";
import ProductSection from "@/components/ProductSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <CreativeSection />
      <ProductSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
