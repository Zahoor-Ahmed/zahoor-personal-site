import { AboutSection } from "@/app/components/home/about-section";
import { BrandSection } from "@/app/components/home/brand-section";
import { CtaSection } from "@/app/components/home/cta-section";
import { FeaturedProjects } from "@/app/components/home/featured-projects";
import { Footer } from "@/app/components/home/footer";
import { HeroSection } from "@/app/components/home/hero-section";
import { Navbar } from "@/app/components/home/navbar";
import { homeSectionGap } from "@/app/components/home/section-layout";
import { getHomeContent } from "@/app/lib/get-home-content";

export default async function Home() {
  const content = await getHomeContent();

  return (
    <main className="relative overflow-x-clip">
      <Navbar links={content.navLinks} siteName={content.siteName} />
      <div className={`flex flex-col ${homeSectionGap}`}>
        <HeroSection content={content} />
        <BrandSection whatIBuild={content.whatIBuild} />
        <AboutSection about={content.about} />
        <FeaturedProjects intro={content.projectsSection} />
        <CtaSection contact={content.contact} />
        <Footer footer={content.footer} />
      </div>
    </main>
  );
}
