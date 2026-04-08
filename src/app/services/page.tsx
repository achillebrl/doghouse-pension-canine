import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services & Tarifs | Pension Canine DogHouse",
  description:
    "Découvrez les prestations et tarifs de la Pension Canine DogHouse, hébergement premium pour chiens à Le Rouget-Pers (23 km d'Aurillac, Cantal).",
};

const pricingCurrent = [
  {
    name: "1 chien",
    price: "20 €",
    period: "/ jour",
    description: "Hébergement individuel premium. Nourriture non incluse.",
  },
  {
    name: "2 chiens",
    price: "32 €",
    period: "/ jour",
    description: "2 chiens de la même famille. Nourriture non incluse.",
    featured: true,
  },
  {
    name: "3 chiens",
    price: "39 €",
    period: "/ jour",
    description: "3 chiens de la même famille. Nourriture non incluse.",
  },
];

const pricingLowSeason = [
  {
    name: "1 chien — Basse saison",
    price: "23 €",
    period: "/ jour",
    description: "Hors vacances scolaires zone A. Nourriture non incluse.",
  },
  {
    name: "2 chiens — Basse saison",
    price: "35 €",
    period: "/ jour",
    description: "2 chiens de la même famille, hors vacances scolaires zone A. Nourriture non incluse.",
  },
  {
    name: "3 chiens — Basse saison",
    price: "45 €",
    period: "/ jour",
    description: "3 chiens de la même famille, hors vacances scolaires zone A. Nourriture non incluse.",
  },
];

const pricingHighSeason = [
  {
    name: "1 chien — Haute saison",
    price: "26 €",
    period: "/ jour",
    description: "Vacances scolaires zone A. Nourriture non incluse.",
  },
  {
    name: "2 chiens — Haute saison",
    price: "40 €",
    period: "/ jour",
    description: "2 chiens de la même famille, vacances scolaires zone A. Nourriture non incluse.",
    featured: true,
  },
  {
    name: "3 chiens — Haute saison",
    price: "52 €",
    period: "/ jour",
    description: "3 chiens de la même famille, vacances scolaires zone A. Nourriture non incluse.",
  },
];

function PricingCard({
  name,
  price,
  period,
  description,
  featured = false,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center text-center p-8 border transition-shadow duration-300 ${
        featured
          ? "border-[var(--color-gold)] bg-[var(--color-navy)] shadow-xl"
          : "border-[var(--color-border)] bg-[var(--color-warm-white)] hover:shadow-md"
      }`}
    >
      <div className="w-8 h-px bg-[var(--color-gold)] mb-6" />
      <h3
        className="mb-4 leading-snug"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "1.2rem",
          fontWeight: 600,
          color: featured ? "rgba(255,255,255,0.9)" : "var(--color-navy)",
        }}
      >
        {name}
      </h3>
      <p
        className="mb-1"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "2.8rem",
          fontWeight: 700,
          color: "var(--color-gold)",
          lineHeight: 1,
        }}
      >
        {price}
      </p>
      <p
        className="text-xs mb-5"
        style={{ color: featured ? "rgba(255,255,255,0.4)" : "var(--color-muted)" }}
      >
        {period}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ color: featured ? "rgba(255,255,255,0.55)" : "var(--color-muted)" }}
      >
        {description}
      </p>
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="text-center mb-10">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="gold-divider" />
        <span className="section-label">{label}</span>
        <div className="gold-divider" />
      </div>
      <div className="w-10 h-px bg-[var(--color-gold)] mx-auto" />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--color-cream)" }}>
      <Navigation activePage="services" />

      {/* ─── PAGE HERO ─── */}
      <section
        className="pt-40 pb-20 px-6 text-center"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-divider" />
            <span className="section-label">Pension Canine DogHouse</span>
            <div className="gold-divider" />
          </div>
          <h1
            className="mb-5 leading-tight text-white"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 600,
            }}
          >
            Nos Prestations &{" "}
            <em className="italic" style={{ color: "var(--color-gold)" }}>
              Tarifs
            </em>
          </h1>
          <p
            className="leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.05rem",
              fontFamily: "var(--font-jost), sans-serif",
              fontWeight: 300,
            }}
          >
            Un hébergement soigné et individualisé pour votre compagnon, dans un
            cadre pensé pour son bien-être et votre sérénité.
          </p>
        </div>
      </section>

      {/* ─── INCLUDED IN EVERY STAY ─── */}
      <section className="py-20 px-6" style={{ background: "var(--color-warm-white)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="section-label">Inclus dans chaque séjour</span>
              <div className="gold-divider" />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 600,
                color: "var(--color-navy)",
              }}
            >
              Une expérience complète,{" "}
              <em className="italic" style={{ color: "var(--color-gold)" }}>
                sans supplément
              </em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏠", label: "Suite individuelle avec lit surélevé" },
              { icon: "🌿", label: "Courette privative ≥ 12 m²" },
              { icon: "🌳", label: "Accès quotidien aux 2 grands parcs" },
              { icon: "🎵", label: "Musique douce & confort thermique" },
              { icon: "💆", label: "Massages bien-être inclus" },
              { icon: "💊", label: "Administration des traitements médicaux" },
              { icon: "🍖", label: "Friandises premium offertes" },
              { icon: "📸", label: "Photos & vidéos quotidiennes" },
              { icon: "🤝", label: "Socialisation surveillée & adaptée" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-5 border"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-cream)",
                }}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span
                  className="text-sm"
                  style={{
                    color: "var(--color-navy)",
                    fontFamily: "var(--font-jost), sans-serif",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING: CURRENT (until 30 june 2026) ─── */}
      <section className="py-20 px-6" style={{ background: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionDivider label="Tarifs actuels" />
          <h2
            className="text-center mb-3"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 600,
              color: "var(--color-navy)",
            }}
          >
            En vigueur{" "}
            <em className="italic" style={{ color: "var(--color-gold)" }}>
              jusqu'au 30 juin 2026
            </em>
          </h2>
          <p
            className="text-center text-sm mb-10"
            style={{ color: "var(--color-muted)" }}
          >
            Chiens de la même famille · Nourriture non incluse
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingCurrent.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING: FROM JULY 2026 ─── */}
      <section className="py-20 px-6" style={{ background: "var(--color-warm-white)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionDivider label="Nouveaux tarifs" />
          <h2
            className="text-center mb-3"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 600,
              color: "var(--color-navy)",
            }}
          >
            À partir du{" "}
            <em className="italic" style={{ color: "var(--color-gold)" }}>
              1er juillet 2026
            </em>
          </h2>
          <p
            className="text-center text-sm mb-12"
            style={{ color: "var(--color-muted)" }}
          >
            Deux grilles tarifaires selon la période · Nourriture non incluse
          </p>

          {/* Low season */}
          <h3
            className="text-center mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.4rem",
              fontWeight: 500,
              color: "var(--color-navy)",
            }}
          >
            Basse saison{" "}
            <span
              className="text-sm font-normal"
              style={{
                color: "var(--color-muted)",
                fontFamily: "var(--font-jost), sans-serif",
              }}
            >
              (hors vacances scolaires zone A)
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {pricingLowSeason.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>

          {/* High season */}
          <h3
            className="text-center mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.4rem",
              fontWeight: 500,
              color: "var(--color-navy)",
            }}
          >
            Haute saison{" "}
            <span
              className="text-sm font-normal"
              style={{
                color: "var(--color-muted)",
                fontFamily: "var(--font-jost), sans-serif",
              }}
            >
              (vacances scolaires zone A)
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingHighSeason.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOD NOTE + CTA ─── */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="section-label">À noter</span>
            <div className="gold-divider" />
          </div>
          <p
            className="mb-3 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem" }}
          >
            La nourriture n'est pas incluse dans nos formules. Merci de prévoir
            les croquettes habituelles de votre chien afin de préserver ses
            habitudes alimentaires et son confort digestif.
          </p>
          <p
            className="mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}
          >
            Une visite préalable gratuite est organisée avant tout premier séjour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://doghousepension.fr/doghouse-pension-canine"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Réserver en ligne</span>
            </a>
            <a href="tel:+33676323778" className="btn-outline">
              +33 6 76 32 37 78
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
