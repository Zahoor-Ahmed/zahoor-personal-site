"use client";

import { useEffect } from "react";

export function ScrollRevealController() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.setAttribute("data-revealed", "true"));
      return;
    }

    const reveal = (element: HTMLElement) => {
      element.setAttribute("data-revealed", "true");
      observer.unobserve(element);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    elements.forEach((element) => {
      const delay = Number(element.dataset.revealDelay ?? 0);
      element.style.setProperty("--reveal-delay", `${delay}ms`);

      const bounds = element.getBoundingClientRect();
      if (bounds.bottom <= 0) {
        element.setAttribute("data-revealed", "true");
        return;
      }

      element.setAttribute("data-reveal-ready", "true");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
