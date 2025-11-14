import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Affiliate Açıklama',
  description: 'VYNEX Tech Hub affiliate bildirim ve açıklaması.'
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220]">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-8">
            Affiliate Açıklama
          </h1>

          <div className="space-y-6 text-[#E5E7EB]/80 text-lg leading-relaxed">
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-6">
              <p className="text-[#E5E7EB]">
                <strong>Önemli Bildirim:</strong> Bu sitede yer alan bazı bağlantılar affiliate (ortak) linkleridir.
              </p>
            </div>

            <p>
              VYNEX Tech Hub olarak, okurlara en iyi teknoloji ürünleri ve hizmetleri hakkında bilgi vermeyi amaçlıyoruz.
              Sitemizdeki bazı ürün önerileri ve bağlantılar affiliate programlarına katılımımız nedeniyle komisyon
              kazanmamızı sağlayabilir.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Affiliate Programlar Nedir?</h2>
            <p>
              Affiliate programları, bir web sitesinin başka bir şirketin ürün veya hizmetlerini önermesi ve
              bu öneriler sonucunda gerçekleşen satışlardan komisyon alması anlamına gelir. Bu, içerik üreticilerin
              kaliteli içerik üretmeye devam etmesini sağlayan yaygın bir iş modelidir.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Sizin İçin Ek Maliyet Yok</h2>
            <p>
              Affiliate linklerimiz üzerinden yapılan alışverişlerde, sizin için <strong>hiçbir ekstra maliyet
              oluşmaz</strong>. Ürünün fiyatı aynı kalır; komisyon, satıcı firma tarafından karşılanır.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Tarafsızlık ve Dürüstlük</h2>
            <p>
              Affiliate ilişkilerimiz, içerik bağımsızlığımızı veya tarafsızlığımızı etkilemez. Yalnızca gerçekten
              kaliteli ve yararlı olduğuna inandığımız ürünleri öneriyoruz. Ürün incelemeleri ve önerilerimiz,
              kişisel deneyimlerimize ve kapsamlı araştırmalarımıza dayanır.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Hangi Programlar?</h2>
            <p>
              Çeşitli teknoloji ürünleri satan platformların affiliate programlarına katılıyoruz. Bunlar arasında
              e-ticaret siteleri, üretici firmaların doğrudan satış kanalları ve özel teknoloji mağazaları yer alabilir.
            </p>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 mt-8">
              <p className="text-sm text-[#E5E7EB]/70">
                Bu açıklama, şeffaflık ve güven ilkelerimiz gereği paylaşılmıştır. Sorularınız için
                bizimle <a href="/contact" className="text-[#D4AF37] hover:underline">iletişime</a> geçebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}