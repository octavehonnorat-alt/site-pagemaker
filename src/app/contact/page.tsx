"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE as unknown as [number, number, number, number] }
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    formula: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState("sent");
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full ">
      {/* Header */}
      <section className="container-pm mb-12 md:mb-16">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
          <motion.span variants={fadeUp} className="text-label mb-3 block">Contact</motion.span>
          <motion.h1 variants={fadeUp} className="text-display mb-8">
            Parlons de{" "}
            <span className="text-[var(--pm-coral)]">votre projet.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-subheading">
            Remplissez le formulaire ou appelez-nous directement. 
            On répond dans la journée, promis.
          </motion.p>
        </motion.div>
      </section>

      {/* Form + Info */}
      <section className="container-pm mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-7"
          >
            {formState === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-pm text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--pm-indigo)] mb-3">Message envoyé</h2>
                <p className="text-[var(--pm-slate)] max-w-md mx-auto">
                  On a bien reçu votre demande. On vous recontacte dans les 24h pour en discuter.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-pm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <motion.div variants={fadeUp}>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--pm-indigo)] mb-1.5">
                      Votre nom *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Marie Dupont"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--pm-border)] bg-[var(--pm-cream)] text-[var(--pm-indigo)] text-sm placeholder:text-[var(--pm-muted)] focus:outline-none focus:border-[var(--pm-coral)] focus:ring-2 focus:ring-[var(--pm-coral)]/20 transition-all"
                    />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--pm-indigo)] mb-1.5">
                      Votre email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="marie@exemple.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--pm-border)] bg-[var(--pm-cream)] text-[var(--pm-indigo)] text-sm placeholder:text-[var(--pm-muted)] focus:outline-none focus:border-[var(--pm-coral)] focus:ring-2 focus:ring-[var(--pm-coral)]/20 transition-all"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <motion.div variants={fadeUp}>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--pm-indigo)] mb-1.5">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--pm-border)] bg-[var(--pm-cream)] text-[var(--pm-indigo)] text-sm placeholder:text-[var(--pm-muted)] focus:outline-none focus:border-[var(--pm-coral)] focus:ring-2 focus:ring-[var(--pm-coral)]/20 transition-all"
                    />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label htmlFor="formula" className="block text-sm font-medium text-[var(--pm-indigo)] mb-1.5">
                      Formule souhaitée
                    </label>
                    <select
                      id="formula"
                      value={formData.formula}
                      onChange={(e) => updateField("formula", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--pm-border)] bg-[var(--pm-cream)] text-[var(--pm-indigo)] text-sm focus:outline-none focus:border-[var(--pm-coral)] focus:ring-2 focus:ring-[var(--pm-coral)]/20 transition-all appearance-none"
                    >
                      <option value="">Je ne sais pas encore</option>
                      <option value="carte">La Carte de Visite (300-500€)</option>
                      <option value="dynamique">Le Dynamique (600-900€)</option>
                      <option value="boutique">La Mini-Boutique (1000-1500€)</option>
                      <option value="custom">Besoin personnalisé</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--pm-indigo)] mb-1.5">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Dites-nous ce dont vous avez besoin : type de site, contenu prévu, date souhaitée..."
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--pm-border)] bg-[var(--pm-cream)] text-[var(--pm-indigo)] text-sm placeholder:text-[var(--pm-muted)] focus:outline-none focus:border-[var(--pm-coral)] focus:ring-2 focus:ring-[var(--pm-coral)]/20 transition-all resize-none"
                  />
                </motion.div>

                <motion.button
                  variants={fadeUp}
                  type="submit"
                  disabled={formState === "sending"}
                  className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "sending" ? (
                    "Envoi en cours..."
                  ) : (
                    <>Envoyer ma demande <Send size={16} /></>
                  )}
                </motion.button>

                <p className="text-xs text-[var(--pm-muted)] text-center mt-4">
                  En soumettant ce formulaire, vous acceptez notre{" "}
                  <a href="/mentions-legales" className="underline hover:text-[var(--pm-coral)]">politique de confidentialité</a>.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-5"
          >
            <div className="flex flex-col gap-5">
              <motion.div variants={fadeUp} className="card-pm">
                <h3 className="text-base font-semibold text-[var(--pm-indigo)] mb-4">Coordonnées</h3>
                <div className="flex flex-col gap-4">
                  <a href="mailto:hello@pagemaker.me" className="flex items-center gap-3 text-sm text-[var(--pm-slate)] hover:text-[var(--pm-coral)] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[var(--pm-coral)]/10 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[var(--pm-coral)]" />
                    </div>
                    hello@pagemaker.me
                  </a>
                  <a href="tel:+33612345678" className="flex items-center gap-3 text-sm text-[var(--pm-slate)] hover:text-[var(--pm-coral)] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[var(--pm-coral)]/10 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[var(--pm-coral)]" />
                    </div>
                    06 12 34 56 78
                  </a>
                  <div className="flex items-center gap-3 text-sm text-[var(--pm-slate)]">
                    <div className="w-9 h-9 rounded-lg bg-[var(--pm-coral)]/10 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[var(--pm-coral)]" />
                    </div>
                    France entière (100% à distance)
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="card-pm">
                <h3 className="text-base font-semibold text-[var(--pm-indigo)] mb-4">Disponibilité</h3>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--pm-coral)]/10 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-[var(--pm-coral)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--pm-slate)]">Lundi – Vendredi</p>
                    <p className="text-sm font-medium text-[var(--pm-indigo)]">9h – 18h</p>
                    <p className="text-xs text-[var(--pm-muted)] mt-1">Réponse sous 24h ouvrées</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="card-pm bg-[var(--pm-peach)]/40 border-transparent">
                <h3 className="text-base font-semibold text-[var(--pm-indigo)] mb-2">Devis gratuit et sans engagement</h3>
                <p className="text-sm text-[var(--pm-slate)] leading-relaxed">
                  On ne vous mettra jamais la pression. On discute, on vous propose quelque chose, 
                  et vous décidez tranquillement. C'est aussi simple que ça.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
