import "./globals.css";
import Script from "next/script";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://vynex.tech");

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "VYNEX Tech Hub - Teknoloji Rehberleri",
    template: "%s | VYNEX Tech Hub",
  },
  description:
    "Teknoloji rehberleri: HDMI 2.1, USB-C E-Marker ve pratik çözümler.",
  openGraph: {
    title: "VYNEX Tech Hub",
    description:
      "Teknoloji rehberleri: HDMI 2.1, USB-C E-Marker ve pratik çözümler.",
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
};

const ADSENSE_ID = "ca-pub-1148906273422150";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 selection:bg-[#D4AF37]/30 antialiased">
        {children}
        <Script
          id="adsense-init"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
