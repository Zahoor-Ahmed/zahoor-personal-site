"use client";

import Link from "next/link";
import { type MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

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

const MOBILE_MENU_HASH = "site-mobile-menu";

export function Navbar({ links, siteName }: NavbarProps) {
  const [activeHref, setActiveHref] = useState("#top");
  const headerRef = useRef<HTMLElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const scrollSpyPausedRef = useRef(false);
  const scrollSpyTimeoutRef = useRef<number | null>(null);

  const navItems = useMemo(
    () => [{ label: "Home", href: "#top" }, ...links],
    [links],
  );

  const getScrollOffset = useCallback(() => {
    const fallback = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--site-scroll-offset"),
    );

    return navbarRef.current?.getBoundingClientRect().bottom ?? (fallback || 86);
  }, []);

  const updateHeaderHeight = useCallback(() => {
    if (!headerRef.current) {
      return;
    }

    document.documentElement.style.setProperty(
      "--site-mobile-header-height",
      `${headerRef.current.offsetHeight}px`,
    );
  }, []);

  useEffect(() => {
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [updateHeaderHeight]);

  useEffect(() => {
    const syncActiveFromHash = () => {
      const hash = window.location.hash || "#top";
      const matchingItem = navItems.find((item) => item.href === hash);

      if (matchingItem) {
        setActiveHref(matchingItem.href);
      }
    };

    syncActiveFromHash();
    window.addEventListener("hashchange", syncActiveFromHash);

    return () => {
      window.removeEventListener("hashchange", syncActiveFromHash);
    };
  }, [navItems]);

  useEffect(() => {
    const updateActiveLink = () => {
      if (scrollSpyPausedRef.current) {
        return;
      }

      const offset = getScrollOffset();
      const documentHeight = document.documentElement.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;

      if (viewportBottom >= documentHeight - 4) {
        setActiveHref(navItems[navItems.length - 1]?.href ?? "#top");
        return;
      }

      let currentHref = "#top";

      for (const item of navItems) {
        const id = item.href.startsWith("#") ? item.href.slice(1) : "";
        const section = id ? document.getElementById(id) : null;

        if (section && section.getBoundingClientRect().top <= offset) {
          currentHref = item.href;
        }
      }

      setActiveHref(currentHref);
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);

      if (scrollSpyTimeoutRef.current) {
        window.clearTimeout(scrollSpyTimeoutRef.current);
      }
    };
  }, [getScrollOffset, navItems]);

  const getDesktopLinkClassName = (href: string) =>
    `site-navbar-link${activeHref === href ? " site-navbar-link-active" : ""}`;

  const getMobileLinkClassName = (href: string) =>
    `site-navbar-mobile-link${activeHref === href ? " site-navbar-mobile-link-active" : ""}`;

  const handleDesktopNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.startsWith("#") ? href.slice(1) : "";
    const section = id ? document.getElementById(id) : null;

    if (!section) {
      return;
    }

    event.preventDefault();

    scrollSpyPausedRef.current = true;

    if (scrollSpyTimeoutRef.current) {
      window.clearTimeout(scrollSpyTimeoutRef.current);
    }

    scrollSpyTimeoutRef.current = window.setTimeout(() => {
      scrollSpyPausedRef.current = false;
    }, 900);

    setActiveHref(href);

    const targetTop = Math.max(
      0,
      section.getBoundingClientRect().top + window.scrollY - getScrollOffset(),
    );

    window.history.pushState(null, "", href);
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <div className="site-nav-shell">
      <div id={MOBILE_MENU_HASH} className="site-mobile-menu-layer" tabIndex={-1}>
        <a href="#close-menu" className="site-navbar-mobile-backdrop" aria-label="Close navigation menu" />

        <div
          id="site-mobile-navigation"
          className={`site-navbar-mobile-panel ${homeSectionPaddingX}`}
        >
          <div className={`mx-auto w-full ${homeSectionMaxWidth}`}>
            <nav className="site-navbar-mobile-links" aria-label="Mobile navigation">
              {navItems.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={getMobileLinkClassName(link.href)}
                  aria-current={activeHref === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <header ref={headerRef} className={`site-header ${homeSectionPaddingX}`}>
        <div ref={navbarRef} className={`site-navbar mx-auto w-full ${homeSectionMaxWidth}`}>
          <Link href="/" className="site-navbar-logo">
            {siteName}
          </Link>

          <nav className="site-navbar-links" aria-label="Main navigation">
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleDesktopNavClick(event, link.href)}
                className={getDesktopLinkClassName(link.href)}
                aria-current={activeHref === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={`#${MOBILE_MENU_HASH}`}
            className="site-navbar-menu-btn site-navbar-menu-open"
            aria-label="Open navigation menu"
          >
            <span className="site-navbar-menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </a>

          <a
            href="#close-menu"
            className="site-navbar-menu-btn site-navbar-menu-close"
            aria-label="Close navigation menu"
          >
            <span className="site-navbar-menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </a>
        </div>
      </header>

      <div className="site-header-spacer" aria-hidden="true" />
    </div>
  );
}
