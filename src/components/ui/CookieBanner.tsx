"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("pm-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("pm-cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("pm-cookie-consent", "refused");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="container-pm">
            <div className="glass-pm rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-xl border border-white/20">
              <div className="flex items-start gap-3 flex-1">
                <Cookie size={20} className="text-[var(--pm-coral)] mt-0.5 shrink-0" />
                <p className="text-sm text-[var(--pm-indigo)] leading-relaxed">
                  Nous utilisons des cookies essentiels pour le fonctionnement du site. Aucun cookie publicitaire. 
                  <a href="/mentions-legales" className="underline underline-offset-2 hover:text-[var(--pm-coral)] ml-1">En savoir plus</a>
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button onClick={refuse} className="btn-secondary text-xs py-2 px-4">
                  Refuser
                </button>
                <button onClick={accept} className="btn-primary text-xs py-2 px-4">
                  Accepter
                </button>
              </div>
              <button onClick={refuse} className="absolute top-3 right-3 md:hidden p-1 text-[var(--pm-muted)] hover:text-[var(--pm-indigo)]" aria-label="Fermer">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
