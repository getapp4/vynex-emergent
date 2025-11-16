export const metadata = {
  title: "Hakkımızda | VYNEX Tech Hub",
  description:
    "VYNEX Tech Hub, USB, HDMI, PoE ve modern bağlantı standartları üzerine teknik rehberler, testler ve incelemeler sunar.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-slate-50">Hakkımızda</h1>
      <p className="text-slate-300 leading-relaxed">
        VYNEX Tech Hub, modern bağlantı teknolojileri üzerine teknik rehberler,
        testler ve incelemeler sunan bağımsız bir teknoloji platformudur.
      </p>
      <p className="text-slate-300 leading-relaxed">
        USB, HDMI, DisplayPort, Thunderbolt, PoE ve IP kameralar gibi alanlarda
        kullanıcıların doğru ürünleri seçebilmesi için veriye dayalı içerikler
        üretiyoruz.
      </p>
      <p className="text-slate-400 text-sm">
        VYNEX — Doğru teknoloji, doğru seçim.
      </p>
    </main>
  );
}
