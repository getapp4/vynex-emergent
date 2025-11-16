export const metadata = {
  title: "Gizlilik Politikası | VYNEX Tech Hub",
  description:
    "VYNEX Tech Hub gizlilik politikası. Çerez kullanımı, veri koruma ve üçüncü taraf hizmetler hakkında bilgiler.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-slate-50">
        Gizlilik Politikası
      </h1>

      <p className="text-slate-300 leading-relaxed">
        VYNEX Tech Hub olarak ziyaretçilerimizin gizliliğini önemsiyoruz. Bu
        sayfa, hangi verilerin toplandığını ve nasıl kullanıldığını açıklar.
      </p>

      <h2 className="text-2xl font-semibold text-slate-100">
        Toplanan Veriler
      </h2>
      <p className="text-slate-300">
        Sitemizi ziyaret ettiğinizde tarayıcınız, IP adresiniz ve çerez
        bilgileri gibi standart log verileri otomatik olarak alınabilir.
      </p>

      <h2 className="text-2xl font-semibold text-slate-100">
        Üçüncü Taraf Hizmetleri
      </h2>
      <p className="text-slate-300">
        Google AdSense ve Google Analytics gibi hizmetler, çerez kullanarak
        anonim analiz verileri toplayabilir.
      </p>

      <h2 className="text-2xl font-semibold text-slate-100">
        Çerez Kullanımı
      </h2>
      <p className="text-slate-300">
        Çerezler kullanıcı deneyimini geliştirmek ve reklam gösterimlerini
        optimize etmek amacıyla kullanılabilir.
      </p>

      <h2 className="text-2xl font-semibold text-slate-100">İletişim</h2>
      <p className="text-slate-300">
        Gizlilik politikası ile ilgili sorularınız için:{" "}
        <strong>contact@vynex.tech</strong>
      </p>

      <p className="text-slate-400 text-sm">
        Bu politika zaman zaman güncellenebilir.
      </p>
    </main>
  );
}
