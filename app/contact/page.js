export const metadata = {
  title: "İletişim | VYNEX Tech Hub",
  description:
    "VYNEX Tech Hub ile işbirliği, içerik önerisi veya teknik destek için iletişim sayfası.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-slate-50">İletişim</h1>

      <p className="text-slate-300 leading-relaxed">
        Bizimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz:
      </p>

      <ul className="text-slate-300 space-y-2">
        <li>
          📧 E-posta: <strong>contact@vynex.tech</strong>
        </li>
        <li>
          🔗 LinkedIn: <strong>linkedin.com</strong>
        </li>
        <li>
          ▶️ YouTube: <strong>youtube.com/@vynextechhub</strong>
        </li>
      </ul>

      <p className="text-slate-400 text-sm">
        Sorular, işbirlikleri, teknik talepler ve içerik önerileri için bize
        yazabilirsiniz.
      </p>
    </main>
  );
}
