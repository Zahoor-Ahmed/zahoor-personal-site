import type { HomeContent } from "@/app/lib/get-home-content";
import { HeroSectionClassic } from "@/app/components/home/hero-section-classic";
import { HeroSectionShowcase } from "@/app/components/home/hero-section-showcase";

type HeroSectionProps = {
  content: HomeContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  if (content.heroVariant === "showcase") {
    return <HeroSectionShowcase content={content} />;
  }

  return <HeroSectionClassic content={content} />;
}
