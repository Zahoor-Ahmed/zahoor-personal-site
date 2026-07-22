"use client";

import { useEffect, useRef, useState } from "react";

export function ProductComingSoonButton({ productTitle }: { productTitle: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  const showComingSoon = () => {
    setIsVisible(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setIsVisible(false), 3000);
  };

  return (
    <button
      type="button"
      onClick={showComingSoon}
      className={`mt-4 inline-flex min-h-9 min-w-32 items-center justify-center self-start rounded-full text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 ${
        isVisible
          ? "bg-sky-600 px-3 text-white shadow-[0_6px_16px_rgba(2,132,199,0.28)]"
          : "px-0 text-sky-600 hover:text-sky-700"
      }`}
      aria-label={`View ${productTitle}`}
    >
      <span aria-hidden="true">{isVisible ? "Coming soon" : "View product →"}</span>
      <span className="sr-only" role="status" aria-live="polite">
        {isVisible ? `${productTitle} is coming soon` : ""}
      </span>
    </button>
  );
}
