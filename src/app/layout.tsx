import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CookieBanner } from "@/components/ui/CookieBanner";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Pagemaker — Votre site web sur mesure",
  description: "Pagemaker crée des sites web personnalisés pour les particuliers. CV en ligne, blog, mariage, e-commerce artisanal. Transparent, sans jargon, 100% propriétaire.",
  keywords: ["création site web", "site internet particulier", "webdesign", "site mariage", "portfolio en ligne", "pagemaker"],
  openGraph: {
    title: "Pagemaker — Votre site web sur mesure",
    description: "Des sites web conçus pour les gens, pas pour les entreprises.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFBF5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={cn("font-sans", outfit.variable)}>
      <body className="bg-[#FFFBF5] text-[#0F172A] antialiased overflow-x-hidden selection:bg-[#D4654A] selection:text-white">
        <Header />
        <main id="main-content" className="relative w-full" style={{ paddingTop: "clamp(8rem, 12vw, 12rem)" }}>
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
