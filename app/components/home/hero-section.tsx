import { homeConfig } from "@/app/config/home-config";
import { HeroSectionClassic } from "@/app/components/home/hero-section-classic";
import { HeroSectionShowcase } from "@/app/components/home/hero-section-showcase";

export function HeroSection() {
  if (homeConfig.heroVariant === "showcase") {
    return <HeroSectionShowcase />;
  }

  return <HeroSectionClassic />;
}
