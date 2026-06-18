"use client";

import Link from "next/link";
import {
  type MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

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

const subscribeNoop = () => () => {};

export function Navbar({ links, siteName }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
  const [menuTop, setMenuTop] = useState("4.5rem");
  const navbarRef = useRef<HTMLDivElement>(null);
  const scrollSpyPausedRef = useRef(false);
  const scrollSpyTimeoutRef = useRef<number | null>(null);
  const isClient = useSyncExternalStore(subscribeNoop, () => true, () => false);

  const navItems = useMemo(
    () => [{ label: "Home", href: "#top" }, ...links],
    [links],
  );

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const getScrollOffset = useCallback(() => {
    const fallback = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--site-scroll-offset"),
    );

    return navbarRef.current?.getBoundingClientRect().bottom ?? (fallback || 86);
  }, []);

  const updateMenuTop = useCallback(() => {
    if (!navbarRef.current) {
      return;
    }

    const bottom = navbarRef.current.getBoundingClientRect().bottom;
    setMenuTop(`${bottom + 8}px`);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    updateMenuTop();
    window.addEventListener("resize", updateMenuTop);

    return () => {
      window.removeEventListener("resize", updateMenuTop);
    };
  }, [isOpen, updateMenuTop]);

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

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeMenu, isOpen]);

  const getDesktopLinkClassName = (href: string) =>
    `site-navbar-link${activeHref === href ? " site-navbar-link-active" : ""}`;

  const getMobileLinkClassName = (href: string) =>
    `site-navbar-mobile-link${activeHref === href ? " site-navbar-mobile-link-active" : ""}`;

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
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

    window.setTimeout(closeMenu, 180);
  };

  const mobileOverlay =
    isOpen && isClient
      ? createPortal(
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              className="site-navbar-mobile-backdrop"
              onClick={closeMenu}
            />

            <div
              id="site-mobile-navigation"
              className={`site-navbar-mobile-panel ${homeSectionPaddingX}`}
              style={{ top: menuTop }}
            >
              <div className={`mx-auto w-full ${homeSectionMaxWidth}`}>
                <nav className="site-navbar-mobile-links" aria-label="Mobile navigation">
                  {navItems.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link.href)}
                      className={getMobileLinkClassName(link.href)}
                      aria-current={activeHref === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <header className={`site-header ${homeSectionPaddingX}`}>
        <div ref={navbarRef} className={`site-navbar mx-auto w-full ${homeSectionMaxWidth}`}>
          <Link href="/" className="site-navbar-logo">
            {siteName}
          </Link>

          <nav className="site-navbar-links" aria-label="Main navigation">
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={getDesktopLinkClassName(link.href)}
                aria-current={activeHref === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="site-mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="site-navbar-menu-btn"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <div className="space-y-1.5" aria-hidden="true">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </div>
          </button>
        </div>
      </header>

      {mobileOverlay}
    </>
  );
}
