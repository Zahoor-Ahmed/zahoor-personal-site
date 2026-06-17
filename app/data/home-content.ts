export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
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
    { label: "Projects", href: "#projects", variant: "primary", icon: "briefcase" },
    { label: "Contact", href: "#contact", variant: "outline", icon: "user" },
    {
      label: "Email",
      href: "mailto:hello@zahoorahmed.com",
      variant: "outline",
      icon: "mail",
    },
  ],
} as const;

/** Copy used only by the dark showcase hero (classic hero uses heroContent above) */
export const heroShowcaseContent = {
  taglines: [
    {
      icon: "chip" as const,
      text: "Business workflows into AI systems",
    },
    {
      icon: "rocket" as const,
      text: "Practical automation for real execution",
    },
  ],
  headline: {
    before: "AI systems that create ",
    accent: "value",
  },
  description:
    "I design practical AI and automation solutions that help businesses move faster, work smarter, and execute better.",
  valueOverlay: {
    lead: "Practical systems.",
    highlight: "Real business value.",
  },
} as const;

export const heroHighlights = [
  "AI Automation",
  "Data Analytics",
  "SaaS Systems",
  "AI Training",
] as const;

export const aboutIntro = {
  title: "From telecom data to practical AI systems",
  paragraphs: [
    "My background is in data analytics, reporting, and telecom customer experience, where the work was about turning complex information into clearer decisions.",
    "Now I'm applying that same practical mindset to AI products, automation workflows, and intelligence systems that support real business execution.",
  ],
  readMoreParagraphs: [
    "Along the way, I've worked on reporting pipelines, customer experience metrics, and internal tools that help teams act on data instead of just viewing it.",
    "I'm especially interested in projects where AI can support real operational decisions in telecom and customer-facing environments.",
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
    title: "AI Products",
    icon: "ai",
    description:
      "Focused tools and assistants built around real use cases, user needs, and practical workflows.",
  },
  {
    title: "Automation Systems",
    icon: "automation",
    description:
      "Processes that reduce repetitive work, improve consistency, and turn manual tasks into reliable workflows.",
  },
  {
    title: "Analytics & Telecom",
    icon: "analytics",
    description:
      "Decision systems built from real data, focused on insights, customer experience, and telecom performance.",
  },
] as const;

export const featuredProjects = [
  {
    title: "EZ Leads",
    eyebrow: "AI Sales System",
    visual: "ez-leads",
    description:
      "An AI-assisted WhatsApp lead management system designed to help businesses capture, understand, and follow up with leads faster.",
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
    label: "View Projects",
    href: "#projects",
  },
] as const;
