import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'İletişim',
  description: 'VYNEX Tech Hub ile iletişime geçin.'
};

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'vynexhq.tech@gmail.com';

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220]">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-8">
            İletişim
          </h1>

          <div className="space-y-8">
            <p className="text-lg text-[#E5E7EB]/80 leading-relaxed">
              Sorularınız, önerileriniz veya iş birliği teklifleriniz için bizimle iletişime geçebilirsiniz.
            </p>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">İletişim Bilgileri</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-[#E5E7EB] mb-2">E-posta</h3>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-lg text-[#D4AF37] hover:underline"
                  >
                    {contactEmail}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#E5E7EB] mb-2">YouTube</h3>
                  <a
                    href="https://www.youtube.com/@VYNEXdecode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#D4AF37] hover:underline"
                  >
                    @VYNEXdecode
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#E5E7EB] mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/turancan-bolat-87a834228/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#D4AF37] hover:underline"
                  >
                    Turancan Bolat
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#E5E7EB]/60">
              Mesajlarınıza en kısa sürede yanıt vermeye çalışıyoruz. Genellikle 24-48 saat içinde geri dönüş yapıyoruz.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}