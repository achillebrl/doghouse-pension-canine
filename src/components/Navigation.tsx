"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/#apropos", label: "La Pension" },
    { href: "/services", label: "Tarifs" },
    { href: "/#galerie", label: "Galerie" },
    { href: "/#temoignages", label: "Avis" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-scrolled py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span
              className="text-gold font-display text-2xl font-bold italic leading-none"
              style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-gold)" }}
            >
              DogHouse
            </span>
            <span
              className="text-[0.55rem] tracking-[0.3em] uppercase"
              style={{ color: "rgba(248, 245, 238, 0.7)", fontFamily: "var(--font-jost), sans-serif" }}
            >
              Pension Canine
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  activePage === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://doghousepension.fr/doghouse-pension-canine"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Réserver</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
              style={{ color: "var(--color-cream)" }}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
              style={{ backgroundColor: "var(--color-cream)" }}
            />
            <span
              className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
              style={{ color: "var(--color-cream)" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 mobile-menu flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link text-lg"
            style={{ animationDelay: `${i * 0.08}s` }}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://doghousepension.fr/doghouse-pension-canine"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4"
          onClick={() => setMobileOpen(false)}
        >
          <span>Réserver</span>
        </a>
      </div>
    </>
  );
}