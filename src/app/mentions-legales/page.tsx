"use client";

import Link from "next/link";


export default function MentionsLegalesPage() {
  return (
    <div className="w-full  pb-16 md:pb-24">
      <div className="container-pm max-w-3xl mx-auto">
        <span className="text-label mb-3 block">Légal</span>
        <h1 className="text-display mb-10">Mentions Légales</h1>

        <div className="prose-pm">
          <section className="mb-12">
            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>pagemaker.me</strong> est édité par :<br />
              Pagemaker — Micro-entreprise<br />
              SIRET : [Numéro SIRET]<br />
              Adresse : [Adresse complète]<br />
              Email : <a href="mailto:hello@pagemaker.me">hello@pagemaker.me</a><br />
              Téléphone : 06 12 34 56 78<br />
              Directeur de la publication : [Nom du responsable]
            </p>
          </section>

          <section className="mb-12">
            <h2>2. Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              Vercel Inc.<br />
              440 N Bashaw St, San Francisco, CA 94107, USA<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>
          </section>

          <section className="mb-12">
            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété 
              exclusive de Pagemaker, sauf mention contraire. Toute reproduction, représentation, modification, 
              publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation 
              préalable écrite.
            </p>
          </section>

          <section className="mb-12">
            <h2>4. Politique de confidentialité</h2>
            <h3>Données collectées</h3>
            <p>
              Nous collectons uniquement les données que vous nous transmettez volontairement via notre 
              formulaire de contact : nom, email, téléphone (optionnel) et description de votre projet.
            </p>
            
            <h3>Utilisation des données</h3>
            <p>
              Vos données sont utilisées exclusivement pour répondre à votre demande de devis et assurer 
              le suivi de votre projet. Elles ne sont jamais vendues, cédées ou partagées avec des tiers.
            </p>

            <h3>Conservation des données</h3>
            <p>
              Vos données de contact sont conservées pendant une durée maximale de 3 ans après notre dernier 
              échange. Vous pouvez demander leur suppression à tout moment.
            </p>

            <h3>Vos droits</h3>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et 
              de portabilité de vos données. Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:hello@pagemaker.me">hello@pagemaker.me</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2>5. Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies essentiels au fonctionnement du site. 
              Nous n'utilisons aucun cookie publicitaire, de tracking ou de profilage. 
              Aucune donnée n'est transmise à des réseaux publicitaires.
            </p>
          </section>

          <section>
            <h2>6. Crédits</h2>
            <p>
              Design et développement : Pagemaker<br />
              Typographie : Outfit (Google Fonts)<br />
              Icônes : Lucide Icons
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--pm-border)]">
          <Link href="/" className="text-sm text-[var(--pm-coral)] hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>

      <style jsx>{`
        .prose-pm h2 {
          font-size: 1.375rem;
          font-weight: 600;
          color: var(--pm-indigo);
          margin-bottom: 0.75rem;
        }
        .prose-pm h3 {
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--pm-indigo);
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .prose-pm p {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--pm-slate);
          margin-bottom: 1rem;
        }
        .prose-pm a {
          color: var(--pm-coral);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .prose-pm a:hover {
          color: var(--pm-coral-hover);
        }
      `}</style>
    </div>
  );
}
