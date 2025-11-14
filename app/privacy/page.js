import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gizlilik Politikası',
  description: 'VYNEX Tech Hub gizlilik politikası ve kişisel veri koruma bilgileri.'
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220]">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-8">
            Gizlilik Politikası
          </h1>

          <div className="space-y-6 text-[#E5E7EB]/80 text-lg leading-relaxed">
            <p>
              VYNEX Tech Hub olarak, ziyaretçilerimizin gizliliğine saygı duyuyoruz ve kişisel verilerinizi
              korumayı taahhüt ediyoruz.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Toplanan Bilgiler</h2>
            <p>
              Web sitemizi ziyaret ettiğinizde, standart web sunucusu kayıtları (IP adresi, tarayıcı türü,
              erişim zamanı) otomatik olarak toplanabilir. Bu bilgiler, site performansını iyileştirmek ve
              güvenliği sağlamak amacıyla kullanılır.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Çerezler (Cookies)</h2>
            <p>
              Sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir. Çerezler, cihazınızda
              saklanan küçük metin dosyalarıdır. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya
              reddedebilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Üçüncü Taraf Hizmetleri</h2>
            <p>
              Sitemizde Google AdSense gibi üçüncü taraf reklam hizmetleri yer alabilir. Bu hizmetler,
              ilgi alanlarınıza yönelik reklamlar göstermek için çerezler kullanabilir. Bu hizmetlerin
              gizlilik politikalarını incelemenizi öneririz.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Affiliate Linkleri</h2>
            <p>
              Affiliate linklerimize tıkladığınızda, üçüncü taraf sitelere yönlendirilirsiniz. Bu sitelerin
              gizlilik uygulamaları bizim kontrolümüz dışındadır. Daha fazla bilgi için
              <a href="/disclosure" className="text-[#D4AF37] hover:underline ml-1">affiliate açıklama</a> sayfamızı
              ziyaret edebilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Veri Güvenliği</h2>
            <p>
              Bilgilerinizin güvenliğini sağlamak için makul önlemler alıyoruz. Ancak, internet üzerinden
              yapılan hiçbir veri iletiminin %100 güvenli olmadığını unutmayın.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız varsa, lütfen bizimle
              <a href="/contact" className="text-[#D4AF37] hover:underline ml-1">iletişime</a> geçin.
            </p>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 mt-8">
              <p className="text-sm text-[#E5E7EB]/70">
                <strong>Son Güncelleme:</strong> Bu gizlilik politikası düzenli olarak güncellenebilir.
                Önemli değişiklikler olduğunda sizi bilgilendireceğiz.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}