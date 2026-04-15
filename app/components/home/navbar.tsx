"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: readonly NavLink[];
};

export function Navbar({ links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f6f8fb] px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-0.5">
        <Link
          href="/"
          className="ml-[70px] text-sm font-bold uppercase tracking-[0.3em] text-slate-950"
        >
          Zahoor Ahmed
        </Link>

        <nav className="hidden items-center md:flex">
          <a
            href="#top"
            className="rounded-[0.35rem] bg-[#a87908] px-5 py-2 text-sm font-medium text-white"
          >
            Home
          </a>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-l border-slate-900/25 px-5 py-2 text-sm font-medium text-slate-950 transition hover:text-[#a87908]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-950 transition hover:border-slate-400 hover:bg-slate-50 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
          </div>
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-6xl border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:hidden">
          <nav className="flex flex-col gap-2">
            <a
              href="#top"
              onClick={() => setIsOpen(false)}
              className="rounded-[0.35rem] bg-[#a87908] px-4 py-3 text-sm font-medium text-white"
            >
              Home
            </a>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
