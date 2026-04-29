"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="/contact"
        className="group flex items-center gap-3 bg-[var(--pm-coral)] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Demander un devis gratuit"
      >
        <MessageCircle size={18} className="transition-transform duration-300 group-hover:rotate-12" />
        <span className="text-sm font-semibold hidden sm:inline">Devis gratuit</span>
      </Link>
    </motion.div>
  );
}
