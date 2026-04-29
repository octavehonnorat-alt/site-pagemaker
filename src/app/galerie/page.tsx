"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE as unknown as [number, number, number, number] }
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const projects = [
  {
    title: "Mariage Emma & Lucas",
    type: "Site événementiel",
    description: "Un site élégant pour leur journée. RSVP en ligne, programme, galerie photos.",
    formula: "La Carte de Visite",
    color: "#FFE8D6",
    accent: "#D4654A",
  },
  {
    title: "Portfolio Julie Martin",
    type: "CV en ligne",
    description: "Un portfolio sobre et impactant pour une graphiste freelance en recherche de clients.",
    formula: "La Carte de Visite",
    color: "#E8F0FE",
    accent: "#3B82F6",
  },
  {
    title: "Le Blog de Marie",
    type: "Blog cuisine",
    description: "Un blog gourmand avec CMS intégré. Marie publie ses recettes chaque semaine.",
    formula: "Le Dynamique",
    color: "#FEF3E2",
    accent: "#F59E0B",
  },
  {
    title: "Atelier Bois Créatif",
    type: "E-commerce artisanal",
    description: "Boutique en ligne pour un artisan ébéniste. 15 créations uniques en vente.",
    formula: "La Mini-Boutique",
    color: "#F0FDF4",
    accent: "#22C55E",
  },
  {
    title: "CV Antoine Dubois",
    type: "Portfolio développeur",
    description: "Un CV interactif pour un jeune développeur en fin d'études, avec projets et contact.",
    formula: "La Carte de Visite",
    color: "#F5F3FF",
    accent: "#8B5CF6",
  },
  {
    title: "Saveurs du Terroir",
    type: "Site vitrine + blog",
    description: "Site pour un producteur de fromages fermiers. Blog, galerie et formulaire de contact.",
    formula: "Le Dynamique",
    color: "#FFF7ED",
    accent: "#EA580C",
  },
];

export default function GaleriePage() {
  return (
    <div className="w-full ">
      {/* Header */}
      <section className="container-pm mb-20 md:mb-28">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
          <motion.span variants={fadeUp} className="text-label mb-3 block">Galerie</motion.span>
          <motion.h1 variants={fadeUp} className="text-display mb-8">
            Ils nous ont fait{" "}
            <span className="text-[var(--pm-coral)]">confiance.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-subheading">
            Des sites conçus pour de vraies personnes. Pas des entreprises, pas des startups. 
            Des gens comme vous.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container-pm mb-20 md:mb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              custom={i}
              className="card-pm group cursor-pointer overflow-hidden"
            >
              {/* Preview area */}
              <div
                className="w-full aspect-[16/10] rounded-xl mb-5 relative overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                {/* Simulated browser */}
                <div className="absolute inset-4 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f8f8f8] border-b border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-red-300" />
                    <div className="w-2 h-2 rounded-full bg-yellow-300" />
                    <div className="w-2 h-2 rounded-full bg-green-300" />
                    <div className="ml-2 h-3.5 bg-gray-100 rounded flex-1 max-w-32" />
                  </div>
                  <div className="p-4">
                    <div className="w-24 h-2.5 rounded mb-3" style={{ backgroundColor: project.accent + "30" }} />
                    <div className="w-full h-2 bg-gray-100 rounded mb-1.5" />
                    <div className="w-3/4 h-2 bg-gray-100 rounded mb-4" />
                    <div className="w-20 h-6 rounded-full" style={{ backgroundColor: project.accent + "20" }} />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--pm-indigo)]/0 group-hover:bg-[var(--pm-indigo)]/10 transition-all duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <ExternalLink size={18} className="text-[var(--pm-indigo)]" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--pm-indigo)] mb-1 group-hover:text-[var(--pm-coral)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--pm-slate)] mb-2">{project.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs font-medium text-[var(--pm-muted)] bg-[var(--pm-cream)] px-3 py-1 rounded-full">
                  {project.type}
                </span>
                <span className="text-xs font-medium text-[var(--pm-coral)] bg-[var(--pm-coral)]/10 px-3 py-1 rounded-full">
                  {project.formula}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-pm">
        <div className="container-pm text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-heading mb-4">Votre projet sera le prochain.</h2>
            <p className="text-subheading max-w-lg mx-auto mb-8">
              Racontez-nous ce dont vous avez besoin. On vous montre ce qu'on peut en faire.
            </p>
            <Link href="/contact" className="btn-primary text-base py-3.5 px-7">
              Lancer mon projet <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
