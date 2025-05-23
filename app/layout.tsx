import type { Metadata } from "next";
import { eventDate, experience } from "@/app/variables";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

// Variables setup
const mark = "MUNAY-KI";
const metadataBase = new URL(experience.rrss.website);
const siteName = `${experience.name} - ${experience.shortDescription} | ${mark}`;
const siteDescription = experience.longDescription;
const siteKeywords = [...experience.category.keywords, mark];
const siteAuthors = [{ name: mark }];
const siteCategory = experience.category.name;
const siteTwitter = "@munayki";
const siteGoogleAnalytics = "G-XXXXXXXXXX";
const siteGoogleVerification = "your-google-verification-code";

const eventOffer = {
  "@type": "Offer",
  "price": experience.price.amountInCents / 100,
  "priceCurrency": experience.price.currency,
  "availability": "https://schema.org/LimitedAvailability",
  "validFrom": eventDate.toISOString(),
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

        {/* Wompi */}
        <Script
          src="https://checkout.wompi.co/widget.js"
          strategy="afterInteractive"
        />

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
