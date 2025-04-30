import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://landing.chakana.io/'),
  title: "Pandora experience - Experiencia de Inmersión en Hielo | LA CHAKANA",
  description: "Descubre la transformadora experiencia de inmersión en hielo MUNAY-KI, donde aprenderás a convertir el miedo y la incomodidad en tus aliados. Transforma tu vida con claridad y fortaleza a través de técnicas ancestrales.",
  keywords: "inmersión en hielo, transformación personal, despertar del avatar, superación del miedo, resiliencia, experiencia transformadora, MUNAY-KI, técnicas ancestrales, desarrollo personal, meditación en frío, terapia de frío",
  authors: [{ name: "MUNAY-KI" }],
  category: "Desarrollo Personal",
  openGraph: {
    title: "PANDORA EXPERIENCE - Experiencia de Inmersión en Hielo | MUNAY-KI",
    description: "Descubre la transformadora experiencia de inmersión en hielo MUNAY-KI. Aprende a convertir el miedo en fortaleza y encuentra tu poder interior.",
    url: "https://landing.chakana.io/",
    siteName: "PANDORA EXPERIENCE- MUNAY-KI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PANDORA EXPERIENCE- MUNAY-KI Experience",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Despertar del Avatar - MUNAY-KI Experience",
    description: "Transforma tu vida a través de la inmersión en hielo. Una experiencia única de MUNAY-KI.",
    images: ["/twitter-image.jpg"],
    creator: "@munayki",
    site: "@munayki",
  },
  alternates: {
    canonical: "https://eldespetardelavatar.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0560BB" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Structured Data for Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "El Despertar del Avatar - MUNAY-KI Experience",
              "description": "Una experiencia transformadora de inmersión en hielo donde aprenderás a convertir el miedo y la incomodidad en tus aliados.",
              "image": [
                "https:///og-image.jpg"
              ],
              "offers": {
                "@type": "Offer",
                "price": "497000",
                "priceCurrency": "COP",
                "availability": "https://schema.org/LimitedAvailability",
                "validFrom": "2024-01-01",
                "url": "https://eldespetardelavatar.com/#reserva"
              },
              "organizer": {
                "@type": "Organization",
                "name": "MUNAY-KI",
                "url": "https://eldespetardelavatar.com"
              },
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "maximumAttendeeCapacity": 25
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
