"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Eye, MessageSquare, Handshake, Award, Quote } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE as unknown as [number, number, number, number] }
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const commitments = [
  {
    icon: Shield,
    title: "Propriété totale",
    desc: "Le site, le code source et le nom de domaine sont 100% les vôtres dès la livraison. On ne garde rien en otage.",
  },
  {
    icon: Eye,
    title: "Transparence absolue",
    desc: "Chaque euro est justifié. Pas de frais cachés, pas d'abonnements mystérieux, pas de lignes en petits caractères.",
  },
  {
    icon: MessageSquare,
    title: "Langage humain",
    desc: "On parle comme vous. « Un site rapide et visible sur Google », pas « optimisation CSS et balises H1 ».",
  },
  {
    icon: Handshake,
    title: "Accompagnement vrai",
    desc: "On vous aide à choisir votre nom de domaine, votre hébergement, et on vous forme à gérer votre site.",
  },
  {
    icon: Zap,
    title: "Délais tenus",
    desc: "7 à 21 jours selon la formule. On s'engage sur une date et on la respecte, sans exception.",
  },
  {
    icon: Award,
    title: "Qualité sans compromis",
    desc: "Chaque site est conçu sur mesure. Pas de templates recyclés, pas de design au rabais.",
  },
];

const steps = [
  {
    number: "01",
    title: "L'écoute",
    desc: "Vous nous racontez votre projet par téléphone, visio ou email. On pose des questions, on prend des notes — on comprend ce que vous voulez vraiment.",
  },
  {
    number: "02",
    title: "La proposition",
    desc: "On vous envoie un devis clair avec une maquette visuelle. Vous voyez exactement à quoi ressemblera votre site avant qu'on commence.",
  },
  {
    number: "03",
    title: "La création",
    desc: "On développe votre site étape par étape. Vous validez chaque décision. On ne code rien tant que vous n'avez pas dit « c'est parfait ».",
  },
  {
    number: "04",
    title: "La livraison",
    desc: "Votre site est en ligne. On vous forme à le gérer en 30 minutes. Et on reste disponibles — même dans 6 mois.",
  },
];

export default function NotreVeritePage() {
  return (
    <div className="w-full">

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="container-pm mb-20 md:mb-28">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.span variants={fadeUp} className="text-label mb-4 block">Notre méthode</motion.span>
          <motion.h1 variants={fadeUp} className="text-display mb-8">
            On ne vend pas du rêve.{" "}
            <span className="text-[var(--pm-coral)]">On crée le vôtre.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-subheading max-w-2xl">
            Pagemaker, c’est une conviction simple : tout le monde mérite un beau site web —
            pas seulement les grandes entreprises avec de gros budgets.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════ MANIFESTE ═══════════════════════ */}
      <section className="section-pm bg-[var(--pm-indigo)]">
        <div className="container-pm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE as unknown as [number, number, number, number] }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote size={40} className="text-[var(--pm-coral)] mx-auto mb-8 opacity-80" />
            <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-10" style={{ letterSpacing: "-0.01em" }}>
              Un bon site web, ce n’est pas une affaire de budget.
              C’est une affaire de confiance — et ça, on le prend très au sérieux.
            </p>
            <p className="text-white/50 text-base">— L’équipe Pagemaker</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ NOTRE HISTOIRE ═══════════════════════ */}
      <section className="section-pm bg-[var(--pm-peach)]/30">
        <div className="container-pm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className="text-label mb-4 block">Pourquoi on fait ça</motion.span>
              <motion.h2 variants={fadeUp} className="text-heading mb-8">
                L’anti-arnaque du web.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-body mb-5">
                On a vu trop de particuliers se faire avoir. Des devis à 3 000 € pour un site WordPress basique.
                Des « agences » qui gardent le nom de domaine en otage. Des freelances qui disparaissent après le paiement.
              </motion.p>
              <motion.p variants={fadeUp} className="text-body mb-5">
                Alors on a décidé de faire les choses autrement. Des prix honnêtes, affichés publiquement.
                Un accompagnement humain, de A à Z. Et surtout : vous êtes propriétaire de tout, dès le premier jour.
              </motion.p>
              <motion.p variants={fadeUp} className="text-body">
                Pagemaker, c’est la preuve qu’on peut faire du sur mesure, du beau, du solide —
                sans vider votre compte en banque.
              </motion.p>
            </motion.div>

            {/* Commitments preview */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {commitments.slice(0, 4).map((c, i) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  custom={i}
                  className="card-pm p-5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--pm-coral)]/10 flex items-center justify-center mb-3 group-hover:bg-[var(--pm-coral)]/20 transition-colors duration-300">
                    <c.icon size={20} className="text-[var(--pm-coral)]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--pm-indigo)] mb-1.5">{c.title}</h3>
                  <p className="text-xs text-[var(--pm-slate)] leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ NOS 6 ENGAGEMENTS ═══════════════════════ */}
      <section className="section-pm">
        <div className="container-pm">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-label mb-4 block">Nos engagements</motion.span>
            <motion.h2 variants={fadeUp} className="text-heading mb-6">
              6 promesses. 0 exception.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-subheading max-w-xl mx-auto">
              Ce ne sont pas des arguments de vente. Ce sont des règles qu’on s’impose — et que vous pouvez vérifier.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                custom={i}
                className="card-pm flex gap-5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--pm-coral)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--pm-coral)]/20 transition-colors duration-300">
                  <c.icon size={20} className="text-[var(--pm-coral)]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--pm-indigo)] mb-2">{c.title}</h3>
                  <p className="text-sm text-[var(--pm-slate)] leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ NOTRE MÉTHODE ═══════════════════════ */}
      <section className="section-pm bg-[var(--pm-peach)]/20">
        <div className="container-pm max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-label mb-4 block text-center">Notre processus</motion.span>
            <motion.h2 variants={fadeUp} className="text-heading text-center mb-14">
              De l’idée à la mise en ligne.
            </motion.h2>
            <div className="flex flex-col gap-0">
              {steps.map((s, i) => (
                <motion.div
                  key={s.number}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-6 items-start group"
                >
                  {/* Left: number + line */}
                  <div className="flex flex-col items-center shrink-0">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-[var(--pm-coral)] flex items-center justify-center"
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <span className="text-white text-lg font-bold">{s.number}</span>
                    </motion.div>
                    {i < steps.length - 1 && (
                      <div className="w-[2px] h-10 bg-gradient-to-b from-[var(--pm-coral)]/30 to-transparent mt-2 mb-2" />
                    )}
                  </div>
                  {/* Right: content */}
                  <div className={i < steps.length - 1 ? "pb-10" : "pb-0"}>
                    <h3 className="text-lg font-semibold text-[var(--pm-indigo)] mb-2 pt-3">{s.title}</h3>
                    <p className="text-sm text-[var(--pm-slate)] leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="section-pm">
        <div className="container-pm">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--pm-indigo)] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[var(--pm-coral)] opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#FFA500] opacity-10 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Convaincu ? On en parle.
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
                15 minutes suffisent. Pas d’engagement, pas de jargon.
                Juste un échange humain pour comprendre votre projet.
              </p>
              <MagneticButton glow shine>
                <Link href="/contact" className="btn-primary bg-white text-[var(--pm-indigo)] hover:bg-[var(--pm-cream)] text-base py-4 px-8">
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
