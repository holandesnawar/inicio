"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

type NavTheme = "dark" | "light";

export default function Navbar() {
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [menuClosing,  setMenuClosing]  = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname  = usePathname();

  // Anchor links (#section) stay as-is on the homepage; get /#section prefix everywhere else
  const r = (href: string) =>
    href.startsWith("#") ? (pathname === "/" ? href : `/${href}`) : href;

  /* ── scroll / theme detection ── */
  const update = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;

    const sy = window.scrollY;
    const vh = window.innerHeight;

    const readTheme = (el: Element | null): NavTheme | null => {
      let node: Element | null = el;
      while (node) {
        const t = node.getAttribute("data-navbar");
        if (t === "light" || t === "dark") return t as NavTheme;
        node = node.parentElement;
      }
      return null;
    };

    // Enter light: detect at navbar bottom (y=72) — react fast
    const themeBottom = readTheme(document.elementFromPoint(window.innerWidth / 2, 72));
    // Leave light: only fade out once very top of viewport is dark (y=4) — hysteresis
    const themeTop    = readTheme(document.elementFromPoint(window.innerWidth / 2, 4));

    if (themeBottom === "light") {
      // Entering a light section — smooth fade in
      header.style.transition = "background-color 0.55s ease";
      header.style.backgroundColor = "rgba(29,0,132,1)";
    } else if (themeTop === "dark" && sy > vh * 0.9) {
      // Fully inside a post-hero dark section — smooth fade out
      header.style.transition = "background-color 0.55s ease";
      header.style.backgroundColor = "rgba(29,0,132,0)";
    } else {
      // Inside hero: gradient tied to scroll — no CSS transition (scroll IS the animation)
      const fadeStart = vh * 0.38;
      const fadeEnd   = vh * 0.84;
      const opacity   = Math.min(1, Math.max(0, (sy - fadeStart) / (fadeEnd - fadeStart)));
      header.style.transition = "none";
      header.style.backgroundColor = `rgba(29,0,132,${opacity.toFixed(3)})`;
    }
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  /* ── close on wide viewport ── */
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) closeMenu(); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  /* ── body scroll lock while menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const openMenu = () => {
    setMenuClosing(false);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    if (!menuOpen) return;
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 420);
  };

  const handleLink = () => closeMenu();

  const isMenuVisible = menuOpen || menuClosing;

  return (
    <>
      {/* ────────────────────────────────────────
          HEADER
      ──────────────────────────────────────── */}
      <header
        ref={headerRef}
        className="fixed top-0 inset-x-0 z-50"
        style={{ backgroundColor: "rgba(29,0,132,0)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-[72px] flex items-center justify-between gap-8">

            {/* Logo */}
            <a href="/" className="shrink-0">
              <img
                src="https://d1yei2z3i6k35z.cloudfront.net/9533860/671a9c9265e23_Logo_Nawar_2.png"
                alt="Nawar"
                className="h-10 md:h-9 w-auto object-contain"
              />
            </a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={r(link.href)}
                  className="px-4 py-2 text-[15px] font-medium text-white/88 hover:text-white/50 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#"
                className="text-[14px] font-medium text-white/68 hover:text-white/40 transition-colors duration-200 px-3 py-2"
              >
                Contacto
              </a>
              <a
                href={r("#lista-espera")}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-[14px] font-semibold rounded-xl bg-[#4da3ff] text-white hover:bg-[#69baff] transition-all duration-200 shadow-[0_2px_16px_rgba(77,163,255,0.35)]"
              >
                Lista de espera
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Mobile: Únete CTA + burger */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href={r("#lista-espera")}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#4da3ff] text-white text-[14px] font-semibold hover:bg-[#5eb4ff] transition-all duration-200"
              >
                Únete
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button
                onClick={openMenu}
                className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Abrir menú"
              >
                <span className="flex flex-col gap-[5px] w-5">
                  <span className="block h-[1.5px] bg-current rounded-full" />
                  <span className="block h-[1.5px] bg-current rounded-full w-[70%]" />
                  <span className="block h-[1.5px] bg-current rounded-full" />
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ────────────────────────────────────────
          MOBILE FULLSCREEN OVERLAY
      ──────────────────────────────────────── */}
      {isMenuVisible && (
        <div
          className={`fixed inset-0 z-[100] bg-[#1D0084] flex flex-col ${menuClosing ? "menu-lift" : "menu-drop"}`}
        >
          {/* Subtle background details — matches Hero */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(11,109,240,0.30) 0%, transparent 65%)",
            }}
          />
          <div aria-hidden className="absolute inset-0 dots-dark pointer-events-none opacity-35" />

          {/* Center: links + buttons */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8">
            <nav className="w-full">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={r(link.href)}
                  onClick={handleLink}
                  className="block py-3.5 text-[21px] font-semibold text-white hover:text-white/80 text-center transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-poppins), system-ui, sans-serif",
                    animation: `link-reveal 0.55s cubic-bezier(0.16,1,0.3,1) ${0.10 + i * 0.065}s forwards`,
                    opacity: 0,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Buttons — directly below links */}
            <div
              className="w-full mt-5 space-y-3"
              style={{
                animation: `link-reveal 0.55s cubic-bezier(0.16,1,0.3,1) ${0.10 + NAV_LINKS.length * 0.065 + 0.05}s forwards`,
                opacity: 0,
              }}
            >
              <a
                href="#"
                onClick={handleLink}
                className="flex w-full items-center justify-center px-6 py-4 text-[15px] font-semibold rounded-xl bg-white/8 border border-white/16 text-white/80 hover:bg-white/12 hover:text-white transition-all duration-200"
              >
                Conectarse
              </a>
              <a
                href={r("#lista-espera")}
                onClick={handleLink}
                className="flex w-full items-center justify-center gap-2.5 px-6 py-4 text-[16px] font-semibold rounded-xl bg-[#4da3ff] text-white hover:bg-[#5eb4ff] transition-all duration-200 shadow-[0_4px_20px_rgba(77,163,255,0.30)]"
              >
                Lista de espera
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Close button — bottom center */}
          <div
            className="relative z-10 pb-12 flex justify-center flex-shrink-0"
            style={{
              animation: `link-reveal 0.55s cubic-bezier(0.16,1,0.3,1) ${0.10 + NAV_LINKS.length * 0.065 + 0.15}s forwards`,
              opacity: 0,
            }}
          >
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center text-white hover:text-white/70 transition-colors duration-200"
              aria-label="Cerrar menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
