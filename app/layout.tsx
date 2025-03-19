import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Despertar del Avatar - Experiencia de Inmersión en Hielo",
  description: "Una experiencia transformadora de inmersión en hielo donde aprenderás a convertir el miedo y la incomodidad en tus aliados. Transforma tu vida con claridad y fortaleza.",
  keywords: "inmersión en hielo, transformación personal, despertar del avatar, superación del miedo, resiliencia, experiencia transformadora",
  openGraph: {
    title: "El Despertar del Avatar - Experiencia de Inmersión en Hielo",
    description: "Una experiencia transformadora de inmersión en hielo donde aprenderás a convertir el miedo y la incomodidad en tus aliados.",
    url: "https://eldespetardelavatar.com",
    siteName: "El Despertar del Avatar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "El Despertar del Avatar",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Despertar del Avatar - Experiencia de Inmersión en Hielo",
    description: "Una experiencia transformadora de inmersión en hielo donde aprenderás a convertir el miedo y la incomodidad en tus aliados.",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
