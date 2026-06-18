"use client";

import Link from "next/link";
import { useState } from "react";

import { homeSectionMaxWidth, homeSectionPaddingX } from "@/app/components/home/section-layout";

import "./navbar.css";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: readonly NavLink[];
  siteName: string;
};

export function Navbar({ links, siteName }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`site-header ${homeSectionPaddingX}`}>
      <div className={`site-navbar mx-auto ${homeSectionMaxWidth}`}>
        <Link href="/" className="site-navbar-logo">
          {siteName}
        </Link>

        <nav className="site-navbar-links" aria-label="Main navigation">
          <a href="#top" className="site-navbar-link site-navbar-link-active">
            Home
          </a>
          {links.map((link) => (
            <a key={link.href} href={link.href} className="site-navbar-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
          className="site-navbar-menu-btn"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
          </div>
        </button>
      </div>

      {isOpen ? (
        <div className={`site-navbar-mobile-panel mx-auto ${homeSectionMaxWidth}`}>
          <nav className="site-navbar-mobile-links" aria-label="Mobile navigation">
            <a
              href="#top"
              onClick={() => setIsOpen(false)}
              className="site-navbar-mobile-link site-navbar-mobile-link-active"
            >
              Home
            </a>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="site-navbar-mobile-link"
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
