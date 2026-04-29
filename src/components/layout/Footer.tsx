"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE }
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Formules & Tarifs", href: "/formules" },
  { label: "Galerie", href: "/galerie" },
  { label: "Notre Méthode", href: "/notre-verite" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Mentions Légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/mentions-legales" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
      className="relative bg-[var(--pm-indigo)] text-white overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[var(--pm-coral)]/30 to-transparent" />

      <div className="container-pm" style={{ paddingTop: "clamp(5rem, 8vw, 8rem)", paddingBottom: "clamp(3rem, 5vw, 5rem)" }}>
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-20">
          {/* Brand */}
          <motion.div variants={fadeUp} className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FFA500] flex items-center justify-center">
                <span className="text-white font-bold text-base">P</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">Pagemaker</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              On crée des sites web pour les particuliers. Simples, beaux, et 100% à vous.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@pagemaker.me"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-[var(--pm-coral)] transition-colors duration-300 group"
              >
                <Mail size={15} className="group-hover:text-[var(--pm-coral)] transition-colors" />
                hello@pagemaker.me
              </a>
              <a
                href="tel:+33612345678"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-[var(--pm-coral)] transition-colors duration-300 group"
              >
                <Phone size={15} className="group-hover:text-[var(--pm-coral)] transition-colors" />
                06 12 34 56 78
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin size={15} />
                France entière — 100% à distance
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp} custom={1} className="md:col-span-3 md:col-start-6">
            <h4 className="text-sm font-semibold text-white/80 mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} custom={2} className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white/80 mb-6 uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-sm text-white/45">Site one-page</li>
              <li className="text-sm text-white/45">Site multi-pages</li>
              <li className="text-sm text-white/45">Blog</li>
              <li className="text-sm text-white/45">E-commerce artisanal</li>
              <li className="text-sm text-white/45">Refonte de site</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="h-[1px] bg-white/8 mb-8"
        />

        {/* Bottom */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-xs text-white/30">
            © {currentYear} Pagemaker. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
