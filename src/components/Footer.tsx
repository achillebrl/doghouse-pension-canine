import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-bg text-white/70">
      {/* Top accent */}
      <div className="h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <div
                className="text-4xl font-bold italic mb-1"
                style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-gold)" }}
              >
                DogHouse
              </div>
              <div
                className="text-[0.6rem] tracking-[0.35em] uppercase"
                style={{ color: "rgba(248,245,238,0.5)" }}
              >
                Pension Canine Premium
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              Le Club de Vacances Premium des chiens. Un hébergement d&apos;exception pour les compagnons d&apos;exception.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/dog.house15290"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100059757916898"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[0.65rem] tracking-[0.25em] uppercase mb-6"
              style={{ color: "var(--color-gold)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/#apropos", label: "La Pension" },
                { href: "/services", label: "Tarifs & Réservation" },
                { href: "/#galerie", label: "Galerie" },
                { href: "/#temoignages", label: "Avis clients" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-[8px]" style={{ color: "var(--color-gold)" }}>✦</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[0.65rem] tracking-[0.25em] uppercase mb-6"
              style={{ color: "var(--color-gold)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5 text-sm">📍</span>
                <span className="text-sm text-white/50">
                  Le Rouget-Pers<br />
                  Cantal, France<br />
                  <span className="text-white/30">23 km d&apos;Aurillac</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400 text-sm">📞</span>
                <a
                  href="tel:+33676323778"
                  className="text-sm text-white/50 hover:text-yellow-400 transition-colors"
                >
                  +33 6 76 32 37 78
                </a>
              </li>
            </ul>

            <div className="mt-8 closure-notice p-4 rounded">
              <p className="text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: "var(--color-gold)" }}>
                Fermeture 2026
              </p>
              <p className="text-xs text-white/50 leading-relaxed">
                14 mars 18h → 2 avril inclus<br />
                19 sept. 18h → 11 oct. inclus
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © 2025 Pension Canine DogHouse · Le Rouget-Pers, Cantal
            </p>
            <p className="text-xs text-white/30">
              Certifiée ACACED · Conforme ICPE · Méthodes positives
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}