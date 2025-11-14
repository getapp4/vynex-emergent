import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Hakkımızda',
  description: 'VYNEX Tech Hub hakkında bilgi edinin. Teknoloji rehberleri ve pratik çözümler.'
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220]">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-8">
            Hakkımızda
          </h1>

          <div className="space-y-6 text-[#E5E7EB]/80 text-lg leading-relaxed">
            <p>
              VYNEX Tech Hub, teknoloji meraklıları için güvenilir bilgi kaynağı olmayı hedefleyen bir platformdur.
              TCB TECHNOLOGY markası altında, donanım standartları, kablo teknolojileri ve pratik çözümler hakkında
              detaylı rehberler sunuyoruz.
            </p>

            <p>
              HDMI 2.1, USB-C E-Marker, PoE standartları ve daha birçok konuda teknik detayları anlaşılır bir
              dille aktarıyoruz. Amacımız, karmaşık teknoloji konularını herkesin anlayabileceği şekilde açıklamak
              ve doğru ürün seçimi konusunda rehberlik etmektir.
            </p>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-8 my-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Misyonumuz</h2>
              <p className="text-[#E5E7EB]/80">
                Teknoloji dünyasının karmaşık standartlarını ve terminolojisini herkes için erişilebilir hale
                getirmek, tüketicilerin bilinçli kararlar almasına yardımcı olmak.
              </p>
            </div>

            <p>
              YouTube kanalımız <a href="https://www.youtube.com/@VYNEXdecode" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">@VYNEXdecode</a> üzerinden
              video içeriklerimizle de bilgi paylaşımına devam ediyoruz.
            </p>

            <p>
              Sorularınız veya önerileriniz için bizimle <a href="/contact" className="text-[#D4AF37] hover:underline">iletişime</a> geçebilirsiniz.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}