import "./globals.css";
import Script from "next/script";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://vynex.tech");

const ADSENSE_ID = "ca-pub-1148906273422150";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "VYNEX Tech Hub - Teknoloji Rehberleri",
    template: "%s | VYNEX Tech Hub",
  },
  description:
    "USB, HDMI, DisplayPort, PoE, Thunderbolt ve bağlantı teknolojileri üzerine teknik rehberler, incelemeler ve gerçek testler.",
  openGraph: {
    title: "VYNEX Tech Hub",
    description:
      "USB, HDMI, DisplayPort, PoE, Thunderbolt ve bağlantı teknolojileri üzerine teknik rehberler, incelemeler ve gerçek testler.",
    url: "/",
    type: "website",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VYNEX Tech Hub",
    description:
      "USB, HDMI, DisplayPort, PoE, Thunderbolt ve bağlantı teknolojileri üzerine teknik rehberler, incelemeler ve gerçek testler.",
    images: ["/og.jpg"],
  },
  verification: {
    google: "V0Sy91dpRxxt_ZJ1Nxw1VOGqUW6L5Y6edZ0cLknI3pQ",
  },
  keywords: [
    "USB-C",
    "HDMI",
    "DisplayPort",
    "PoE",
    "Thunderbolt",
    "kablo rehberi",
    "teknik inceleme",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* AdSense meta tag */}
        <meta name="google-adsense-account" content={ADSENSE_ID} />
      </head>
      <body className="bg-slate-950 text-slate-50">
        {/* AdSense script */}
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}

