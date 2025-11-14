import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://example.com');

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'VYNEX Tech Hub - Teknoloji Rehberleri',
    template: '%s | VYNEX Tech Hub'
  },
  description: 'Teknoloji rehberleri: HDMI 2.1, USB-C E-Marker ve pratik çözümler.',
  openGraph: {
    title: 'VYNEX Tech Hub',
    description: 'Teknoloji rehberleri: HDMI 2.1, USB-C E-Marker ve pratik çözümler.',
    type: 'website',
    url: '/',
    images: ['/og.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg']
  },
  verification: {
    google: 'V0Sy91dpRxxt_ZJ1Nxw1VOGqUW6L5Y6edZ0cLknI3pQ'
  }
};

export default function RootLayout({ children }) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  return (
    <html lang="tr">
      <head>
        {adsenseId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
          ></script>
        )}
      </head>
      <body className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 selection:bg-[#D4AF37]/30 antialiased">
        {children}
      </body>
    </html>
  );
}