import type { SanityImageSource } from "@sanity/image-url";

import {
  aboutHighlights,
  aboutIntro,
  aboutPillars,
  buildAreas,
  ctaContent,
  ctaLinks,
  heroContent,
  heroShowcaseContent,
  navLinks,
} from "@/app/data/home-content";
import { homeConfig, type HeroVariant } from "@/app/config/home-config";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  aboutPageQuery,
  contactSectionQuery,
  heroClassicQuery,
  heroShowcaseQuery,
  projectsSectionQuery,
  siteSettingsQuery,
  whatIBuildQuery,
} from "@/sanity/queries/home";

export type NavLink = { label: string; href: string };
export type HeroButton = {
  label: string;
  href: string;
  variant: "primary" | "outline";
  icon?:
    | "services"
    | "products"
    | "consultation"
    | "briefcase"
    | "user"
    | "mail"
    | "linkedin";
};
export type Tagline = { icon: "chip" | "rocket"; text: string };
export type ValueOverlay = { name?: string; lead: string; highlight: string };

export type HomeContent = {
  heroVariant: HeroVariant;
  siteName: string;
  navLinks: NavLink[];
  heroButtons: HeroButton[];
  profileImage: { src: string; alt: string };
  footer: { copyright: string; tagline: string };
  heroShowcase: {
    taglines: Tagline[];
    headline: { before: string; accent: string };
    description: string;
    valueOverlay: ValueOverlay;
  };
  heroClassic: {
    taglines: Tagline[];
    greeting: string;
    subheading: string;
    description: string;
    valueOverlay: ValueOverlay;
  };
  whatIBuild: {
    eyebrow: string;
    title: string;
    description: string;
    buildAreas: Array<{
      title: string;
      icon: "ai" | "automation" | "analytics";
      description: string;
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    readMoreParagraphs: string[];
    highlights: Array<{ label: string; value: string }>;
    pillarsHeading: string;
    pillars: string[];
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    links: NavLink[];
  };
};

const defaults: HomeContent = {
  heroVariant: homeConfig.heroVariant,
  siteName: heroContent.name,
  navLinks: [...navLinks],
  heroButtons: [...heroContent.buttons],
  profileImage: {
    src: heroContent.profileImage.classic.src,
    alt: heroContent.profileImage.classic.alt,
  },
  footer: {
    copyright: "© 2026 Zahoor Ahmed. Built with Next.js and Tailwind CSS.",
    tagline:
      "Focused on practical AI, analytics, automation, and telecom intelligence.",
  },
  heroShowcase: {
    taglines: [...heroShowcaseContent.taglines],
    headline: { ...heroShowcaseContent.headline },
    description: heroShowcaseContent.description,
    valueOverlay: { ...heroShowcaseContent.valueOverlay },
  },
  heroClassic: {
    taglines: [...heroContent.taglines],
    greeting: heroContent.greeting,
    subheading: heroContent.subheading,
    description: heroContent.description,
    valueOverlay: { ...heroContent.valueOverlay },
  },
  whatIBuild: {
    eyebrow: "Services",
    title: "How I help businesses use AI, data, and automation",
    description:
      "I build useful digital systems that help people reduce manual work, make clearer decisions, and move ideas from concept to execution. My long-term direction is applying this work at the intersection of AI, analytics, and telecom systems.",
    buildAreas: [...buildAreas],
  },
  about: {
    eyebrow: "About",
    title: aboutIntro.title,
    paragraphs: [...aboutIntro.paragraphs],
    readMoreParagraphs: [...aboutIntro.readMoreParagraphs],
    highlights: [...aboutHighlights],
    pillarsHeading: "What I bring",
    pillars: [...aboutPillars],
  },
  projectsSection: {
    eyebrow: "Products",
    title: "Products I'm Building",
    description:
      "Focused AI products and systems I'm building for SMB workflows — starting with practical tools that solve real lead management and automation problems.",
  },
  contact: {
    eyebrow: "Contact",
    title: ctaContent.title,
    description: ctaContent.description,
    links: [...ctaLinks],
  },
};

const legacyShowcaseDescription =
  "I build practical AI and automation systems for SMB workflows, with a growing focus on telecom intelligence.";

const navLinkOrder = new Map([
  ["#services", 0],
  ["#products", 1],
  ["#about", 2],
  ["#contact", 3],
]);

function orderNavLinks(links: NavLink[]): NavLink[] {
  const normalizedLinks = links.map((link) =>
    link.href === "#what-i-build"
      ? { ...link, label: "Services", href: "#services" }
      : link.href === "#services" && link.label === "What I Build"
        ? { ...link, label: "Services" }
        : link,
  );

  return normalizedLinks.sort(
    (first, second) =>
      (navLinkOrder.get(first.href) ?? Number.MAX_SAFE_INTEGER) -
      (navLinkOrder.get(second.href) ?? Number.MAX_SAFE_INTEGER),
  );
}

type SanityProfileImage = {
  alt?: string;
  asset?: { _id?: string; url?: string };
};

function resolveProfileImage(
  profileImage: SanityProfileImage | null | undefined,
  legacySrc: string | undefined,
  legacyAlt: string | undefined,
  fallback: HomeContent["profileImage"],
): HomeContent["profileImage"] {
  if (profileImage?.asset) {
    return {
      src: urlFor(profileImage as SanityImageSource).width(900).quality(90).auto("format").url(),
      alt: profileImage.alt || fallback.alt,
    };
  }

  if (legacySrc) {
    return {
      src: legacySrc,
      alt: legacyAlt || fallback.alt,
    };
  }

  return fallback;
}

export async function getHomeContent(): Promise<HomeContent> {
  try {
    const [siteSettings, heroShowcase, heroClassic, whatIBuild, aboutPage, projectsSection, contactSection] =
      await Promise.all([
        client.fetch<Record<string, unknown> | null>(siteSettingsQuery, {}, { cache: "no-store" }),
        client.fetch<Record<string, unknown> | null>(heroShowcaseQuery, {}, { cache: "no-store" }),
        client.fetch<Record<string, unknown> | null>(heroClassicQuery, {}, { cache: "no-store" }),
        client.fetch<Record<string, unknown> | null>(whatIBuildQuery, {}, { cache: "no-store" }),
        client.fetch<Record<string, unknown> | null>(aboutPageQuery, {}, { cache: "no-store" }),
        client.fetch<Record<string, unknown> | null>(projectsSectionQuery, {}, { cache: "no-store" }),
        client.fetch<Record<string, unknown> | null>(contactSectionQuery, {}, { cache: "no-store" }),
      ]);

    const siteNavLinks = siteSettings?.navLinks as NavLink[] | undefined;
    const siteHeroButtons = siteSettings?.heroButtons as HeroButton[] | undefined;
    const showcaseTaglines = heroShowcase?.taglines as Tagline[] | undefined;
    const showcaseHeroButtons = heroShowcase?.heroButtons as HeroButton[] | undefined;
    const classicTaglines = heroClassic?.taglines as Tagline[] | undefined;
    const buildAreasData = whatIBuild?.buildAreas as HomeContent["whatIBuild"]["buildAreas"] | undefined;
    const aboutParagraphs = aboutPage?.paragraphs as string[] | undefined;
    const aboutReadMore = aboutPage?.readMoreParagraphs as string[] | undefined;
    const aboutHighlightsData = aboutPage?.highlights as HomeContent["about"]["highlights"] | undefined;
    const aboutPillarsData = aboutPage?.pillars as string[] | undefined;
    const contactLinks = contactSection?.links as NavLink[] | undefined;
    const heroVariant =
      siteSettings?.heroVariant === "classic" || siteSettings?.heroVariant === "showcase"
        ? siteSettings.heroVariant
        : defaults.heroVariant;

    return {
      heroVariant,
      siteName: (siteSettings?.siteName as string) || defaults.siteName,
      navLinks: orderNavLinks(siteNavLinks?.length ? siteNavLinks : defaults.navLinks),
      heroButtons:
        heroVariant === "showcase" && showcaseHeroButtons?.length
          ? showcaseHeroButtons
          : siteHeroButtons?.length
            ? siteHeroButtons
            : defaults.heroButtons,
      profileImage: resolveProfileImage(
        siteSettings?.profileImage as SanityProfileImage | undefined,
        siteSettings?.profileImageSrc as string | undefined,
        siteSettings?.profileImageAlt as string | undefined,
        defaults.profileImage,
      ),
      footer: {
        copyright: (siteSettings?.footerCopyright as string) || defaults.footer.copyright,
        tagline: (siteSettings?.footerTagline as string) || defaults.footer.tagline,
      },
      heroShowcase: {
        taglines: showcaseTaglines?.length ? showcaseTaglines : defaults.heroShowcase.taglines,
        headline: {
          before: (heroShowcase?.headlineBefore as string) || defaults.heroShowcase.headline.before,
          accent: (heroShowcase?.headlineAccent as string) || defaults.heroShowcase.headline.accent,
        },
        description:
          !heroShowcase?.description || heroShowcase.description === legacyShowcaseDescription
            ? defaults.heroShowcase.description
            : (heroShowcase.description as string),
        valueOverlay: {
          name:
            (heroShowcase?.valueOverlay as Partial<ValueOverlay> | undefined)?.name ||
            defaults.heroShowcase.valueOverlay.name,
          lead:
            (heroShowcase?.valueOverlay as Partial<ValueOverlay> | undefined)?.lead ||
            defaults.heroShowcase.valueOverlay.lead,
          highlight:
            (heroShowcase?.valueOverlay as Partial<ValueOverlay> | undefined)?.highlight ||
            defaults.heroShowcase.valueOverlay.highlight,
        },
      },
      heroClassic: {
        taglines: classicTaglines?.length ? classicTaglines : defaults.heroClassic.taglines,
        greeting: (heroClassic?.greeting as string) || defaults.heroClassic.greeting,
        subheading: (heroClassic?.subheading as string) || defaults.heroClassic.subheading,
        description: (heroClassic?.description as string) || defaults.heroClassic.description,
        valueOverlay: (heroClassic?.valueOverlay as ValueOverlay) || defaults.heroClassic.valueOverlay,
      },
      whatIBuild: {
        eyebrow:
          (whatIBuild?.intro as { eyebrow?: string })?.eyebrow === "What I Build"
            ? defaults.whatIBuild.eyebrow
            : ((whatIBuild?.intro as { eyebrow?: string })?.eyebrow) || defaults.whatIBuild.eyebrow,
        title:
          (whatIBuild?.intro as { title?: string })?.title ===
          "Practical AI, data, and automation systems"
            ? defaults.whatIBuild.title
            : ((whatIBuild?.intro as { title?: string })?.title) || defaults.whatIBuild.title,
        description:
          ((whatIBuild?.intro as { description?: string })?.description) || defaults.whatIBuild.description,
        buildAreas: buildAreasData?.length ? buildAreasData : defaults.whatIBuild.buildAreas,
      },
      about: {
        eyebrow: (aboutPage?.eyebrow as string) || defaults.about.eyebrow,
        title: (aboutPage?.title as string) || defaults.about.title,
        paragraphs: aboutParagraphs?.length ? aboutParagraphs : defaults.about.paragraphs,
        readMoreParagraphs: aboutReadMore?.length ? aboutReadMore : defaults.about.readMoreParagraphs,
        highlights: aboutHighlightsData?.length ? aboutHighlightsData : defaults.about.highlights,
        pillarsHeading: (aboutPage?.pillarsHeading as string) || defaults.about.pillarsHeading,
        pillars: aboutPillarsData?.length ? aboutPillarsData : defaults.about.pillars,
      },
      projectsSection: {
        eyebrow:
          ((projectsSection?.intro as { eyebrow?: string })?.eyebrow) || defaults.projectsSection.eyebrow,
        title: ((projectsSection?.intro as { title?: string })?.title) || defaults.projectsSection.title,
        description:
          ((projectsSection?.intro as { description?: string })?.description) ||
          defaults.projectsSection.description,
      },
      contact: {
        eyebrow: (contactSection?.eyebrow as string) || defaults.contact.eyebrow,
        title: (contactSection?.title as string) || defaults.contact.title,
        description: (contactSection?.description as string) || defaults.contact.description,
        links: contactLinks?.length ? contactLinks : defaults.contact.links,
      },
    };
  } catch {
    return defaults;
  }
}
