"use client";

import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";

import type { HomeContent } from "@/app/lib/get-home-content";
import {
  CONTACT_CONFIG,
  WHATSAPP_MESSAGE,
} from "@/app/config/contact-config";
import {
  homeSectionMaxWidth,
  homeSectionPaddingX,
} from "@/app/components/home/section-layout";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type CtaSectionProps = { contact: HomeContent["contact"] };
type ContactIconName = "calendar" | "whatsapp" | "email";

const CALENDLY_SCRIPT_ID = "calendly-popup-widget";
const CALENDLY_SCRIPT_URL = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_STYLESHEET_URL = "https://assets.calendly.com/assets/external/widget.css";

function ContactIcon({ name }: { name: ContactIconName }) {
  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h2M14 14h2M8 18h2M14 18h2" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4.2Z" />
        <path d="M8.2 7.8c.4-.4.8-.2 1 .2l1 2c.2.4 0 .7-.3 1l-.7.6c.9 1.8 2.2 3.1 4 4l.7-.8c.3-.3.6-.4 1-.2l1.8.9c.5.2.6.6.4 1-.5 1.2-1.5 1.8-2.8 1.6-4.5-.7-7.9-4.1-8.5-8.5-.2-1.1.3-1.5.7-1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ensureCalendlyStylesheet() {
  if (document.querySelector(`link[href="${CALENDLY_STYLESHEET_URL}"]`)) return;

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = CALENDLY_STYLESHEET_URL;
  document.head.appendChild(stylesheet);
}

export function CtaSection({ contact }: CtaSectionProps) {
  const [isCalendlyPending, setIsCalendlyPending] = useState(false);
  const [hasCalendlyError, setHasCalendlyError] = useState(false);
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
  const pendingCalendlyOpen = useRef(false);
  const copyResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const whatsappHref = useMemo(() => {
    const number = CONTACT_CONFIG.whatsappNumber.replace(/\D/g, "");
    const baseUrl = number ? `https://wa.me/${number}` : "https://wa.me/";
    return `${baseUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CONTACT_CONFIG.calendlyUrl });
      setIsCalendlyPending(false);
      return;
    }

    if (hasCalendlyError) {
      window.open(CONTACT_CONFIG.calendlyUrl, "_blank", "noopener,noreferrer");
      return;
    }

    pendingCalendlyOpen.current = true;
    setIsCalendlyPending(true);
  };

  useEffect(() => {
    ensureCalendlyStylesheet();

    return () => {
      if (copyResetTimer.current) clearTimeout(copyResetTimer.current);
    };
  }, []);

  const copyEmailAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_CONFIG.emailAddress);
    } catch {
      const input = document.createElement("textarea");
      input.value = CONTACT_CONFIG.emailAddress;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    setHasCopiedEmail(true);
    if (copyResetTimer.current) clearTimeout(copyResetTimer.current);
    copyResetTimer.current = setTimeout(() => setHasCopiedEmail(false), 2500);
  };

  const handleCalendlyReady = () => {
    if (pendingCalendlyOpen.current && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CONTACT_CONFIG.calendlyUrl });
      pendingCalendlyOpen.current = false;
      setIsCalendlyPending(false);
    }
  };

  const contactOptions = [
    {
      icon: "calendar" as const,
      cardClassName: "bg-[linear-gradient(145deg,rgba(35,86,137,0.96),rgba(23,56,95,0.9))]",
      iconClassName:
        "border-[#77c7ff] bg-[linear-gradient(145deg,#25689d,#19476f)] text-[#b4e4ff] shadow-[0_10px_24px_rgba(45,156,230,0.2)]",
      title: "Book a Discovery Call",
      description:
        "Schedule a short call to discuss your requirements, current challenges, and possible next steps.",
      action: (
        <button
          type="button"
          onClick={openCalendly}
          className="contact-option-button contact-option-button-primary"
          aria-label="Choose a time for a discovery call"
          aria-busy={isCalendlyPending}
        >
          {isCalendlyPending ? "Opening Calendly..." : "Choose a Time"}
        </button>
      ),
    },
    {
      icon: "whatsapp" as const,
      cardClassName: "bg-[linear-gradient(145deg,rgba(27,78,91,0.94),rgba(23,56,95,0.9))]",
      iconClassName:
        "border-[#69d7ba] bg-[linear-gradient(145deg,#16846d,#135b54)] text-[#b9ffea] shadow-[0_10px_24px_rgba(16,185,129,0.18)]",
      title: "Message Me on WhatsApp",
      description:
        "Send a direct message for a quick question, project inquiry, or initial discussion.",
      action: (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-option-button contact-option-button-outline"
          aria-label="Start a conversation with Zahoor on WhatsApp"
        >
          Start a Conversation
        </a>
      ),
    },
    {
      icon: "email" as const,
      cardClassName: "bg-[linear-gradient(145deg,rgba(27,72,112,0.95),rgba(23,56,95,0.9))]",
      iconClassName:
        "border-[#75d7ee] bg-[linear-gradient(145deg,#167e9d,#175673)] text-[#c5f5ff] shadow-[0_10px_24px_rgba(34,211,238,0.17)]",
      title: "Email Me",
      description:
        "Copy my email address and contact me using your preferred email service.",
      action: (
        <div>
          <p className="mb-3 break-all text-sm font-semibold text-white">
            {CONTACT_CONFIG.emailAddress}
          </p>
          <button
            type="button"
            onClick={copyEmailAddress}
            className="contact-option-button contact-option-button-outline"
            aria-label="Copy Zahoor's email address"
          >
            {hasCopiedEmail ? "Email Copied" : "Copy Email Address"}
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {hasCopiedEmail ? "Email address copied to clipboard" : ""}
          </span>
        </div>
      ),
    },
  ];

  return (
    <section id="contact" className={homeSectionPaddingX}>
      <Script
        id={CALENDLY_SCRIPT_ID}
        src={CALENDLY_SCRIPT_URL}
        strategy="lazyOnload"
        onLoad={handleCalendlyReady}
        onReady={handleCalendlyReady}
        onError={() => {
          setHasCalendlyError(true);
          pendingCalendlyOpen.current = false;
          setIsCalendlyPending(false);
        }}
      />

      <div className={`mx-auto ${homeSectionMaxWidth} animate-fade-up-soft animation-delay-400`}>
        <div className="overflow-hidden rounded-[1.75rem] border border-[#315b86] bg-[linear-gradient(145deg,#122d4d_0%,#193d67_55%,#23558a_100%)] px-7 py-9 text-white shadow-[0_24px_70px_rgba(30,64,105,0.18)] sm:px-9 sm:py-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#7dceff] sm:text-[0.95rem]">
              {contact.eyebrow}
            </p>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight text-white sm:text-[2rem]">
              {contact.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#d3e2f2] sm:text-base sm:leading-7">
              {contact.description}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {contactOptions.map((option) => (
              <article
                key={option.title}
                className={`flex min-h-[290px] flex-col rounded-[1.35rem] border border-[#4774a1] p-6 shadow-[0_14px_30px_rgba(9,30,55,0.16)] ${option.cardClassName}`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full border ${option.iconClassName}`}
                >
                  <span className="block h-7 w-7 [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.7] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]">
                    <ContactIcon name={option.icon} />
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-6 text-white">{option.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#c7d8e9]">{option.description}</p>
                <div className="mt-auto pt-6">{option.action}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
