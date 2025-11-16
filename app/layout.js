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
    type: "website",
    url: "/",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
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

        {/* AdSense script */}
        <Script
          id="adsense-script"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}

