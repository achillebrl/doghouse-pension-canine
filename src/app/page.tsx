import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryCarousel from "@/components/GalleryCarousel";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="/" />

      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="Pension Canine DogHouse — vue de la pension à Le Rouget-Pers"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Multi-layer overlay for legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,37,51,0.85) 0%, rgba(26,37,51,0.50) 55%, rgba(26,37,51,0.25) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,37,51,0.96) 0%, rgba(26,37,51,0.35) 45%, transparent 72%)",
            }}
          />
        </div>

        {/* Decorative geometric circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-yellow-400/10 pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-60 h-60 rounded-full border border-yellow-400/10 pointer-events-none" />

        {/* Gold vertical accent line */}
        <div
          className="absolute top-0 left-[72px] w-px h-[60%] opacity-30 hidden lg:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--color-gold), transparent)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-divider" />
              <span className="section-label">Le Rouget-Pers · Cantal · France</span>
            </div>

            {/* Main heading */}
            <h1
              className="text-white mb-4"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(3.2rem, 8vw, 7rem)",
                fontWeight: 600,
                lineHeight: 0.92,
              }}
            >
              Pension Canine
              <br />
              <em className="italic" style={{ color: "var(--color-gold)" }}>
                DogHouse
              </em>
            </h1>

            {/* Tagline */}
            <p
              className="text-white/70 mb-8 max-w-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              Le Club de Vacances Premium des chiens
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-10">
              {[
                { value: "10", unit: "max", label: "Pensionnaires" },
                { value: "12m²", unit: "", label: "Courette privative" },
                { value: "ACACED", unit: "", label: "Certifiée depuis 2017" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "var(--color-gold)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-xs text-white/40 uppercase tracking-wider">
                      {stat.unit}
                    </span>
                  )}
                  <span className="text-xs text-white/40 uppercase tracking-wider">
                    · {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://doghousepension.fr/doghouse-pension-canine"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Réserver un séjour</span>
              </a>
              <Link href="/#apropos" className="btn-outline">
                Découvrir la pension
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40 pointer-events-none select-none">
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, var(--color-gold), transparent)",
            }}
          />
          <span
            className="text-[0.6rem] tracking-[0.25em] uppercase"
            style={{
              color: "var(--color-cream)",
              fontFamily: "var(--font-jost), sans-serif",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ─── CLOSURE NOTICE ─── */}
      <section className="py-8" style={{ background: "var(--color-navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="closure-notice p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-yellow-400 text-xl flex-shrink-0">📅</span>
            <div>
              <p
                className="text-[0.65rem] tracking-[0.25em] uppercase mb-1"
                style={{ color: "var(--color-gold)" }}
              >
                Fermetures programmées 2026
              </p>
              <p className="text-sm text-white/60">
                Du samedi{" "}
                <strong className="text-white/80">14 mars 18h</strong> au jeudi{" "}
                <strong className="text-white/80">2 avril inclus</strong>
                &nbsp;·&nbsp; Du samedi{" "}
                <strong className="text-white/80">19 septembre 18h</strong> au
                dimanche{" "}
                <strong className="text-white/80">11 octobre inclus</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEY FEATURES STRIP ─── */}
      <section
        className="py-20 border-b"
        style={{
          borderColor: "rgba(44,62,80,0.08)",
          background: "var(--color-warm-white)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: "🏡",
                title: "Effectif limité",
                desc: "10 pensionnaires maximum pour une attention exclusive",
              },
              {
                icon: "🌿",
                title: "2 Grands parcs",
                desc: "Accès quotidien à des parcs ombragés et sécurisés",
              },
              {
                icon: "🏅",
                title: "ACACED depuis 2017",
                desc: "Professionnelle certifiée et formée en continu",
              },
              {
                icon: "📸",
                title: "Suivi quotidien",
                desc: "Photos et vidéos envoyées aux propriétaires",
              },
            ].map((feat, i) => (
              <div
                key={feat.title}
                className="feature-item text-center group cursor-default"
                data-animate
                data-delay={String(i * 100 + 100)}
              >
                <div
                  className="feature-icon mx-auto mb-4"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <span>{feat.icon}</span>
                </div>
                <h3
                  className="mb-2 font-semibold"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.1rem",
                    color: "var(--color-navy)",
                  }}
                >
                  {feat.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="apropos" className="py-28 about-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image column */}
            <div className="relative" data-animate="fade-left">
              {/* Decorative frame offset */}
              <div
                className="absolute -top-4 -left-4 w-full h-full border pointer-events-none"
                style={{ borderColor: "rgba(201,168,76,0.25)" }}
              />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/assets/about.jpg"
                  alt="Fabienne, responsable de la Pension Canine DogHouse"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(44,62,80,0.3) 0%, transparent 50%)",
                  }}
                />
              </div>
              {/* Floating stat card */}
              <div
                className="absolute -right-6 bottom-12 p-5 shadow-2xl"
                style={{ background: "var(--color-navy)", minWidth: "160px" }}
              >
                <div
                  className="text-4xl font-bold italic mb-1"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: "var(--color-gold)",
                  }}
                >
                  +7
                </div>
                <div className="text-xs text-white/60 leading-tight">
                  ans d&apos;expérience
                  <br />
                  professionnelle
                </div>
              </div>
            </div>

            {/* Content column */}
            <div data-animate="fade-right">
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-divider" />
                <span className="section-label">La Pension</span>
              </div>

              <h2
                className="mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  fontWeight: 600,
                  color: "var(--color-navy)",
                }}
              >
                Un séjour d&apos;exception,
                <br />
                <em className="italic" style={{ color: "var(--color-gold)" }}>
                  pensé dans les moindres détails
                </em>
              </h2>

              <p
                className="text-gray-600 leading-relaxed mb-6"
                style={{ fontSize: "1.05rem" }}
              >
                Gérée par <strong>Fabienne</strong>, professionnelle certifiée
                ACACED depuis 2017, DogHouse propose un séjour hors du commun
                avec un effectif volontairement limité à{" "}
                <strong>10 pensionnaires</strong>. Chaque chien bénéficie d&apos;une
                attention et d&apos;un suivi absolument individualisés.
              </p>

              <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                Chaque pensionnaire dispose d&apos;un espace individuel avec lit
                surélevé, courette privative de 12 m² minimum, musique douce et
                confort thermique optimal — chauffage infrarouge en hiver,
                ventilation en été.
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "ACACED 2017",
                  "Comportement canin",
                  "Premiers secours",
                  "Chiens réactifs",
                  "Massage bien-être",
                  "Conforme ICPE",
                ].map((cert) => (
                  <span key={cert} className="cert-badge text-xs">
                    <span style={{ color: "var(--color-gold)" }}>✦</span>
                    {cert}
                  </span>
                ))}
              </div>

              <Link href="/services" className="btn-primary inline-block">
                <span>Voir les tarifs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES / PREMIUM FEATURES ─── */}
      <section
        className="py-28 overflow-hidden"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="section-label">L&apos;expérience DogHouse</span>
              <div className="gold-divider" />
            </div>
            <h2
              className="text-white leading-tight mb-4"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
              }}
              data-animate
            >
              Tout ce qui rend votre chien
              <br />
              <em className="italic" style={{ color: "var(--color-gold)" }}>
                heureux &amp; épanoui
              </em>
            </h2>
            <p
              className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed"
              data-animate
              data-delay="200"
            >
              Un programme sur mesure alliant confort, stimulation et
              bienveillance
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏠",
                title: "Hébergement individuel",
                desc: "Suite privée avec lit surélevé, courette de 12 m² minimum, musique douce et confort thermique parfait (infrarouge l'hiver, ventilation l'été).",
              },
              {
                icon: "🌳",
                title: "Parcs & activités",
                desc: "Accès quotidien à 2 grands parcs ombragés, piscines, jeux de fouille et exercices de stimulation mentale adaptés à chaque profil.",
              },
              {
                icon: "🤝",
                title: "Socialisation réfléchie",
                desc: "Mise en groupe uniquement avec des chiens compatibles, sous supervision constante et dans le respect du rythme de chacun.",
              },
              {
                icon: "💆",
                title: "Bien-être & soins",
                desc: "Massages bien-être, friandises premium offertes, administration gratuite des traitements médicaux et coordination vétérinaire.",
              },
              {
                icon: "📱",
                title: "Suivi transparent",
                desc: "Photos et vidéos régulières envoyées aux propriétaires pour repartir tranquilles. Votre chien vous manque ? Il a tout pour être heureux.",
              },
              {
                icon: "✅",
                title: "Sécurité & conformité",
                desc: "Établissement conforme ICPE, assurance RC pro, visite obligatoire avant la 1ère garde, méthodes 100% positives et bienveillantes.",
              },
            ].map((feat, i) => (
              <div
                key={feat.title}
                className="p-7 border border-white/10 hover:border-yellow-400/40 transition-all duration-300 group cursor-default"
                data-animate
                data-delay={String((i % 3) * 150 + 100)}
              >
                <div className="text-3xl mb-5">{feat.icon}</div>
                <h3
                  className="text-white mb-3 font-semibold"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.3rem",
                  }}
                >
                  {feat.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feat.desc}
                </p>
                <div
                  className="mt-5 h-px w-8 group-hover:w-full transition-all duration-500"
                  style={{ background: "var(--color-gold)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING PREVIEW ─── */}
      <section className="py-28" style={{ background: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="section-label">Tarifs</span>
              <div className="gold-divider" />
            </div>
            <h2
              className="mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 600,
                color: "var(--color-navy)",
              }}
              data-animate
            >
              Des tarifs transparents,
              <br />
              <em className="italic" style={{ color: "var(--color-gold)" }}>
                sans surprise
              </em>
            </h2>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                dogs: "1 chien",
                price: "20 €",
                period: "jusqu'au 30 juin 2026",
                featured: false,
              },
              {
                dogs: "2 chiens",
                price: "32 €",
                period: "jusqu'au 30 juin 2026",
                featured: true,
              },
              {
                dogs: "3 chiens",
                price: "39 €",
                period: "jusqu'au 30 juin 2026",
                featured: false,
              },
            ].map((plan, i) => (
              <div
                key={plan.dogs}
                className={`price-card p-8 ${plan.featured ? "price-card-featured" : ""}`}
                data-animate
                data-delay={String(i * 150 + 100)}
              >
                <div
                  className="text-[0.62rem] tracking-[0.22em] uppercase mb-3"
                  style={{
                    color: plan.featured
                      ? "rgba(201,168,76,0.8)"
                      : "var(--color-muted)",
                  }}
                >
                  {plan.dogs}
                </div>
                <div
                  className="text-4xl font-bold italic mb-1"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: plan.featured
                      ? "var(--color-gold)"
                      : "var(--color-navy)",
                  }}
                >
                  {plan.price}
                </div>
                <div
                  className="text-xs mb-5"
                  style={{
                    color: plan.featured
                      ? "rgba(255,255,255,0.5)"
                      : "var(--color-muted)",
                  }}
                >
                  / jour · {plan.period}
                </div>
                <div
                  className="text-xs leading-relaxed"
                  style={{
                    color: plan.featured
                      ? "rgba(255,255,255,0.6)"
                      : "#6b7280",
                  }}
                >
                  Chiens de la même famille · Nourriture non incluse
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400 mb-6">
              Tarifs basse &amp; haute saison disponibles à partir du 1er juillet
              2026
            </p>
            <Link href="/services" className="btn-primary inline-block">
              <span>Voir tous les tarifs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section
        id="galerie"
        className="py-28"
        style={{ background: "var(--color-warm-white)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="gold-divider" />
                <span className="section-label">Galerie</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 600,
                  color: "var(--color-navy)",
                  lineHeight: 1.1,
                }}
                data-animate
              >
                La vie à la DogHouse
              </h2>
            </div>
            <a
              href="https://www.instagram.com/dog.house15290"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase flex items-center gap-2 pb-1 transition-opacity duration-300 hover:opacity-70"
              style={{
                color: "var(--color-gold)",
                borderBottom: "1px solid var(--color-gold)",
              }}
            >
              Instagram
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div data-animate>
            <GalleryCarousel />
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        id="temoignages"
        className="py-28"
        style={{ background: "var(--color-cream)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="section-label">Témoignages</span>
              <div className="gold-divider" />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 600,
                color: "var(--color-navy)",
                lineHeight: 1.2,
              }}
              data-animate
            >
              Ce que disent nos familles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marie L.",
                dog: "Golden Retriever",
                text: "Fabienne est une professionnelle hors pair. Notre chien rentre toujours détendu et heureux. Les photos quotidiennes nous rassurent vraiment.",
                stars: 5,
              },
              {
                name: "Pierre & Sophie",
                dog: "2 Labradors",
                text: "Une pension comme nulle part ailleurs. L'espace individuel, la propreté, l'attention portée à nos deux chiens... Tout est parfait. On ne changera jamais !",
                stars: 5,
              },
              {
                name: "Claire M.",
                dog: "Border Collie",
                text: "Notre Border réactif est accueilli avec patience et expertise. Fabienne connaît parfaitement son comportement et adapte tout. Inestimable.",
                stars: 5,
              },
            ].map((testi, i) => (
              <div
                key={testi.name}
                className="testimonial-card p-8"
                data-animate
                data-delay={String(i * 150 + 100)}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5" aria-label={`${testi.stars} étoiles sur 5`}>
                  {Array.from({ length: testi.stars }).map((_, j) => (
                    <span key={j} style={{ color: "var(--color-gold)" }} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                {/* Quote mark */}
                <div
                  className="text-6xl leading-none mb-3 -mt-2 select-none"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: "var(--color-gold)",
                    opacity: 0.3,
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {testi.text}
                </p>
                <div
                  className="pt-5"
                  style={{ borderTop: "1px solid rgba(44,62,80,0.08)" }}
                >
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "var(--color-navy)" }}
                  >
                    {testi.name}
                  </div>
                  <div className="text-xs text-gray-400">{testi.dog}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS BAND ─── */}
      <section className="py-20" style={{ background: "var(--color-navy-dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10", label: "Pensionnaires max" },
              { value: "12m²", label: "Courette privative" },
              { value: "2", label: "Grands parcs" },
              { value: "+7", label: "Ans d'expérience" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                data-animate
                data-delay={String(i * 100 + 100)}
              >
                <div
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "var(--color-gold)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "var(--color-warm-white)" }}
      >
        <div
          className="absolute left-0 top-0 text-[20rem] leading-none select-none pointer-events-none opacity-[0.03]"
          aria-hidden="true"
        >
          🐾
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-divider" />
            <span className="section-label">Réservation</span>
            <div className="gold-divider" />
          </div>
          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              color: "var(--color-navy)",
              lineHeight: 1.1,
            }}
            data-animate
          >
            Offrez à votre chien
            <br />
            <em className="italic" style={{ color: "var(--color-gold)" }}>
              des vacances inoubliables
            </em>
          </h2>
          <p
            className="text-gray-500 leading-relaxed mb-8 text-sm"
            data-animate
            data-delay="200"
          >
            Une visite préalable gratuite est organisée avant tout premier séjour.
            <br />
            Contactez-nous pour vérifier les disponibilités.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-animate
            data-delay="300"
          >
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
    </>
  );
}
