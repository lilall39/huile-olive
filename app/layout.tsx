import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huile Olive — Curateur d'huiles primées d'Algérie",
  description:
    "Sélection premium d'huiles d'olive extra vierge médaillées. Trois terroirs, trois producteurs, un coffret dégustation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${heading.variable} ${body.variable}`}>
      <body style={{ fontFamily: "var(--font-body)" }}>
        <div className="videoBackground">
          <video autoPlay muted loop playsInline>
            <source src="/videoolive.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="videoOverlay" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
