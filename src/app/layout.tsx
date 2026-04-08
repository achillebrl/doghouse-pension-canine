import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pension Canine DogHouse | Le Club de Vacances Premium des chiens",
  description:
    "Pension canine intimiste accueillant 10 pensionnaires maximum, située à Le Rouget-Pers (23 km d'Aurillac). Hébergement premium, activités variées et attention personnalisée.",
  keywords:
    "pension canine, chien, garde chien, Aurillac, Cantal, DogHouse, vacances chien",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}