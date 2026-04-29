"use client";

import Link from "next/link";


export default function CGVPage() {
  return (
    <div className="w-full  pb-16 md:pb-24">
      <div className="container-pm max-w-3xl mx-auto">
        <span className="text-label mb-3 block">Légal</span>
        <h1 className="text-display mb-10">Conditions Générales de Vente</h1>

        <div className="prose-pm">
          <p className="text-sm text-[var(--pm-muted)] mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section className="mb-10">
            <h2>Article 1 — Objet</h2>
            <p>
              Les présentes conditions générales de vente régissent les relations entre Pagemaker (ci-après "le Prestataire") 
              et toute personne physique (ci-après "le Client") souhaitant bénéficier des services de création de site web proposés.
            </p>
          </section>

          <section className="mb-10">
            <h2>Article 2 — Prestations</h2>
            <p>Le Prestataire propose les services suivants :</p>
            <ul>
              <li>Conception et développement de sites web sur mesure</li>
              <li>Intégration de contenus (textes, photos) fournis par le Client</li>
              <li>Optimisation du référencement naturel (SEO)</li>
              <li>Formation à la gestion du site</li>
              <li>Accompagnement au choix du nom de domaine et de l'hébergement</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>Article 3 — Tarifs</h2>
            <p>
              Les tarifs sont exprimés en euros TTC et sont ceux en vigueur au moment de la validation du devis. 
              Le Prestataire se réserve le droit de modifier ses tarifs à tout moment, les prestations en cours 
              restant au tarif convenu lors de la signature du devis.
            </p>
            <p>
              Les formules proposées sont indicatives. Un devis personnalisé sera établi pour chaque projet 
              en fonction des besoins spécifiques du Client.
            </p>
          </section>

          <section className="mb-10">
            <h2>Article 4 — Modalités de paiement</h2>
            <p>Le paiement s'effectue selon les modalités suivantes :</p>
            <ul>
              <li><strong>Acompte :</strong> 50% du montant total à la signature du devis</li>
              <li><strong>Solde :</strong> 50% à la livraison du site</li>
              <li><strong>Option :</strong> Paiement en 3 fois sans frais sur demande</li>
            </ul>
            <p>
              Les paiements sont acceptés par virement bancaire ou par carte bancaire (via Stripe). 
              Tout retard de paiement entraîne la suspension des travaux.
            </p>
          </section>

          <section className="mb-10">
            <h2>Article 5 — Délais de livraison</h2>
            <p>Les délais indicatifs sont les suivants :</p>
            <ul>
              <li><strong>La Carte de Visite :</strong> 7 jours ouvrés</li>
              <li><strong>Le Dynamique :</strong> 10 à 14 jours ouvrés</li>
              <li><strong>La Mini-Boutique :</strong> 14 à 21 jours ouvrés</li>
            </ul>
            <p>
              Ces délais courent à compter de la réception de l'acompte et de l'ensemble des contenus 
              nécessaires (textes, photos, logo). Tout retard dans la fourniture des contenus par le Client 
              reporte d'autant le délai de livraison.
            </p>
          </section>

          <section className="mb-10">
            <h2>Article 6 — Propriété du site</h2>
            <p>
              <strong>Le Client est propriétaire à 100% de son site web dès le règlement intégral de la facture.</strong> 
              Cela inclut le code source, le design, et l'ensemble des éléments créés spécifiquement pour le projet.
            </p>
            <p>
              Le nom de domaine, enregistré au nom du Client, lui appartient exclusivement. 
              Le Prestataire ne conserve aucun droit de propriété sur le site livré.
            </p>
          </section>

          <section className="mb-10">
            <h2>Article 7 — Validation et modifications</h2>
            <p>
              Le Client dispose de 2 cycles de révision inclus dans le tarif. Chaque maquette ou version 
              du site est soumise à validation avant passage à l'étape suivante. Les modifications demandées 
              au-delà des 2 cycles de révision pourront faire l'objet d'une facturation complémentaire.
            </p>
          </section>

          <section className="mb-10">
            <h2>Article 8 — Droit de rétractation</h2>
            <p>
              Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation 
              ne s'applique pas aux prestations de services pleinement exécutées avant la fin du délai 
              de rétractation. Le Client en est informé lors de la validation du devis.
            </p>
          </section>

          <section className="mb-10">
            <h2>Article 9 — Responsabilité</h2>
            <p>
              Le Prestataire s'engage à fournir ses services avec soin et diligence. Sa responsabilité 
              ne saurait être engagée en cas de force majeure, de dysfonctionnement de l'hébergeur, ou 
              de contenus fournis par le Client (textes, images, etc.).
            </p>
          </section>

          <section>
            <h2>Article 10 — Litiges</h2>
            <p>
              En cas de litige, les parties s'efforceront de trouver une solution amiable. 
              À défaut, le litige sera porté devant les tribunaux compétents du ressort du domicile du Prestataire, 
              conformément au droit français.
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
        .prose-pm p {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--pm-slate);
          margin-bottom: 1rem;
        }
        .prose-pm ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .prose-pm li {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--pm-slate);
          margin-bottom: 0.375rem;
        }
        .prose-pm a {
          color: var(--pm-coral);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
