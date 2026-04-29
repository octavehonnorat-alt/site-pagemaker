"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos Formules", href: "/formules" },
  { label: "Galerie", href: "/galerie" },
  { label: "Notre Vérité", href: "/notre-verite" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-pm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-pm flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Pagemaker - Accueil">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#FFA500] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-[var(--pm-indigo)]">
              Pagemaker
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--pm-slate)] hover:text-[var(--pm-coral)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--pm-coral)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <MagneticButton glow shine>
            <Link href="/contact" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-6">
              Lancer mon projet
            </Link>
          </MagneticButton>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--pm-peach)] transition-colors"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--pm-cream)] pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-2xl font-semibold text-[var(--pm-indigo)] border-b border-[var(--pm-border)] hover:text-[var(--pm-coral)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-8"
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center text-base py-4">
                  Lancer mon projet
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
