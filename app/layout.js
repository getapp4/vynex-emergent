import "./globals.css";
import Script from "next/script";

const ADSENSE_ID = "ca-pub-1148906273422150";

export const metadata = {
  title: "VYNEX Tech Hub - Teknoloji Rehberleri",
  description:
    "USB, HDMI, DisplayPort, PoE, Thunderbolt ve bağlantı teknolojileri üzerine teknik rehberler, incelemeler ve gerçek testler.",
  verification: {
    google: "V0Sy91dpRxxt_ZJ1Nxw1VOGqUW6L5Y6edZ0cLknI3pQ",
  },
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
