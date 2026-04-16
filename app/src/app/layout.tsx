import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import { PresentationProvider } from "@/context/PresentationContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'Ingénierie de Demain — Les Triomphes Technologiques Français",
  description:
    "Un site web interactif et immersif explorant les plus grandes réalisations de l'ingénierie française : le Rafale, la Carte à Puce et ITER.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} ${cinzel.variable} ${space.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-noir text-text-primary font-inter">
        <AccessibilityProvider>
          <PresentationProvider>
            {children}
          </PresentationProvider>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
