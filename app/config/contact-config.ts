export const CONTACT_CONFIG = {
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-calendly-link",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  emailAddress:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@zahoorahmed.com",
} as const;

export const WHATSAPP_MESSAGE =
  "Hello Zahoor, I visited your website and would like to discuss an AI, automation, or analytics project.";
