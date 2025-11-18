import "./globals.css";

export const metadata = {
  title: "VYNEX Tech Hub - Teknoloji Rehberleri",
  description:
    "USB, HDMI, DisplayPort, PoE, Thunderbolt ve bağlantı teknolojileri üzerine teknik rehberler, incelemeler ve gerçek testler.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
