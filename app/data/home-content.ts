export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  name: "Zahoor Ahmed",
  taglines: [
    {
      icon: "chip",
      text: "Building practical AI, data, and automation systems",
    },
    {
      icon: "rocket",
      text: "Turning ideas into useful products, workflows, and ventures",
    },
  ],
  greeting: "Hello",
  subheading: "What drives me",
  description:
    "I'm building at the intersection of AI, data, automation, and digital products. My focus is not just on ideas, but on turning them into practical systems, meaningful ventures, and work that creates real value.",
  profileImage: {
    /** Change `src` to swap photo — files live in /public (e.g. zahoor-profile-r2.png) */
    classic: {
      src: "/zahoor-profile-r1.png",
      alt: "Portrait of Zahoor Ahmed",
      className: "scale-[1.22] object-cover",
      style: { objectPosition: "center -4%" } as const,
    },
  },
  valueOverlay: {
    lead: "Building practical systems. Creating",
    highlight: "real value.",
  },
  buttons: [
    { label: "View Products", href: "#products", variant: "primary", icon: "briefcase" },
    { label: "Contact Me", href: "#contact", variant: "outline", icon: "user" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zahoor-ahmed",
      variant: "outline",
      icon: "linkedin",
    },
  ],
} as const;

/** Copy used only by the dark showcase hero (classic hero uses heroContent above) */
export const heroShowcaseContent = {
  taglines: [
    {
      icon: "chip" as const,
      text: "AI Strategy & Business Automation Leader",
    },
  ],
  headline: {
    before: "Turning business challenges into ",
    accent: "AI-powered execution",
  },
  description:
    "I help business leaders identify high-impact AI opportunities, automate critical workflows, and improve operations, growth, and decision-making.",
  valueOverlay: {
    name: "Engineer Zahoor Ahmed",
    lead: "AI & Automation Advisor",
    highlight: "Telecom + SMB",
  },
} as const;

export const heroHighlights = [
  "AI Automation",
  "Data Analytics",
  "SaaS Systems",
  "AI Training",
] as const;

export const aboutIntro = {
  title: "My journey from telecom data to business-focused AI systems",
  paragraphs: [
    "My background is in telecom analytics, reporting, and customer experience. Working with complex operational data taught me how businesses struggle with manual work, fragmented workflows, and decision bottlenecks.",
    "Today I apply that experience to build practical AI, automation, and analytics systems that solve real operational problems for telecom companies and SMBs.",
  ],
  readMoreParagraphs: [
    "Along the way, I've worked on reporting pipelines, customer experience metrics, and internal tools that help teams act on data instead of just viewing it.",
    "I'm especially interested in products where AI can support real operational decisions in telecom and customer-facing environments.",
  ],
} as const;

export const aboutHighlights = [
  {
    label: "Focus",
    value: "AI systems, automation, analytics, and telecom intelligence",
  },
  {
    label: "Approach",
    value: "Practical product thinking with hands-on implementation",
  },
] as const;

export const aboutPillars = [
  "Data analytics and reporting experience",
  "Telecom customer experience background",
  "Ability to turn messy workflows into cleaner systems",
  "Growing focus on AI for telecom and customer intelligence",
] as const;

export const buildAreas = [
  {
    title: "AI Assistants & Copilots",
    icon: "ai",
    description:
      "Custom chatbots, intelligent agents, and copilots trained on your business knowledge, processes, and data. Built to support customers, assist employees, and take repetitive work off your team.",
    ctaLabel: "Let’s Discuss",
    ctaHref: "#contact",
    ctaVariant: "outline",
  },
  {
    title: "Business Workflow Automation",
    icon: "automation",
    description:
      "AI and non-AI automation that connects your tools, removes manual tasks, reduces errors, and keeps important business workflows running reliably.",
    ctaLabel: "Let’s Discuss",
    ctaHref: "#contact",
    ctaVariant: "outline",
  },
  {
    title: "Revenue & Operations Automation",
    icon: "analytics",
    description:
      "Automation and analytics designed to improve lead conversion, customer retention, operational visibility, and telecom performance.",
    ctaLabel: "Let’s Discuss",
    ctaHref: "#contact",
    ctaVariant: "outline",
  },
] as const;

export const featuredProjects = [
  {
    title: "EZ Leads",
    eyebrow: "AI Sales System",
    visual: "ez-leads",
    description:
      "An AI-assisted WhatsApp lead management system for SMBs — built to capture, understand, and follow up with leads faster.",
    tags: ["WhatsApp", "AI CRM", "Firebase"],
    href: "#",
  },
  {
    title: "Business Process Automation",
    eyebrow: "Automation Workflows",
    visual: "automation",
    description:
      "Repeatable workflows for reporting, content, follow-ups, and business tasks that reduce manual effort and improve consistency.",
    tags: ["Python", "APIs", "Automation"],
    href: "#",
  },
  {
    title: "Analytics Dashboards",
    eyebrow: "Data & Telecom Analytics",
    visual: "analytics",
    description:
      "Decision-support dashboards built from complex data, focused on KPIs, customer experience, telecom insights, and clearer reporting.",
    tags: ["SQL", "Analytics", "Telecom"],
    href: "#",
  },
] as const;

export const ctaContent = {
  title: "Looking to turn an idea or workflow into a working system",
  description:
    "I'm open to selected collaborations around AI products, automation workflows, analytics systems, and telecom-focused intelligence.",
} as const;

export const ctaLinks = [
  {
    label: "Email Zahoor",
    href: "mailto:hello@zahoorahmed.com",
  },
  {
    label: "View Products",
    href: "#products",
  },
] as const;
