"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Check, X, ArrowRight, Shield, Clock, CreditCard,
  ChevronDown, Sparkles, Users, Heart
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

/* ═══════════ Animation System ═══════════ */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const cardReveal = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: i * 0.15, ease: EASE },
  }),
};

/* ═══════════ Pricing Data ═══════════ */
const plans = [
  {
    name: "La Carte de Visite",
    price: "300 – 500",
    currency: "€",
    target: "Étudiants · Freelances · Mariages",
    description:
      "L'essentiel pour exister en ligne. Une page unique, efficace et belle.",
    features: [
      "Site one-page responsive",
      "Design personnalisé et sur mesure",
      "Formulaire de contact intégré",
      "Intégration de vos textes et photos",
      "Un site rapide et visible sur Google",
      "Livraison en 7 jours ouvrés",
      "Formation de prise en main (30 min)",
    ],
    notIncluded: ["Gestion de contenu (CMS)", "Blog", "E-commerce"],
    featured: false,
    badge: null,
    icon: Heart,
    delay: "7 jours",
  },
  {
    name: "Le Dynamique",
    price: "600 – 900",
    currency: "€",
    target: "Passionnés · Blogueurs · Créateurs",
    description:
      "Le site complet pour ceux qui veulent publier et grandir.",
    features: [
      "Jusqu'à 5 pages sur mesure",
      "Vous modifiez vos textes vous-même",
      "Blog intégré et prêt à publier",
      "Référencement optimisé (SEO)",
      "Formulaire de contact avancé",
      "Formation d'utilisation complète (1h)",
      "Accompagnement nom de domaine",
      "Accompagnement hébergement",
    ],
    notIncluded: ["E-commerce / paiement en ligne"],
    featured: true,
    badge: "Le plus populaire",
    icon: Sparkles,
    delay: "10–14 jours",
  },
  {
    name: "La Mini-Boutique",
    price: "1 000 – 1 500",
    currency: "€",
    target: "Artisans · Créateurs · Vide-dressing",
    description:
      "Pour vendre vos créations en toute simplicité.",
    features: [
      "Site vitrine complet + boutique en ligne",
      "Jusqu'à 20 produits référencés",
      "Paiement sécurisé par carte (Stripe)",
      "Gestion simplifiée des stocks",
      "Pages produit optimisées",
      "Référencement SEO complet",
      "Accompagnement complet A à Z",
      "Formation complète (2h)",
      "100% propriétaire du site",
    ],
    notIncluded: [],
    featured: false,
    badge: "Tout inclus",
    icon: Users,
    delay: "14–21 jours",
  },
];

/* ═══════════ FAQ Data ═══════════ */
const faqs = [
  {
    q: "Est-ce que je suis vraiment propriétaire de mon site ?",
    a: "Oui, à 100%. Une fois la facture réglée, le site, le code source, et le nom de domaine sont à vous. Vous pouvez partir avec quand vous voulez.",
  },
  {
    q: "Je n'y connais rien en technologie, c'est grave ?",
    a: "Pas du tout. On s'occupe de tout. On vous forme ensuite à modifier vos textes et photos. C'est aussi simple que d'écrire un email.",
  },
  {
    q: "Combien de temps pour avoir mon site ?",
    a: "La Carte de Visite : 7 jours. Le Dynamique : 10 à 14 jours. La Mini-Boutique : 14 à 21 jours. On respecte toujours nos délais.",
  },
  {
    q: "Je peux payer en plusieurs fois ?",
    a: "Oui, on propose le paiement en 2 ou 3 fois sans frais. 50% à la commande, le solde à la livraison (ou en 3 mensualités).",
  },
  {
    q: "Est-ce qu'il y a des frais cachés ?",
    a: "Aucun. Le tarif affiché inclut tout : design, développement, formation, et mise en ligne. Les seuls frais récurrents sont le nom de domaine (~12€/an) et l'hébergement (~5€/mois), que vous payez directement au fournisseur.",
  },
];

/* ═══════════ FAQ Accordion Item ═══════════ */
function FaqItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="border-b border-[var(--pm-border)] last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group cursor-pointer"
        style={{ padding: "clamp(1.5rem, 3vw, 2.5rem) 0" }}
        aria-expanded={isOpen}
      >
        <h3 className="text-base md:text-lg font-semibold text-[var(--pm-indigo)] pr-12 group-hover:text-[var(--pm-coral)] transition-colors duration-300">
          {faq.q}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="shrink-0 w-10 h-10 rounded-full bg-[var(--pm-peach)] flex items-center justify-center"
        >
          <ChevronDown size={18} className="text-[var(--pm-coral)]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p
              className="text-sm md:text-base text-[var(--pm-slate)] leading-relaxed pr-16"
              style={{ paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════ PAGE ═══════════ */
export default function FormulesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full">

      {/* ═══════════ HERO HEADER ═══════════ */}
      <section className="relative overflow-hidden" style={{ paddingBottom: "clamp(4rem, 7vw, 7rem)" }}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-[var(--pm-peach)] rounded-bl-[120px] opacity-30 pointer-events-none" />
        <div className="absolute top-32 right-32 w-48 h-48 rounded-full bg-[var(--pm-coral)] opacity-[0.06] blur-3xl pointer-events-none" />

        <div className="container-pm relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} className="text-label block" style={{ marginBottom: "clamp(1rem, 2vw, 1.5rem)" }}>
              Nos formules
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-display" style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              Des prix clairs.{" "}
              <span className="text-[var(--pm-coral)]">Pas de surprise.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-subheading max-w-xl">
              Chaque tarif inclut le design, le développement, la formation, et l'accompagnement.
              Vous choisissez, on s'occupe du reste.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <section style={{ paddingTop: "clamp(2rem, 4vw, 4rem)", paddingBottom: "clamp(4rem, 8vw, 8rem)" }}>
        <div className="container-pm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="flex flex-wrap justify-center gap-10 md:gap-20"
          >
            {[
              { icon: Shield, text: "100% propriétaire" },
              { icon: Clock, text: "Livraison 7 à 21 jours" },
              { icon: CreditCard, text: "Paiement en 2 ou 3×" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                variants={fadeUp}
                custom={i}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--pm-peach)] flex items-center justify-center">
                  <item.icon size={20} className="text-[var(--pm-coral)]" />
                </div>
                <span className="text-sm md:text-base font-medium text-[var(--pm-indigo)]">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PRICING CARDS ═══════════ */}
      <section style={{ paddingBottom: "clamp(6rem, 10vw, 10rem)" }}>
        <div className="container-pm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-start"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={cardReveal}
                custom={i}
                className={`relative rounded-3xl border transition-all duration-500 ${
                  plan.featured
                    ? "border-[var(--pm-coral)] bg-white shadow-[0_16px_64px_rgba(212,101,74,0.12)] lg:-mt-6 lg:mb-6"
                    : "border-[var(--pm-border)] bg-white hover:shadow-[0_12px_48px_rgba(15,23,42,0.08)] hover:border-[rgba(212,101,74,0.2)]"
                }`}
                style={{ willChange: "transform" }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-4 left-8 px-5 py-2 text-white text-xs font-semibold rounded-full shadow-md ${
                      plan.featured ? "bg-[var(--pm-coral)]" : "bg-[var(--pm-indigo)]"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Card top content */}
                <div style={{ padding: "clamp(2rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem) 0" }}>
                  {/* Icon + target */}
                  <div className="flex items-center gap-3" style={{ marginBottom: "clamp(1.5rem, 3vw, 2rem)" }}>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        plan.featured ? "bg-[var(--pm-coral)]/10" : "bg-[var(--pm-peach)]"
                      }`}
                    >
                      <plan.icon size={22} className="text-[var(--pm-coral)]" />
                    </div>
                    <p className="text-xs font-medium tracking-wide text-[var(--pm-muted)] uppercase">
                      {plan.target}
                    </p>
                  </div>

                  {/* Name */}
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--pm-indigo)]" style={{ marginBottom: "clamp(0.75rem, 1.5vw, 1rem)" }}>
                    {plan.name}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-[var(--pm-slate)] leading-relaxed" style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2" style={{ marginBottom: "clamp(0.5rem, 1vw, 0.75rem)" }}>
                    <span className="text-4xl md:text-5xl font-bold text-[var(--pm-coral)]">
                      {plan.price}
                    </span>
                    <span className="text-lg font-semibold text-[var(--pm-coral)]">
                      {plan.currency}
                    </span>
                  </div>

                  {/* Delivery */}
                  <p className="text-xs text-[var(--pm-muted)]" style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
                    Livraison en {plan.delay}
                  </p>
                </div>

                {/* Divider */}
                <div style={{ marginLeft: "clamp(2rem, 4vw, 3rem)", marginRight: "clamp(2rem, 4vw, 3rem)" }} className="h-[1px] bg-[var(--pm-border)]" />

                {/* Features */}
                <div style={{ padding: "clamp(2rem, 4vw, 3rem)" }}>
                  <p className="text-xs font-semibold text-[var(--pm-indigo)] uppercase tracking-wider" style={{ marginBottom: "clamp(1.25rem, 2.5vw, 2rem)" }}>
                    Ce qui est inclus
                  </p>

                  <ul className="flex flex-col" style={{ gap: "clamp(1rem, 2vw, 1.25rem)", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3.5 text-sm text-[var(--pm-slate)]">
                        <div className="w-6 h-6 rounded-full bg-[var(--pm-coral)]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={13} className="text-[var(--pm-coral)]" />
                        </div>
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Not included */}
                  {plan.notIncluded.length > 0 && (
                    <div style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
                      <p className="text-xs text-[var(--pm-muted)]" style={{ marginBottom: "clamp(0.75rem, 1.5vw, 1rem)" }}>
                        Non inclus :
                      </p>
                      <ul className="flex flex-col gap-3">
                        {plan.notIncluded.map((n) => (
                          <li key={n} className="flex items-center gap-3 text-xs text-[var(--pm-muted)]">
                            <X size={13} className="text-[var(--pm-muted)]/60" />
                            <span className="line-through">{n}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <MagneticButton glow={plan.featured} shine={plan.featured} className="w-full">
                    <Link
                      href="/contact"
                      className={`w-full justify-center text-base py-4 ${
                        plan.featured ? "btn-primary" : "btn-secondary"
                      }`}
                    >
                      Choisir cette formule <ArrowRight size={16} />
                    </Link>
                  </MagneticButton>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center text-sm text-[var(--pm-muted)]"
            style={{ marginTop: "clamp(3rem, 5vw, 5rem)" }}
          >
            Tous les prix sont TTC. Paiement en 2 ou 3 fois possible. Devis personnalisé sur demande.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ ENGAGEMENT ═══════════ */}
      <section className="bg-[var(--pm-peach)]/20" style={{ padding: "clamp(6rem, 10vw, 10rem) 0" }}>
        <div className="container-pm">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "clamp(4rem, 8vw, 8rem)" }}>
            {/* Left — Copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="text-label block" style={{ marginBottom: "clamp(1rem, 2vw, 1.5rem)" }}>
                Notre engagement
              </motion.span>

              <motion.h2 variants={fadeUp} className="text-heading" style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
                Propriété 100%.{" "}
                <span className="text-[var(--pm-coral)]">Zéro jargon.</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-body" style={{ marginBottom: "clamp(1.5rem, 3vw, 2rem)" }}>
                Quand on dit que le site est à vous, c'est vrai. Le code, le domaine,
                l'hébergement — tout vous appartient dès que la facture est payée.
              </motion.p>

              <motion.p variants={fadeUp} className="text-body">
                Et quand on dit &quot;zéro jargon&quot;, on remplace &quot;optimisation CSS et balises
                H1&quot; par &quot;un site rapide et visible sur Google&quot;. Parce que c'est ça qui
                compte pour vous.
              </motion.p>
            </motion.div>

            {/* Right — Value cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{ gap: "clamp(1rem, 2vw, 1.5rem)" }}
            >
              {[
                {
                  icon: Shield,
                  title: "Propriétaire",
                  desc: "Le code, le domaine, et l'hébergement sont à votre nom.",
                },
                {
                  icon: Clock,
                  title: "Ponctuel",
                  desc: "On respecte chaque deadline. Pas d'excuses, pas de retard.",
                },
                {
                  icon: Heart,
                  title: "Humain",
                  desc: "On parle votre langue, pas du jargon technique.",
                },
                {
                  icon: CreditCard,
                  title: "Transparent",
                  desc: "Le prix affiché est le prix final. Aucun frais caché.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  custom={i}
                  className="bg-white rounded-2xl border border-[var(--pm-border)] hover:shadow-[0_8px_32px_rgba(15,23,42,0.06)] hover:border-[rgba(212,101,74,0.15)] transition-all duration-500"
                  style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--pm-peach)] flex items-center justify-center" style={{ marginBottom: "clamp(1.25rem, 2.5vw, 2rem)" }}>
                    <card.icon size={22} className="text-[var(--pm-coral)]" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--pm-indigo)]" style={{ marginBottom: "clamp(0.5rem, 1vw, 0.75rem)" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--pm-slate)] leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section style={{ padding: "clamp(6rem, 10vw, 10rem) 0" }}>
        <div className="container-pm max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-label block text-center" style={{ marginBottom: "clamp(1rem, 2vw, 1.5rem)" }}>
              FAQ
            </motion.span>

            <motion.h2 variants={fadeUp} className="text-heading text-center" style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
              Questions fréquentes
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl border border-[var(--pm-border)]"
              style={{ padding: "clamp(1rem, 3vw, 2rem) clamp(2rem, 5vw, 4rem)" }}
            >
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  index={i}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section style={{ paddingBottom: "clamp(6rem, 10vw, 10rem)" }}>
        <div className="container-pm">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative bg-[var(--pm-indigo)] rounded-[2rem] overflow-hidden text-center"
            style={{ padding: "clamp(5rem, 10vw, 8rem) clamp(2rem, 6vw, 6rem)" }}
          >
            {/* Decorative orbs */}
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[var(--pm-coral)] opacity-[0.08] blur-[80px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-[#FFA500] opacity-[0.08] blur-[60px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white max-w-xl mx-auto leading-tight" style={{ marginBottom: "clamp(1.5rem, 3vw, 2rem)" }}>
                Pas encore sûr ?{" "}
                <span className="text-[var(--pm-coral-light)]">Parlons-en.</span>
              </h2>

              <p className="text-white/50 text-base md:text-lg max-w-md mx-auto leading-relaxed" style={{ marginBottom: "clamp(3rem, 5vw, 4rem)" }}>
                Un échange de 15 minutes suffit pour comprendre votre projet
                et vous orienter vers la bonne formule.
              </p>

              <MagneticButton glow shine strength={0.25}>
                <Link
                  href="/contact"
                  className="btn-primary text-base py-4 px-10 bg-white text-[var(--pm-indigo)] hover:bg-[var(--pm-cream)]"
                >
                  Demander un devis gratuit <ArrowRight size={18} />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
