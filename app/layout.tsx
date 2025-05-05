import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

// Variables setup
const metadataBase = new URL('https://landing.chakana.io/');
const siteName = "PANDORA EXPERIENCE - Experiencia de Inmersión en Hielo | MUNAY-KI";
const siteDescription = "Descubre la transformadora experiencia de inmersión en hielo MUNAY-KI, donde aprenderás a convertir el miedo y la incomodidad en tus aliados. Transforma tu vida con claridad y fortaleza a través de técnicas ancestrales.";
const siteKeywords = ["inmersión en hielo", "transformación personal", "despertar del avatar", "superación del miedo", "resiliencia", "experiencia transformadora", "MUNAY-KI", "técnicas ancestrales", "desarrollo personal", "meditación en frío", "terapia de frío"];
const siteAuthors = [{ name: "MUNAY-KI" }];
const siteCategory = "Desarrollo Personal";
const siteTwitter = "@munayki";
const siteGoogleAnalytics = "G-XXXXXXXXXX";
const siteGoogleVerification = "your-google-verification-code";

const eventOffer = {
  "@type": "Offer",
  "price": 480000,
  "priceCurrency": "COP",
  "availability": "https://schema.org/LimitedAvailability",
  "validFrom": "2025-05-01",
  "url": metadataBase + "#reserva"
};

export const metadata: Metadata = {
  metadataBase: metadataBase,
  title: siteName,
  description: siteDescription,
  keywords: siteKeywords,
  authors: siteAuthors,
  category: siteCategory,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: metadataBase,
    siteName: siteName,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/twitter-image.jpg"],
    creator: siteTwitter,
    site: siteTwitter,
  },
  alternates: {
    canonical: metadataBase,
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
    google: siteGoogleVerification,
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
          src={`https://www.googletagmanager.com/gtag/js?id=${siteGoogleAnalytics}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${siteGoogleAnalytics});
          `}
        </Script>

        {/* Structured Data for Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": siteName,
              "description": siteDescription,
              "image": [
                "https:///og-image.jpg"
              ],
              "offers": eventOffer,
              "organizer": {
                "@type": "Organization",
                "name": "MUNAY-KI",
                "url": metadataBase
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
