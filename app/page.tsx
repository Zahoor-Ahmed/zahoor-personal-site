import { AboutSection } from "@/app/components/home/about-section";
import { BrandSection } from "@/app/components/home/brand-section";
import { CtaSection } from "@/app/components/home/cta-section";
import { FeaturedProjects } from "@/app/components/home/featured-projects";
import { Footer } from "@/app/components/home/footer";
import { HeroSection } from "@/app/components/home/hero-section";
import { Navbar } from "@/app/components/home/navbar";
import { navLinks } from "@/app/data/home-content";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar links={navLinks} />
      <HeroSection />
      <BrandSection />
      <AboutSection />
      <FeaturedProjects />
      <CtaSection />
      <Footer />
    </main>
  );
}
