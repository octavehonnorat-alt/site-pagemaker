"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Shield, Heart, Zap, Globe, Palette, Code, Users } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

/* ═══════════ Animation Variants ═══════════ */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE }
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ═══════════ Pricing Data ═══════════ */
const plans = [
  {
    name: "La Carte de Visite",
    price: "300 – 500 €",
    target: "Étudiants, freelances, mariages",
    features: [
      "Site one-page responsive",
      "Design sur mesure",
      "Formulaire de contact",
      "Intégration de vos textes et photos",
      "Visible sur Google",
      "Livraison en 7 jours",
    ],
    featured: false,
  },
  {
    name: "Le Dynamique",
    price: "600 – 900 €",
    target: "Passionnés, blogueurs, créateurs",
    features: [
      "Jusqu'à 5 pages",
      "Vous modifiez vos textes vous-même",
      "Blog intégré",
      "Référencement optimisé",
      "Formation d'utilisation incluse",
      "Accompagnement domaine + hébergement",
    ],
    featured: true,
  },
  {
    name: "La Mini-Boutique",
    price: "1 000 – 1 500 €",
    target: "Artisans amateurs, vide-dressing",
    features: [
      "Site vitrine + boutique en ligne",
      "Jusqu'à 20 produits",
      "Paiement sécurisé intégré",
      "Gestion des stocks simplifiée",
      "Accompagnement complet",
      "Propriétaire à 100%",
    ],
    featured: false,
  },
];

/* ═══════════ Values Data ═══════════ */
const values = [
  {
    icon: Shield,
    title: "100% propriétaire",
    desc: "Votre site et votre nom de domaine vous appartiennent. Point final.",
  },
  {
    icon: Heart,
    title: "Zéro jargon",
    desc: "On dit \"un site rapide et visible sur Google\", pas \"optimisation CSS et balises H1\".",
  },
  {
    icon: Zap,
    title: "Rapide et efficace",
    desc: "Votre site est livré en 7 à 14 jours. Pas dans 3 mois.",
  },
  {
    icon: Users,
    title: "Accompagnement humain",
    desc: "On vous aide à choisir votre nom de domaine, votre hébergement, tout.",
  },
];

/* ═══════════ PAGE ═══════════ */
export default function HomePage() {
  return (
    <div className="w-full" style={{ marginTop: "calc(-1 * clamp(8rem, 12vw, 12rem))" }}>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden pb-20" style={{ paddingTop: "clamp(10rem, 14vw, 14rem)" }}>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[var(--pm-peach)] rounded-bl-[80px] opacity-40 pointer-events-none" />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[var(--pm-coral)] opacity-[0.07] blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-[#FFA500] opacity-[0.06] blur-3xl pointer-events-none" />

        <div className="container-pm relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left - Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-xl"
            >
              <motion.span variants={fadeUp} custom={0} className="text-label mb-6 block">
                Création de sites web pour particuliers
              </motion.span>

              <motion.h1 variants={fadeUp} custom={1} className="text-display mb-10">
                On crée votre site.{" "}
                <span className="text-[var(--pm-coral)]">Vous vivez votre passion.</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="text-subheading mb-14">
                Un site web qui vous ressemble, livré clé en main. 
                Pas de jargon, pas de mauvaises surprises. Juste un beau site.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap items-center gap-6 mb-16">
                <MagneticButton glow shine>
                  <Link href="/contact" className="btn-primary text-base py-4 px-8">
                    Lancer mon projet <ArrowRight size={18} />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/formules" className="btn-secondary text-base py-4 px-8">
                    Voir les tarifs
                  </Link>
                </MagneticButton>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap items-center gap-8">
                {[
                  { icon: Shield, text: "100% propriétaire" },
                  { icon: Heart, text: "Zéro jargon" },
                  { icon: Globe, text: "Accompagnement inclus" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2.5 text-sm text-[var(--pm-slate)]">
                    <badge.icon size={15} className="text-[var(--pm-coral)]" />
                    {badge.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - AI-generated mockup images */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-[4/3]">
                {/* Main large mockup */}
                <motion.div
                  className="absolute rounded-2xl shadow-xl overflow-hidden"
                  style={{ width: "80%", top: "0%", left: "10%", zIndex: 3 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/mockup-wedding.png"
                    alt="Site mariage élégant créé par Pagemaker"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                </motion.div>

                {/* Secondary mockup */}
                <motion.div
                  className="absolute rounded-2xl shadow-lg overflow-hidden"
                  style={{ width: "50%", top: "55%", left: "0%", zIndex: 2 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <Image
                    src="/images/mockup-portfolio.png"
                    alt="Portfolio professionnel créé par Pagemaker"
                    width={400}
                    height={280}
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>

                {/* Third mockup */}
                <motion.div
                  className="absolute rounded-2xl shadow-lg overflow-hidden"
                  style={{ width: "45%", top: "60%", right: "0%", zIndex: 1 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <Image
                    src="/images/mockup-bakery.png"
                    alt="Boutique artisanale créée par Pagemaker"
                    width={350}
                    height={250}
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SOCIAL PROOF ═══════════════════════ */}
      <section className="section-pm bg-white/50">
        <div className="container-pm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-wrap items-center justify-center gap-14 md:gap-24"
          >
            {[
              { number: "120+", label: "sites créés" },
              { number: "100%", label: "clients propriétaires" },
              { number: "7j", label: "délai moyen" },
              { number: "4.9/5", label: "satisfaction client" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[var(--pm-indigo)]">{stat.number}</p>
                <p className="text-sm text-[var(--pm-muted)] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ PRICING ═══════════════════════ */}
      <section className="section-pm" id="formules">
        <div className="container-pm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-20 md:mb-28"
          >
            <motion.span variants={fadeUp} className="text-label mb-4 block">Nos formules</motion.span>
            <motion.h2 variants={fadeUp} className="text-heading mb-6">
              Des prix clairs. Pas de surprise.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-subheading max-w-2xl mx-auto">
              Choisissez la formule qui correspond à votre projet. 
              Chaque tarif inclut tout : design, développement, et accompagnement. Aucune compétence n'est requise, on s'occupe de tout. Pour les images et les textes, on vous les demande simplement une fois la commande validée. Vous choisissez, on fait le reste.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                custom={i}
                className={`card-pm relative ${plan.featured ? "featured md:-mt-4 md:mb-4" : ""}`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-[var(--pm-coral)] text-white text-xs font-semibold rounded-full">
                    Le plus populaire
                  </div>
                )}
                <p className="text-sm font-medium text-[var(--pm-muted)] mb-3">{plan.target}</p>
                <h3 className="text-xl font-bold text-[var(--pm-indigo)] mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-[var(--pm-coral)] mb-8">{plan.price}</p>

                <ul className="flex flex-col gap-3.5 mb-10">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[var(--pm-slate)]">
                      <Check size={16} className="text-[var(--pm-coral)] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <MagneticButton glow={plan.featured} shine={plan.featured} className="w-full">
                  <Link
                    href="/contact"
                    className={`${plan.featured ? "btn-primary" : "btn-secondary"} w-full justify-center`}
                  >
                    Choisir cette formule
                  </Link>
                </MagneticButton>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-sm text-[var(--pm-muted)] mt-12"
          >
            Tous les prix sont TTC. Paiement en 2 ou 3 fois possible. Devis personnalisé sur demande.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════ NOTRE VÉRITÉ ═══════════════════════ */}
      <section className="section-pm bg-[var(--pm-peach)]/30">
        <div className="container-pm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            {/* Left - Copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="text-label mb-4 block">Notre vérité</motion.span>
              <motion.h2 variants={fadeUp} className="text-heading mb-8">
                On ne vend pas du rêve. On crée le vôtre.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-body mb-12">
                Chez Pagemaker, on parle comme vous. On ne vous noiera jamais sous des termes techniques. 
                Vous voulez un beau site qui marche ? On s'en occupe. Vous voulez comprendre ce qu'on fait ? On vous explique.
              </motion.p>
              <motion.div variants={fadeUp}>
                <MagneticButton>
                  <Link href="/notre-verite" className="btn-secondary">
                    Découvrir notre méthode <ArrowRight size={16} />
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Right - Values grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  custom={i}
                  className="card-pm p-7"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--pm-coral)]/10 flex items-center justify-center mb-5">
                    <v.icon size={22} className="text-[var(--pm-coral)]" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--pm-indigo)] mb-3">{v.title}</h3>
                  <p className="text-sm text-[var(--pm-slate)] leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROCESS ═══════════════════════ */}
      <section className="section-pm">
        <div className="container-pm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-20 md:mb-24"
          >
            <motion.span variants={fadeUp} className="text-label mb-4 block">Comment ça marche</motion.span>
            <motion.h2 variants={fadeUp} className="text-heading">
              3 étapes. C'est tout.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
          >
            {[
              { step: "01", icon: Palette, title: "On en parle", desc: "Vous nous racontez votre projet. On vous propose un design et un devis. Gratuit, sans engagement." },
              { step: "02", icon: Code, title: "On le crée", desc: "Notre équipe conçoit votre site. Vous validez chaque étape. On ne code rien tant que vous n'avez pas dit oui." },
              { step: "03", icon: Globe, title: "C'est en ligne", desc: "Votre site est publié. On vous forme à le gérer. Et on reste disponible si vous avez besoin." },
            ].map((s, i) => (
              <motion.div key={s.step} variants={fadeUp} custom={i} className="text-center">
                <div className="inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-[var(--pm-peach)] mb-7">
                  <s.icon size={30} className="text-[var(--pm-coral)]" />
                </div>
                <p className="text-xs font-bold text-[var(--pm-coral)] mb-3">Étape {s.step}</p>
                <h3 className="text-lg font-semibold text-[var(--pm-indigo)] mb-4">{s.title}</h3>
                <p className="text-sm text-[var(--pm-slate)] leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="section-pm">
        <div className="container-pm">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-[var(--pm-indigo)] rounded-3xl p-14 md:p-24 text-center relative overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[var(--pm-coral)] opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#FFA500] opacity-10 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Prêt à avoir un site qui vous ressemble ?
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-lg mx-auto">
                Pas d'engagement, pas de jargon. Juste un échange humain pour comprendre votre projet.
              </p>
              <MagneticButton glow shine strength={0.25}>
                <Link href="/contact" className="btn-primary text-base py-4 px-10 bg-white text-[var(--pm-indigo)] hover:bg-[var(--pm-cream)]">
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
