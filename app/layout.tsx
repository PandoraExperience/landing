import type { Metadata } from "next";
import { eventDate, experience } from "@/app/variables";
import "./globals.css";
import Script from 'next/script';

// Variables setup
const mark = "MUNAY-KI";
const metadataBase = new URL(experience.rrss.website);
const siteName = `${experience.name} - ${experience.shortDescription} | ${mark}`;
const siteDescription = experience.longDescription;
const siteKeywords = [...experience.category.keywords, mark];
const siteAuthors = [{ name: mark }];
const siteCategory = experience.category.name;
const siteTwitter = "@munayki";
const siteGoogleAnalytics = "G-SV2W2VMK1M";
const siteFacebookPixel = "569974109521705";
const siteFacebookVerification = "7s909e2dthuis6r8nxffz13hhxdpm1";
const siteHotjarId = "6431249";
const siteGoogleVerification = "L3tyI0LO8H9KNR5CznC1SveEnQ4bkGPd-69QjYLfjSc";

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
        url: "screenshots/home.jpg",
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
    images: ["screenshots/home.jpg"],
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
    google: "", // siteGoogleVerification
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0560BB" />
        <meta name="google-site-verification" content={siteGoogleVerification} />

        {/* Google Analytics tag (gtag.js) */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${siteGoogleAnalytics}`} />
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteGoogleAnalytics}');`}
        </Script>

        {/* Meta Pixel Code */}
        <Script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${siteFacebookPixel}');
          fbq('track', 'PageView');`}
        </Script>
        <meta name="facebook-domain-verification" content={siteFacebookVerification} />

        {/* Goat Counter */}
        <Script data-goatcounter="https://pandora-experience.goatcounter.com/count"
          async src="//gc.zgo.at/count.js"></Script>

        {/* Wompi */}
        <Script
          src="https://checkout.wompi.co/widget.js"
          strategy="afterInteractive"
        />

        {/* Hotjar Tracking Code */}
        <Script>
          {`(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${siteHotjarId},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>

        {/* Structured Data for the Event */}
        <Script
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
      <body>
        <img height="1" width="1" style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${siteFacebookPixel}&ev=PageView&noscript=1`}
        />
        {children}
      </body>
    </html>
  );
}
